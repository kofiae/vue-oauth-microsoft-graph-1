<template>
    <div class="header">
        <div class="header-left">
            <font-awesome-icon icon="fa-solid fa-house" class="home-icon" />
            <span class="header-title">Home</span>
        </div>
        <div class="header-right">
            <font-awesome-icon icon="fa-solid fa-user" class="user-icon" />
            <SignInButton :user="user" @userChanged="$emit('userChanged', $event)"/>
        </div>
    </div>
</template>
 
<script>
import SignInButton from './SigninButton.vue';

export default {
    name: 'BaseHeader',
    props: {
        user: {
            type: Object,
            default: null,
        },
    },
    components: {
        SignInButton
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
    }
    .login-status {
        font-size: 1rem;
        margin-left: 10px;
    }
</style>
 