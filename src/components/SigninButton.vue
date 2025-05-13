<template>
    <div>
        <AsyncButton @click="signIn" v-if="!user">
            Sign In     
        </AsyncButton>
        
        <div v-if="user" class="user-info">
            <p>{{ user.account.name }}</p>
        </div>
    </div>
</template>

<script>
import { signInAndGetUser } from '../lib/microsoFGraph.js';
import AsyncButton from './AsyncButton.vue';

export default {
    name: 'SignInButton',
    components: {
        AsyncButton
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        async signIn() {
            try {
                const user = await signInAndGetUser();
                this.$store.commit('setUser', user);
            } catch (error) {
                console.error('Sign-in failed:', error);
            }
        },
    },
};
</script>

<style scoped>
.base-button {
    padding: 10px 10px;
    font-size: 14px;
    margin-left: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}
.base-button:hover {
    background-color: #45a049;
}

.user-info {
    padding: 10px 10px;
    margin-left: 10px;
    font-size: 14px;
}
</style>