import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTcyMjUzMjAzOSwiZXhwIjoxNzIyNTM1NjM5LCJuYmYiOjE3MjI1MzIwMzksImp0aSI6Ik5XeDdKVXJZNWhsT2l2bDkiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.KYaoe7rySsn8xSHA8LNivFrnIt0nL-B5dgsUmtn521M'
    }
});

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
