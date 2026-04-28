(function () {
    var tocList = document.querySelector('.blog-toc-list');
    if (!tocList) return;

    var content = document.querySelector('.blog-content');
    var headings = content.querySelectorAll('h1, h2, h3');
    var navbarHeight = 90;

    if (headings.length === 0) {
        document.getElementById('blog-toc').style.display = 'none';
        return;
    }

    // Add scroll-margin to all headings so anchor links clear the navbar
    headings.forEach(function (heading, i) {
        if (!heading.id) {
            heading.id = 'heading-' + i;
        }
        heading.style.scrollMarginTop = navbarHeight + 'px';

        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        a.className = 'toc-' + heading.tagName.toLowerCase();
        a.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.getElementById(heading.id);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
                history.pushState(null, null, '#' + heading.id);
            }
        });
        li.appendChild(a);
        tocList.appendChild(li);
    });

    // Highlight active heading on scroll
    var tocLinks = tocList.querySelectorAll('a');
    function updateActive() {
        var scrollPos = window.scrollY + navbarHeight + 10;
        var current = null;
        headings.forEach(function (heading) {
            if (heading.offsetTop <= scrollPos) {
                current = heading.id;
            }
        });
        tocLinks.forEach(function (link) {
            link.classList.toggle('toc-active', link.getAttribute('href') === '#' + current);
        });
    }
    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
})();
