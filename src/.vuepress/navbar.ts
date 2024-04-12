import { navbar } from 'vuepress-theme-hope'

export default navbar([
  '/',
  { text: 'leetcode每日一题', icon: 'discover', link: '/leetcode/' },
  {
    text: '服务器',
    icon: 'server',
    prefix: 'server/',
    children: [
      { text: 'golang', icon: 'golang', link: 'golang/' },
      { text: 'docker', icon: 'docker', link: 'docker/' }
    ]
  }
  // {
  //   text: '软件教程',
  //   icon: 'software',
  //   link: '/tutorial/'
  // },
  // {
  //   text: '收藏',
  //   icon: 'hk-shoucang1',
  //   link: '/collect'
  // },
  // {
  //   text: '说说',
  //   icon: 'news',
  //   link: '/news/'
  // },
  // {
  //   text: '留言板',
  //   icon: 'mark',
  //   link: '/visitorsbook'
  // },
  // {
  //   text: '友链',
  //   icon: 'link',
  //   link: '/friend'
  // },
  // {
  //   text: '关于',
  //   icon: 'info',
  //   children: [
  //     { text: '关于我', icon: 'people', link: '/intro' },
  //     { text: '关于本站', icon: 'info', link: '/about' }
  //   ]
  // }
])
