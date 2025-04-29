<template>
    <div>
      <BaseHeader :user="user" @userChanged="$emit('userChanged', $event)"/> 
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
    props: {
      user: {
        type: Object,
        default: null,
      },
    },
    components: {
      BaseHeader,
      BaseFooter,
    },
  };
  </script>
  
  