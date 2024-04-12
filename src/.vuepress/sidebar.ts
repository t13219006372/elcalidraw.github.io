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
})
