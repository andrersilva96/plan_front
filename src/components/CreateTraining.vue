<template>
    <div>
        <h1>Criar Treinamento</h1>
        <form @submit.prevent="createTraining">
            <div>
                <label for="title">Título:</label>
                <input class="form-control" type="text" v-model="training.title" required />
            </div>
            <div>
                <label for="description">Descrição:</label>
                <textarea class="form-control" v-model="training.description" required></textarea>
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary mt-3" type="submit">Criar</button>
            </div>
        </form>
    </div>
</template>

<script>
import api from '../services/api';

export default {
    data() {
        return {
            training: {
                title: '',
                description: ''
            }
        };
    },
    methods: {
        createTraining() {
            api.createTraining(this.training).then(() => {
                this.$router.push({ name: 'TrainingList' });
            });
        }
    }
};
</script>
