---
layout: blog
title: 'Quick Image Examples'
date: 2024-12-19
permalink: /posts/2024/12/quick-examples/
tags:
  - examples
  - quick-start
---

# Quick Image Examples

This page shows the most common ways to display images in your blog posts.

## Method 1: Custom Images Two-Column

<code class="language-liquid">&#123;% include widgets/image_grid.html images="etc/cat1.jpg,etc/cat2.jpg" columns=2 %&#125;</code>

Result:

{% include widgets/image_grid.html images="etc/cat1.jpg,etc/cat2.jpg" columns=2 %}

## Method 2: Custom Images Three-Column

<code class="language-liquid">&#123;% include widgets/image_grid.html images="etc/preview.png,etc/cat1.jpg,etc/cat2.jpg" columns=3 %&#125;</code>

Result:

{% include widgets/image_grid.html images="etc/preview.png,etc/cat1.jpg,etc/cat2.jpg" columns=3 %}

## Method 3: Single Image (Standard Markdown)

<code class="language-markdown">![Portrait](&#123;&#123; '/assets/images/photos/portrait.jpg' | relative_url &#125;&#125;)</code>

Result:

![Portrait]({{ '/assets/images/photos/portrait.jpg' | relative_url }})

## Method 4: Manual HTML (Full Control)

```
<div class="row">
    <div class="col-md-6">
        <img src="{{ '/assets/images/etc/cat1.jpg' | relative_url }}" 
             alt="Cat 1" 
             class="img-fluid rounded shadow-sm">
    </div>
    <div class="col-md-6">
        <img src="{{ '/assets/images/etc/cat2.jpg' | relative_url }}" 
             alt="Cat 2" 
             class="img-fluid rounded shadow-sm">
    </div>
</div>
```

Result:

<div class="row">
    <div class="col-md-6">
        <img src="{{ '/assets/images/etc/cat1.jpg' | relative_url }}" 
             alt="Cat 1" 
             class="img-fluid rounded shadow-sm">
    </div>
    <div class="col-md-6">
        <img src="{{ '/assets/images/etc/cat2.jpg' | relative_url }}" 
             alt="Cat 2" 
             class="img-fluid rounded shadow-sm">
    </div>
</div>
