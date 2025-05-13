<template>
    <div class="header">
        <div class="header-left">
            <font-awesome-icon icon="fa-solid fa-house" class="home-icon" />
            <RouterLink to="/" class="header-title">Home</RouterLink>
            <RouterLink v-if="user" to="/conversations" class="header-title">
                <font-awesome-icon icon="fa-solid fa-comments" />
                <span>Conversations</span>
            </RouterLink>
        </div>
        <div class="header-right">
            <font-awesome-icon icon="fa-solid fa-user" class="user-icon" />
            <SignInButton/>
        </div>
    </div>
</template>
 
<script>
import SignInButton from './SigninButton.vue';

export default {
    name: 'BaseHeader',
    components: {
        SignInButton
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
}
</script>
 
<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
 
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        height: 60px;
        width:100%;
        position: fixed;
        top: 0;
        left: 0;
    }
 
    .header-left, .header-right {
        display: flex;
        align-items: center;
    }
 
    .header-title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-right: 20px;
        color: white;
        text-decoration: none;
    }
    .login-status {
        font-size: 1rem;
        margin-left: 10px;
    }

    .home-icon {
        margin-right: 10px;
    }
</style>
 