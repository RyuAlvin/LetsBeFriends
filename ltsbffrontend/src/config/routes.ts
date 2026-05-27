import Index from '../pages/Index.vue';
import Team from '../pages/Team.vue';
import Search from '../pages/Search.vue';

const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/search', component: Search },
];

export default routes;