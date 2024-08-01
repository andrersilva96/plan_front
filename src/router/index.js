import { createRouter, createWebHistory } from 'vue-router';
import TrainingList from '../components/TrainingList.vue';
import CreateTraining from '../components/CreateTraining.vue';
import EditTraining from '../components/EditTraining.vue';

const routes = [
    { path: '/', name: 'TrainingList', component: TrainingList },
    { path: '/create', name: 'CreateTraining', component: CreateTraining },
    { path: '/edit/:id', name: 'EditTraining', component: EditTraining, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
