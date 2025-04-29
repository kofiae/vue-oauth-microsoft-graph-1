<template lang="">
    <div>
        <h1 v-if="!user">Welcome to the Homepage</h1>
        <h1 v-else>Welcome, {{ user.account.name }}</h1>
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
    props: {
        user: {
            type: Object,
            default: null,
        },
    },
    components: {
        BaseButton,
        AsyncButton,
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
        margin: 12px;
        padding: 40px;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
</style>