<template>
    <div>
        <AsyncButton @click="signIn" class="button" v-if="!user">
            Sign In     
        </AsyncButton>
        
        <div v-if="user" class="user-info">
            <p>{{ user.account.name }}</p>
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
.button {
    padding: 10px 10px;
    font-size: 14px;
    margin-left: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.button:hover {
    background-color: #45a049;
}

.user-info {
    padding: 10px 10px;
    margin-left: 10px;
    font-size: 14px;
}
</style>