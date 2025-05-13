<template>
  <div>
    <BaseLayout >
      <div class="container">
        <router-view />
      </div>
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue';

export default {
  name: 'App',
  components: {
    BaseLayout
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

.container {
    margin: 12px;
    padding: 40px;
    display:flex;
    flex-direction: column;
    align-items: center;
}
</style>
