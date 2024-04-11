import { onMounted } from 'vue'
import { defineClientConfig } from 'vuepress/client'
import NotFound from './theme/layouts/NotFound.vue'
import Layout from './theme/layouts/Layout.vue'
import News from './theme/layouts/News.vue'
import 'vuepress-theme-hope/presets/bounce-icon.scss'
export default defineClientConfig({
  // 你可以在这里覆盖或新增布局
  layouts: {
    Layout,
    NotFound,
    News
  }
})
