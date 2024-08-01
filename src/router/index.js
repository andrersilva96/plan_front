import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import TrainingList from '../components/TrainingList.vue';
import CreateTraining from '../components/CreateTraining.vue';
import EditTraining from '../components/EditTraining.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

const routes = [
    { path: '/', name: 'TrainingList', component: TrainingList, meta: { requiresAuth: true }  },
    { path: '/create', name: 'CreateTraining', component: CreateTraining, meta: { requiresAuth: true }  },
    { path: '/edit/:id', name: 'EditTraining', component: EditTraining, props: true, meta: { requiresAuth: true }  },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters['auth/isAuthenticated']) {
            next({ name: 'Login' });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
