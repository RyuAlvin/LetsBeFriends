import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/Index.vue';
import Team from '../pages/Team.vue';

const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;