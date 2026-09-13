(function () {
    const elementsById = new Map();
    const citationCounts = new Map();
    const cacheLifetime = 60 * 60 * 1000;

    document.querySelectorAll('[data-semantic-scholar-id]').forEach(element => {
        const id = (element.getAttribute('data-semantic-scholar-id') || '').trim().toLowerCase();
        if (!id) return;
        element.setAttribute('data-semantic-scholar-id', id);
        if (!elementsById.has(id)) elementsById.set(id, []);
        elementsById.get(id).push(element);
    });

    function validCitationCount(data) {
        return data && Number.isInteger(data.citationCount) && data.citationCount >= 0;
    }

    function readCache(id) {
        try {
            const data = JSON.parse(localStorage.getItem(`semanticScholarCitationCount:${id}`));
            if (validCitationCount(data) && Number.isFinite(data.timestamp) && data.timestamp > 0) {
                return data;
            }
        } catch (_) {
            // Storage may be unavailable or contain malformed data. Fetch instead.
        }
        return null;
    }

    function writeCache(id, data) {
        try {
            localStorage.setItem(`semanticScholarCitationCount:${id}`, JSON.stringify(data));
        } catch (_) {
            // Persistence is optional; fetched counts are also kept in memory.
        }
    }

    function renderCitationCount(id) {
        const data = citationCounts.get(id);
        if (!data) return;
        const paperId = typeof data.paperId === 'string' && data.paperId ? data.paperId : id;
        elementsById.get(id).forEach(element => {
            const link = document.createElement('a');
            link.className = 'badge badge-pill badge-publication badge-info';
            link.href = `https://www.semanticscholar.org/paper/${encodeURIComponent(paperId)}`;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            const icon = document.createElement('i');
            icon.className = 'ai ai-semantic-scholar';
            icon.setAttribute('aria-hidden', 'true');
            link.appendChild(icon);
            link.appendChild(document.createTextNode(` ${data.citationCount.toLocaleString()} citations`));
            element.textContent = '';
            element.appendChild(link);
        });
    }

    const uncachedIds = [];
    elementsById.forEach((_, id) => {
        const cachedData = readCache(id);
        if (cachedData) {
            citationCounts.set(id, cachedData);
            renderCitationCount(id);
        }
        if (!cachedData || Date.now() - cachedData.timestamp > cacheLifetime || cachedData.timestamp > Date.now()) {
            uncachedIds.push(id);
        }
    });

    if (uncachedIds.length === 0) return;

    fetch('https://api.semanticscholar.org/graph/v1/paper/batch?fields=citationCount', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ids: uncachedIds})
    }).then(response => {
        if (!response.ok) throw new Error(`Semantic Scholar request failed (${response.status})`);
        return response.json();
    }).then(data => {
        if (!Array.isArray(data)) throw new Error('Invalid Semantic Scholar batch response');
        // Batch results correspond to requested IDs, including null entries for missing papers.
        data.forEach((paper, index) => {
            const id = uncachedIds[index];
            if (!id || !validCitationCount(paper) || typeof paper.paperId !== 'string' || !paper.paperId) return;
            const cacheData = {
                paperId: paper.paperId,
                citationCount: paper.citationCount,
                timestamp: Date.now()
            };
            citationCounts.set(id, cacheData);
            renderCitationCount(id);
            writeCache(id, cacheData);
        });
    }).catch(error => {
        console.error('Error fetching Semantic Scholar data:', error);
    });
})();
