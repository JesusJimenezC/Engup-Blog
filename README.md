# 🚀 EngUp Blog - Modern Astro Blog with Directus CMS

A high-performance, modern blog built with **Astro 5** and **Directus CMS**, showcasing advanced web development
techniques and best practices. This project demonstrates expertise in modern web technologies, server-side rendering,
and headless CMS integration.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-blue?style=for-the-badge)](https://engup-blog.ilien.dev/)
[![Docker Hub](https://img.shields.io/badge/🐳_Docker_Hub-Available-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/r/jjimenezc/engup-blog)

## ✨ Key Features & Technical Highlights

### 🎯 **Advanced Astro Implementation**

- **Server-Side Rendering (SSR)** with Node.js adapter in standalone mode
- **View Transitions API** for smooth page navigation with `transition:name` attributes
- **Optimized Image Processing** with AVIF format, lazy loading, and responsive sizing
- **Dynamic Routing** with slug-based post URLs (`/posts/[slug].astro`)
- **Component-Based Architecture** with reusable Astro components

### 🎨 **Modern Frontend Stack**

- **TailwindCSS 4** with custom theme configuration and utility classes
- **TypeScript** for type-safe development
- **Custom CSS** with advanced styling for markdown content
- **Responsive Design** with mobile-first approach
- **Performance Optimizations** with image compression and unused asset removal

### 📝 **Advanced Markdown Processing**

- **Remark & Rehype Pipeline** for markdown-to-HTML transformation
- **GitHub Flavored Markdown (GFM)** support
- **Custom Rehype Plugins** for Astro Image integration and table wrapping
- **Syntax Highlighting** and rich content formatting
- **Dynamic Image Optimization** within markdown content

### 🗄️ **Directus CMS Integration**

- **Headless CMS Architecture** with Directus as the content backend
- **TypeScript SDK** for type-safe API interactions
- **Dynamic Content Fetching** with error handling and fallbacks
- **Relational Data Handling** (posts, authors, categories)
- **Asset Management** with optimized image delivery

### 🐳 **Production-Ready Deployment**

- **Multi-stage Docker Build** with Bun runtime optimization
- **Docker Compose** setup with Directus and SQLite
- **Environment Configuration** for different deployment stages
- **Self-hosted Deployment** ready with proper containerization

## 🛠️ Technology Stack

| Category        | Technologies                    |
|-----------------|---------------------------------|
| **Framework**   | Astro 5, Node.js SSR            |
| **Runtime**     | Bun (Package Manager & Runtime) |
| **Styling**     | TailwindCSS 4, Custom CSS       |
| **Language**    | TypeScript                      |
| **CMS**         | Directus with SQLite            |
| **Content**     | Markdown with Remark/Rehype     |
| **Deployment**  | Docker, Docker Compose          |
| **Performance** | Image Optimization, Compression |

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed
- [Docker](https://docker.com/) and Docker Compose (optional)

### Local Development

```bash
# Clone the repository
git clone <repository-url>
cd engup-blog

# Install dependencies with Bun
bun install

# Start development server
bun run dev
```

### Docker Deployment

```bash
# Using Docker Compose (includes Directus)
docker-compose up -d
# Execute the next command if you want to execute just the directus service
docker-compose up -d directus

# Or pull from Docker Hub
docker pull jjimenezc/engup-blog
```

## 📁 Project Architecture

```
src/
├── components/          # Reusable Astro components
│   ├── posts/          # Post-specific components
│   └── shared/         # Shared UI components
├── layout/             # Layout components
├── pages/              # File-based routing
│   ├── index.astro     # Homepage with SSR data fetching
│   ├── posts.astro     # Posts listing page
│   └── posts/[slug].astro  # Dynamic post pages
├── utils/              # Utility functions
│   ├── api.ts          # Directus API integration
│   ├── rehype-*.ts     # Custom markdown processors
│   └── date-format.ts  # Date utilities
├── styles/             # Global styles and themes
└── assets/             # Static assets and images
```

## 🎨 Advanced Features Showcase

### Image Optimization Pipeline

```typescript
// Custom rehype plugin for Astro Image integration
export default function rehypeAstroImage() {
  return (tree: Root) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        node.tagName = 'Image';
        node.properties = {
          src: node.properties?.src,
          alt: node.properties?.alt ?? '',
          loading: 'lazy',
          quality: 10,
          format: 'avif',
        };
      }
    });
  };
}
```

### Type-Safe Directus Integration

```typescript
interface Post {
  id: number;
  image: string;
  title: string;
  author: Author;
  content: string;
  published_date: string;
  slug: string;
  status: string;
  categories: PostCategory[];
  short_description: string;
}

const directus = createDirectus<Schema>(directusUrl).with(rest());
```

### View Transitions Implementation

```astro
<Image
  src={imagePath}
  alt={imageAlt}
  transition:name={slug}
  class="w-full max-h-96 object-cover"
/>
```

## 🔧 Development Commands

```bash
# Development
bun run dev              # Start dev server
bun run build            # Build for production
bun run preview          # Preview production build

# Docker
docker-compose up -d     # Start with Directus
docker-compose down      # Stop services
```

## 🌟 Why This Project Stands Out

1. **Modern Architecture**: Leverages the latest Astro 5 features with SSR
2. **Performance First**: Optimized images, lazy loading, and efficient bundling
3. **Type Safety**: Full TypeScript implementation with proper typing
4. **Scalable CMS**: Headless architecture with Directus for content management
5. **Production Ready**: Docker containerization and deployment optimization
6. **Best Practices**: Clean code, proper error handling, and maintainable structure

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **Image Optimization**: AVIF format with quality optimization
- **Bundle Size**: Minimized with tree-shaking and compression
- **Loading Speed**: Optimized with lazy loading and efficient caching

---

**Built with ❤️ using modern web technologies**

*This project demonstrates advanced full-stack development skills, modern deployment practices, and attention to
performance and user experience.*
