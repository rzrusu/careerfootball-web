// https://astro.build/config
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Post images fill the article column; a paragraph holding only a link becomes a card
function rehypeArticle() {
  return (tree) => {
    const walk = (node) => {
      if (node.tagName === 'img') {
        node.properties.sizes = '(min-width: 752px) 720px, calc(100vw - 2rem)';
      }
      if (node.tagName === 'p') {
        const children = node.children.filter((child) => child.type !== 'text' || child.value.trim());
        if (children.length === 1 && children[0].tagName === 'a') node.properties.className = ['link-card'];
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://profootballerlife.com',
  integrations: [mdx()],
  redirects: {
    '/terms-of-service': '/terms',
  },
  image: {
    // Gives images in blog posts a srcset; their styling comes from .article in global.css
    layout: 'constrained',
    responsiveStyles: false,
  },
  markdown: {
    smartypants: false,
    rehypePlugins: [[rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypeArticle],
  },
});
