---
layout: blog
title: 'Image Gallery Demo'
date: 2024-12-19
permalink: /posts/2024/12/gallery-demo/
tags:
  - demo
  - gallery
  - images
---

# Image Gallery Demo

This blog post demonstrates various image gallery layouts and components.

## Two-Column Gallery

{% include widgets/image_grid.html images="etc/cat1.jpg,etc/cat2.jpg" columns=2 alts="Cat 1,Cat 2" %}

## Three-Column Gallery

{% include widgets/image_grid.html images="etc/preview.png,etc/cat1.jpg,etc/cat2.jpg" columns=3 alts="Preview,Cat 1,Cat 2" %}

## Manual Two-Column Layout

<div class="row">
    <div class="col-md-6 mb-3">
        <img src="{{ '/assets/images/etc/cat1.jpg' | relative_url }}" 
             alt="Cat 1" 
             class="img-fluid rounded shadow-sm">
    </div>
    <div class="col-md-6 mb-3">
        <img src="{{ '/assets/images/etc/cat2.jpg' | relative_url }}" 
             alt="Cat 2" 
             class="img-fluid rounded shadow-sm">
    </div>
</div>

## Manual Three-Column Layout

<div class="row">
    <div class="col-md-4 mb-3">
        <img src="{{ '/assets/images/etc/preview.png' | relative_url }}" 
             alt="Preview" 
             class="img-fluid rounded shadow-sm">
    </div>
    <div class="col-md-4 mb-3">
        <img src="{{ '/assets/images/etc/cat1.jpg' | relative_url }}" 
             alt="Cat 1" 
             class="img-fluid rounded shadow-sm">
    </div>
    <div class="col-md-4 mb-3">
        <img src="{{ '/assets/images/etc/cat2.jpg' | relative_url }}" 
             alt="Cat 2" 
             class="img-fluid rounded shadow-sm">
    </div>
</div>

## Responsive Gallery (4 columns on large screens)

<div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <img src="{{ '/assets/images/etc/preview.png' | relative_url }}" 
             alt="Preview" 
             class="img-fluid rounded shadow-sm">
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <img src="{{ '/assets/images/etc/cat1.jpg' | relative_url }}" 
             alt="Cat 1" 
             class="img-fluid rounded shadow-sm">
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <img src="{{ '/assets/images/etc/cat2.jpg' | relative_url }}" 
             alt="Cat 2" 
             class="img-fluid rounded shadow-sm">
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
        <img src="{{ '/assets/images/photos/portrait.jpg' | relative_url }}" 
             alt="Portrait" 
             class="img-fluid rounded shadow-sm">
    </div>
</div>

## Mixed Content Layout

<div class="row">
    <div class="col-md-8">
        <h4>Content with Side Image</h4>
        <p>This demonstrates how to mix text content with images in a responsive layout. The image will appear alongside the text on larger screens and stack below on mobile devices.</p>
        <p>The layout automatically adjusts based on screen size, ensuring optimal viewing experience across all devices.</p>
    </div>
    <div class="col-md-4">
        <img src="{{ '/assets/images/photos/portrait.jpg' | relative_url }}" 
             alt="Portrait" 
             class="img-fluid rounded">
    </div>
</div>

## Image with Captions

<div class="row">
    <div class="col-md-6 mb-3">
        <img src="{{ '/assets/images/etc/cat1.jpg' | relative_url }}" 
             alt="Cat 1" 
             class="img-fluid rounded shadow-sm">
        <p class="text-muted small mt-2 text-center">Cat 1 - A beautiful feline friend</p>
    </div>
    <div class="col-md-6 mb-3">
        <img src="{{ '/assets/images/etc/cat2.jpg' | relative_url }}" 
             alt="Cat 2" 
             class="img-fluid rounded shadow-sm">
        <p class="text-muted small mt-2 text-center">Cat 2 - Another lovely cat</p>
    </div>
</div>

All images are fully responsive and will adapt to different screen sizes automatically.
