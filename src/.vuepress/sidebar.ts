import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/': [
    '',
    {
      text: 'leetcode每日一题',
      icon: 'creative',
      prefix: 'leetcode/',
      link: 'leetcode/',
      children: 'structure'
    },
    {
      text: '服务器',
      prefix: 'server/',
      icon: 'server',
      link: 'server/',
      children: [{ text: 'docker', prefix: 'docker/', icon: 'docker', link: 'docker/' }]
    },
    {
      text: '前端',
      prefix: 'frontend/',
      icon: 'frontend',
      link: 'frontend/',
      children: [
        { text: 'Vue', prefix: 'vue/', icon: 'vue', link: 'vue/' },
        { text: '杂文', prefix: 'others/', icon: 'article', link: 'others/' }
      ]
    }
    // {
    //   text: '软件/工具教程',
    //   icon: 'software',
    //   prefix: 'tutorial/',
    //   link: 'tutorial/'
    // },
    // {
    //   text: '随笔',
    //   icon: 'flower',
    //   prefix: 'private/',
    //   children: 'structure'
    // }
  ],
  '/server/docker/': 'structure',
  '/frontend/vue/': 'structure',
  '/frontend/others/': 'structure'
})
