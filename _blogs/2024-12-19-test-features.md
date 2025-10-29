---
layout: blog
title: 'Testing Blog Features - Code, Math, and Images'
date: 2024-12-19
permalink: /posts/2024/12/test-features/
tags:
  - test
  - feature-demo
  - code-highlighting
  - math-formulas
---

This is a test blog post to demonstrate code highlighting, math formula rendering, and image insertion functionality.

## Code Highlighting Demo

### Python Code

```python
def fibonacci(n):
    """Calculate the nth term of the Fibonacci sequence"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Usage example
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
```

### JavaScript Code

```javascript
// Async function example
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Usage example
fetchData('/api/data')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### Inline Code

Here are some `inline code` examples, like `console.log()` and `Math.PI`.

## Math Formula Demo

### Inline Math Formulas

This is an inline formula: $E = mc^2$, and another one: $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$

### Block-level Math Formulas

This is the quadratic formula:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

This is Euler's identity:

$$e^{i\pi} + 1 = 0$$

This is an integral formula:

$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$

## Image Demo

### Using Relative Path Images

![Portrait Image]({{ '/assets/images/photos/portrait.jpg' | relative_url }})

![Preview Image]({{ '/assets/images/etc/preview.png' | relative_url }})

### Using Absolute URL Images

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## Other Markdown Features

### Tables

| Feature | Status | Description |
|---------|--------|-------------|
| Code Highlighting | ✅ | Supports multiple programming languages |
| Math Formulas | ✅ | Supports LaTeX syntax |
| Image Insertion | ✅ | Supports relative and absolute paths |
| Tables | ✅ | Standard Markdown tables |

### Blockquotes

> This is a blockquote example. It can be used to highlight important content or quote others.

### Lists

#### Unordered List
- First item
- Second item
  - Nested item 1
  - Nested item 2
- Third item

#### Ordered List
1. First step
2. Second step
3. Third step
