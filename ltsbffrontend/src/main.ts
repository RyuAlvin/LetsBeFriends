import { createApp } from 'vue'
import App from './App.vue'
// 1. 引入你需要的组件
import { Button } from 'vant';

const app = createApp(App)

// 2、注册你需要的组件
app.use(Button)

app.mount('#app')
