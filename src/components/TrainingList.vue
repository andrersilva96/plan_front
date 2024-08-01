<template>
    <div>
        <h1>Treinamentos</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Titulo</th>
                    <th>Descrição</th>
                    <th class="text-center">
                        Ações
                        <button class="btn btn-sm btn-primary" @click="createNewTraining">
                            + Treinamento
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="training in trainings" :key="training.id">
                    <td>{{ training.id }}</td>
                    <td class="ellipsis">{{ training.title }}</td>
                    <td class="ellipsis">{{ training.description }}</td>
                    <td class="text-center">
                        <button class="btn btn-sm btn-warning me-3" @click="editTraining(training)">
                            Editar
                        </button>
                        <button class="btn btn-sm btn-danger" @click="deleteTraining(training.id)">
                            Deletar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import api from "../services/api";

export default {
    data() {
        return {
            trainings: [],
        };
    },
    created() {
        this.fetchTrainings();
    },
    methods: {
        fetchTrainings() {
            api.getTrainings().then((response) => {
                this.trainings = response.data.data;
            });
        },
        createNewTraining() {
            this.$router.push({ name: "CreateTraining" });
        },
        editTraining(training) {
            this.$router.push({
                name: "EditTraining",
                params: { id: training.id },
            });
        },
        deleteTraining(id) {
            api.deleteTraining(id).then(() => {
                this.fetchTrainings();
            });
        },
    },
};
</script>
