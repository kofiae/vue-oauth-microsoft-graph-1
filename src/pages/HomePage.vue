<template lang="">
    <div>
        <h1 v-if="!user">Welcome to the Homepage</h1>
        <h1 v-else>Welcome, {{ user?.account?.name || 'Guest' }}</h1>
        <p>This is the homepage of our application.</p>
        <AsyncButton @click="asyncOperation">
            Async Button
        </AsyncButton>
        <BaseButton>
            Base button with custom margin
        </BaseButton>
        <BaseButton disabled>
            Base Button disabled
        </BaseButton>
        <BaseButton color="warn">
            Base button with color props
        </BaseButton>
        <BaseButton color="danger">
            Base button with color props
        </BaseButton>
    </div>
</template>
<script>
import BaseButton from '../components/BaseButton.vue';
import AsyncButton from '../components/AsyncButton.vue';

export default {
    name: 'HomePage',
    components: {
        BaseButton,
        AsyncButton,
    },
        computed: {
        user() {
            return this.$store.state.user;
        }
    },
    data() {
        return {
            clickCount: 0,
            isProcessing: false 
        };
    },
    methods: {
    asyncOperation() {
      return new Promise((resolve) => {
        this.isProcessing = true;
        setTimeout(() => {
          resolve();
        }, 2000 + this.clickCount * 1000);
        this.clickCount++;
      });
    },
  },
}
</script>
<style scoped>
    * {
        display:flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
    }
</style>