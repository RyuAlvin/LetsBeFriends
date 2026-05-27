import { createApp } from 'vue';
import App from './App.vue';

// 引入路由
import routes from './config/routes';
import { createRouter, createWebHistory } from 'vue-router';

// 1. 引入你需要的组件
import { Button } from 'vant';
import { NavBar } from 'vant';
import { Icon } from 'vant';
import { Tabbar} from "vant";
import { TabbarItem} from "vant";
import { Search } from "vant";
import { Divider } from "vant";
import { TreeSelect } from "vant";
import { Col } from "vant";
import { Row } from "vant";
import { Tag } from "vant";

const app = createApp(App);

// 2、注册你需要的组件
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Search);
app.use(Divider);
app.use(TreeSelect);
app.use(Col);
app.use(Row);
app.use(Tag);

// 注册路由
const router = createRouter({
    history: createWebHistory(),
    routes,
});
app.use(router);

app.mount('#app');
