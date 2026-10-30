// https://astro.build/config
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Post images fill the 2xl article column; the first one is above the fold
function rehypeArticleImages() {
  return (tree) => {
    let first = true;
    const walk = (node) => {
      if (node.tagName === 'img') {
        node.properties.sizes = '(min-width: 672px) 640px, calc(100vw - 2rem)';
        if (first) node.properties.loading = 'eager';
        first = false;
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://footballcareer.app',
  integrations: [mdx()],
  image: {
    // Gives images in blog posts a srcset; their styling comes from Prose.astro
    layout: 'constrained',
    responsiveStyles: false,
  },
  markdown: {
    smartypants: false,
    rehypePlugins: [[rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypeArticleImages],
  },
});
