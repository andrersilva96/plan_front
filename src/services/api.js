import apiClient from '../axios';

export default {
    getTrainings() {
        return apiClient.get('/trainings');
    },
    getTraining(id) {
        return apiClient.get(`/trainings/${id}`);
    },
    getUserTrainings() {
        return apiClient.get('/user-trainings');
    },
    createTraining(training) {
        return apiClient.post('/trainings', training);
    },
    updateTraining(id, training) {
        return apiClient.put(`/trainings/${id}`, training);
    },
    deleteTraining(id) {
        return apiClient.delete(`/trainings/${id}`);
    }
};
