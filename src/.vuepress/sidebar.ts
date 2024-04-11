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
    }
    // {
    //   text: '代码笔记',
    //   icon: 'note',
    //   prefix: 'posts/',
    //   // collapsible: true,
    //   children: [
    //     {
    //       text: 'Rust',
    //       icon: 'hk-rust',
    //       prefix: 'Rust/',
    //       link: 'Rust/'
    //     }
    //   ]
    // },
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
  ]
  // '/posts/Linux/': 'structure',
})
