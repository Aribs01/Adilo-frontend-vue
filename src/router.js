import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'Recorder',
                component: () => import('./components/SnapRecorder.vue')
            },
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('./components/AppDashboard.vue')
            },
            {
                path: 'projects',
                name: 'Projects',
                component: () => import('./components/Projects.vue')
            },
            {
                path: 'requested',
                name: 'Requested',
                component: () => import('./components/Requested.vue')
            },
        ]
    },
    {
        path: '/recordings',
        name: 'Recordings',
        component: () => import('./components/Recordings.vue')
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
