import apiClient from '../../axios';

const state = {
    token: null,
    user: null,
};

const getters = {
    isAuthenticated: state => !!state.token,
    user: state => state.user,
};

const actions = {
    async login({ commit, dispatch }, credentials) {
        try {
            const response = await apiClient.post('/login', credentials);
            const token = response.data.token;
            commit('setToken', token);
        } catch (error) {
            console.error(error);
        }
    },
    async register({ commit, dispatch }, user) {
        try {
            const response = await apiClient.post('/register', user);
            const token = response.data.token;
            commit('setToken', token);
        } catch (error) {
            console.error(error);
        }
    },
    async logout({ commit }) {
        try {
            await apiClient.post('/logout');
            commit('clearAuth');
        } catch (error) {
            console.error(error);
        }
    }
};

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    clearAuth(state) {
        state.token = null;
        state.user = null;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
