import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需引入组件样式：配置插件
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      // 按需引入组件样式：配置插件
      Components({
        resolvers: [ VantResolver() ],
      }),
  ]
})
