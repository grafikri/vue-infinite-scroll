// .vuepress/config.js
module.exports = {
  title: 'Vue Infitite Scroll',
  description: '',
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/grafikri/vue-infinite-scroll' }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        sidebarDepth: 5,
        children: [
          {
            title: 'Getting started',
            path: '/guide/getting_started'
          }
        ]
      },
    ]
  }
}