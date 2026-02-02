---
layout: blog
title: 'Syntax Highlighting Demo'
date: 2025-10-29
permalink: /posts/2025/10/syntax-highlighting-demo/
tags:
  - demo
  - syntax-highlighting
  - code
---

# Syntax Highlighting Demo

This page demonstrates syntax highlighting for various programming languages using both Rouge (server-side) and Prism.js (client-side).

## Python Code

```python
def fibonacci(n):
    """Calculate the nth Fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# List comprehension example
squares = [x**2 for x in range(10) if x % 2 == 0]

# Class definition
class DataProcessor:
    def __init__(self, data):
        self.data = data
    
    def process(self):
        return [item.upper() for item in self.data if item]
```

## JavaScript Code

```javascript
// Arrow functions and async/await
const fetchUserData = async (userId) => {
    try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

// ES6 classes and modules
class UserManager {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    
    async createUser(userData) {
        const newUser = await this.apiClient.post('/users', userData);
        return newUser;
    }
}

// Destructuring and spread operator
const { name, email, ...otherProps } = user;
const updatedUser = { ...user, lastLogin: new Date() };
```

## HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <ul class="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="hero">
            <h1>Welcome to Our Site</h1>
            <p>This is a sample paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
        </section>
    </main>
    
    <script src="script.js"></script>
</body>
</html>
```

## CSS Code

```css
/* Modern CSS with Flexbox and Grid */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

.card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

/* CSS Custom Properties */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --font-family: 'Inter', sans-serif;
}

.button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-family: var(--font-family);
    cursor: pointer;
}
```

## Liquid Template Code

```liquid
{% comment %} This is a Liquid template example {% endcomment %}
{% assign posts = site.posts | where: "published", true | sort: "date" | reverse %}

<div class="blog-posts">
    {% for post in posts limit:5 %}
        <article class="post-card">
            <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            <div class="post-meta">
                <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
                    {{ post.date | date: "%B %d, %Y" }}
                </time>
                {% if post.tags %}
                    <div class="tags">
                        {% for tag in post.tags %}
                            <span class="tag">{{ tag }}</span>
                        {% endfor %}
                    </div>
                {% endif %}
            </div>
            <div class="post-excerpt">
                {{ post.excerpt | strip_html | truncate: 200 }}
            </div>
        </article>
    {% endfor %}
</div>
```

## JSON Code

```json
{
  "name": "academic-homepage",
  "version": "1.0.0",
  "description": "A modern academic homepage built with Jekyll",
  "scripts": {
    "build": "bundle exec jekyll build",
    "serve": "bundle exec jekyll serve",
    "dev": "bundle exec jekyll serve --livereload"
  },
  "dependencies": {
    "bootstrap": "^4.6.0",
    "jquery": "^3.5.1",
    "prismjs": "^1.29.0"
  },
  "devDependencies": {
    "jekyll": "^4.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/username/academic-homepage.git"
  }
}
```

## YAML Code

```yaml
# Jekyll configuration
title: "Academic Homepage"
description: "A modern academic homepage"
baseurl: "/academic-homepage"

# Collections
collections:
  publications:
    output: true
  blogs:
    output: true
    permalink: /posts/:year/:month/:title/

# Build settings
markdown: kramdown
highlighter: rouge
kramdown:
  syntax_highlighter: rouge
  syntax_highlighter_opts:
    css_class: 'highlight'

# Plugins
plugins:
  - jekyll-email-protect
```

## Bash/Shell Code

```bash
#!/bin/bash

# Function to build and serve Jekyll site
build_site() {
    echo "Building Jekyll site..."
    bundle exec jekyll build
    
    if [ $? -eq 0 ]; then
        echo "Build successful!"
        return 0
    else
        echo "Build failed!"
        return 1
    fi
}

# Function to serve site with live reload
serve_site() {
    echo "Starting Jekyll server..."
    bundle exec jekyll serve --livereload --host 0.0.0.0 --port 4000
}

# Main script logic
case "$1" in
    "build")
        build_site
        ;;
    "serve")
        serve_site
        ;;
    *)
        echo "Usage: $0 {build|serve}"
        exit 1
        ;;
esac
```

## SQL Code

```sql
-- Create users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO users (username, email) VALUES
    ('john_doe', 'john@example.com'),
    ('jane_smith', 'jane@example.com'),
    ('bob_wilson', 'bob@example.com');

-- Query with JOIN and aggregation
SELECT 
    u.username,
    u.email,
    COUNT(p.id) as post_count,
    MAX(p.created_at) as last_post_date
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.created_at >= '2024-01-01'
GROUP BY u.id, u.username, u.email
HAVING post_count > 0
ORDER BY post_count DESC;
```
