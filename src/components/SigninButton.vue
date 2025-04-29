<template>
    <div>
        <button @click="signIn">Sign In</button>
        <div v-if="user">
            <p>Welcome, {{ user.name }}</p>
            <p>Email: {{ user.username }}</p>
        </div>
    </div>
</template>

<script>
import { signInAndGetUser } from '../lib/microsoFGraph.js';

export default {
    name: 'SignInButton',
    data() {
        return {
            user: null,
        };
    },
    methods: {
        async signIn() {
            try {
                const user = await signInAndGetUser();
                this.user = user;
            } catch (error) {
                console.error('Sign-in failed:', error);
            }
        },
    },
    watch: {
        user(newValue) {
            console.log('User data updated:', newValue);
        },
    },
};
</script>

<style scoped>
button {
    padding: 10px 20px;
    margin-left: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #45a049;
}
</style>