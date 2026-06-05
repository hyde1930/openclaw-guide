export default {
  base: '/openclaw-guide/',
  title: "红房子AMlab社区",
  description: "AMlab 社团 - 养龙虾指南与社团活动",
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '养龙虾教程', link: '/guide/getting-started' },
      { text: '资源分享', link: '/resources/tools' },
      { 
        text: '社团活动',
        items: [
          { text: '近期活动', link: '/activities/recent' },
          { text: '活动回顾', link: '/activities/history' },
          { text: '活动报名', link: '/activities/signup' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '养龙虾教程',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '进阶配置', link: '/guide/advanced' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资源分享',
          items: [
            { text: '实用工具', link: '/resources/tools' }
          ]
        }
      ],
      '/activities/': [
        {
          text: '社团活动',
          items: [
            { text: '近期活动', link: '/activities/recent' },
            { text: '活动回顾', link: '/activities/history' },
            { text: '活动报名', link: '/activities/signup' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 红房子AMlab社区'
    },

    search: {
      provider: 'local'
    }
  }
}
