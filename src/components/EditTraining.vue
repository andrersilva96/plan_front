<template>
    <div>
        <h1>Editar Treinamento</h1>
        <form @submit.prevent="updateTraining">
            <div>
                <label for="title">Title:</label>
                <input class="form-control" type="text" v-model="training.title" required />
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea class="form-control" v-model="training.description" required></textarea>
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-warning mt-3" type="submit">Atualiza</button>
            </div>
        </form>
    </div>
</template>

<script>
import api from "../services/api";

export default {
    data() {
        return {
            training: {
                title: "",
                description: "",
            },
        };
    },
    created() {
        this.fetchTraining();
    },
    methods: {
        fetchTraining() {
            const id = this.$route.params.id;
            api.getTraining(id).then((response) => {
                this.training = response.data.data;
            });
        },
        updateTraining() {
            const id = this.$route.params.id;
            api.updateTraining(id, this.training).then(() => {
                this.$router.push({ name: "TrainingList" });
            });
        },
    },
};
</script>
