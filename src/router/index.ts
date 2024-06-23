import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { routes } from '../utils/routes.js'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: routes.HOME,
            name: 'home',
            component: HomeView
        },
        {
            path: routes.DETAIL,
            name: 'detail',
            component: () => import('../views/DetailView.vue')
        },
        {
            path: routes.HISTORY,
            name: 'history',
            component: () => import('../views/HistoryView.vue')
        },
        /*{
            path: '/:pathMatch(.*)*',
            name: 'error404',
            component: NotFoundView
        },*/
        // Redirect to home if the page can't be found
        {
            path: '/:pathMatch(.*)*',
            name: routes.NOTFOUND,
            beforeEnter:(to, from, next) => {
                next({ name: 'home' });
            }
        }
    ]
})

export default router 


