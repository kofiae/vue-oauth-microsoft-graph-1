<template>
    <div class="conversation-container">
        <div v-if="error" class="error">
            {{ error }}
        </div>
        <div v-else-if="!conversation">
            Loading...
        </div>
        <div v-else class="mail-card">
            <h2 class="subject">{{ conversation.subject }}</h2>
            <div class="meta">
                <span><strong>From: </strong> {{ conversation.from?.emailAddress?.name }} &lt;{{ conversation.from?.emailAddress?.address }}&gt;</span>
                <span><strong>To: </strong>
                    <span v-for="(recipient, idx) in conversation.toRecipients" :key="idx">
                        {{ recipient.emailAddress.name }} &lt;{{ recipient.emailAddress.address }}&gt;<span v-if="idx < conversation.toRecipients.length - 1">, </span>
                    </span>
                </span>
                <span><strong>Date: </strong> {{ formatDate(conversation.sentDateTime) }}</span>
            </div>
            <div class="body" v-html="conversation.body?.content"></div>
        </div>
    </div>
</template>

<script>
import { getUserMailById } from '@/lib/microsoFGraph';

export default {
    name: 'ConversationShowPage',
    data() {
        return {
            conversation: null,
            error: null
        }
    },
    async mounted() {
        try {
            const conversationId = this.$route.params.id;

            const response = await getUserMailById(conversationId);
            this.conversation = response
        } catch (e) {
            this.error = e.message;
        }
    },
    methods: {
        formatDate(dateStr) {
            if (!dateStr) return '';
            const date = new Date(dateStr);
            return date.toLocaleString();
        }
    }
}
</script>

<style scoped>
.conversation-container {
    max-width: 700px;
    margin: 2rem auto;
    padding: 2rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
    font-family: 'Segoe UI', Arial, sans-serif;
}
.mail-card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.subject {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #2d3a4b;
}
.meta {
    font-size: 0.95rem;
    color: #555;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}
.body {
    padding: 1rem;
    background: #f8fafd;
    border-radius: 8px;
    color: #222;
    min-height: 100px;
    word-break: break-word;
}
.error {
    color: #b00020;
    background: #ffeaea;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
}
</style>