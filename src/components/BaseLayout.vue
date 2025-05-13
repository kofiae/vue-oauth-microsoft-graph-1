<template>
    <div>
      <BaseHeader /> 
      <main>
        <slot></slot> 
      </main>
      <BaseFooter /> 
    </div>
  </template>
  
  <script>
  import BaseHeader from './BaseHeader.vue';
  import BaseFooter from './BaseFooter.vue';
  
  export default {
    name: 'BaseLayout',
    components: {
      BaseHeader,
      BaseFooter,
    },
  };
  </script>
  
  