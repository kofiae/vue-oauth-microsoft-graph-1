<template>
  <div>
    <BaseLayout :user="user" @userChanged="handleUserChanged">
    <HomePage :user="user"/>
    </BaseLayout>
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue';
import BaseLayout from './components/BaseLayout.vue';

export default {
  name: 'App',
  data() {
    return {
      user: null,
    };
  },
  components: {
    HomePage,
    BaseLayout
  },
  methods: {
        handleUserChanged(user) {
            this.user = user;
        },
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
