import apiClient from '../axios';

export default {
    login(credentials) {
        return apiClient.post('/login', credentials);
    },
    register(user) {
        return apiClient.post('/register', user);
    },
    logout() {
        return apiClient.post('/logout');
    }
};
