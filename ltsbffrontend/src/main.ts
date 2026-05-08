import { createApp } from 'vue';
import App from './App.vue';
// 1. 引入你需要的组件
import { Button } from 'vant';
import { NavBar } from 'vant';
import { Icon } from 'vant';
import { Tabbar} from "vant";
import { TabbarItem} from "vant";

const app = createApp(App);

// 2、注册你需要的组件
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);

app.mount('#app');
