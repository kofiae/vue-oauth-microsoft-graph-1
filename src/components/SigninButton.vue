<template>
    <div>
        <AsyncButton @click="signIn" v-if="!user">
            Sign In     
        </AsyncButton>
        
        <div v-if="user" class="user-info dropdown" @click="toggleDropdown">
            <p class="user-name">{{ user.account.name }}</p>
            <div v-if="dropdownOpen" class="dropdown-menu">
                <button @click.stop="signOut" class="dropdown-item">Sign Out</button>
            </div>
        </div>
    </div>
</template>

<script>
import { signInAndGetUser, logout } from '../lib/microsoFGraph.js';
import AsyncButton from './AsyncButton.vue';

export default {
    name: 'SignInButton',
    components: {
        AsyncButton
    },
    data() {
        return {
            dropdownOpen: false
        };
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
                localStorage.setItem('user', JSON.stringify(user));
            } catch (error) {
                console.error('Sign-in failed:', error);
            }
        },
        signOut() {
            try {
                logout();
                this.$store.commit('setUser', null);
                localStorage.removeItem('user');
                this.$router.push('/');
            } catch (error) {
                console.error('Sign-out failed:', error);
            }
        },
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        }
    }
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
    position: relative;
    padding: 10px 10px;
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 120px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    z-index: 10;
}

.dropdown-item {
    padding: 8px 16px;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    font-size: 14px;
}

.dropdown-item:hover {
    background: #f5f5f5;
}
</style>