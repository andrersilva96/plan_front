<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="email">Email:</label>
                <input class="form-control" type="email" v-model="credentials.email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input class="form-control" type="password" v-model="credentials.password" required />
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary mt-3" type="submit">Entrar</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            credentials: {
                email: 'andre.rsilva96@gmail.com',
                password: '123456789'
            }
        };
    },
    methods: {
        ...mapActions('auth', ['login']),
        async handleLogin() { // Changed function name to avoid conflict with Vuex action
            try {
                await this.login(this.credentials);
                this.$router.push({ name: 'TrainingList' });
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
