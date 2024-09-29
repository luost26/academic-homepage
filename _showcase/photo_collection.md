---
show: true
width: 6
date: 2024-09-12 00:01:00 +0800
---

<!--
Don't forget to change all the occurences of "carouselExampleCaptions".
Otherwise, if there are multiple carousels on the same page, they will not work.
-->


<div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner" style="height: 300px;">
        <div class="carousel-item active">
            <div class="d-block rounded-sm" style="height: 300px; overflow: hidden">
                <img data-src="https://picsum.photos/seed/first1/800/600" class="lazy d-block w-100" src="{{ '/assets/images/empty_300x200.png' | relative_url }}">
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h5>Photo Collection</h5>
                <p>You can even put a photo carousel here!</p>
            </div>
        </div>
        <div class="carousel-item">
            <div class="d-block rounded-sm" style="height: 300px; overflow: hidden">
                <img data-src="https://picsum.photos/seed/second2/600" class="lazy d-block w-100" src="{{ '/assets/images/empty_300x200.png' | relative_url }}">
            </div>
        </div>
        <div class="carousel-item">
            <div class="d-block rounded-sm" style="height: 300px; overflow: hidden">
                <img data-src="https://picsum.photos/seed/third3/600" class="lazy d-block w-100" src="{{ '/assets/images/empty_300x200.png' | relative_url }}">
            </div>
        </div>
    </div>
    <div class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </div>
    <div class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </div>
    </div>
</div>