import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/detail',
            name: 'detail',
            component: () => import('../views/DetailView.vue')
        },
        {
            path: '/history',
            name: 'history',
            component: () => import('../views/HistoryView.vue')
        },
        /*{
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        },*/
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            beforeEnter:(to, from, next) => {
                // Redirect to home
                next({ name: 'home' });
            }
        }
    ],

})

export default router 


