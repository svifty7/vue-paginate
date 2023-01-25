import { defineConfig } from 'vitepress';
import { ConfigEnv } from 'vite';

export default ({ mode }: ConfigEnv) => defineConfig({
  lang: 'en-US',
  title: 'Vue Paginate',
  description: 'Vue Paginate library.',
  base: mode !== 'development'
    ? '/vue-paginate/'
    : '/',
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/svifty7/vue-paginate' }
    ],
    lastUpdatedText: 'Last updated: ',
    footer: {
      message: 'Released under the MIT License.'
    }
  }
});
