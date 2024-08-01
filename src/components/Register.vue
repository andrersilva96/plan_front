<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="register">
            <div>
                <label for="name">Name:</label>
                <input type="text" v-model="user.name" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="user.email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="user.password" required />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
            },
        };
    },
    methods: {
        ...mapActions(["register"]),
        async register() {
            try {
                await this.register(this.user);
                this.$router.push({ name: "TrainingList" });
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
