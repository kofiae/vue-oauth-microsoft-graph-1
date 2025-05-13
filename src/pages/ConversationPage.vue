<template>
    <div>
        <ul class="mail-list">
            <li v-for="mail in mails" :key="mail.id" class="mail-item">
                <div class="mail-header">
                    <RouterLink :to="{ name: 'ConversationShowPage', params: { id: mail.id } }" class="mail-subject">
                        {{ mail.subject }}
                    </RouterLink>
                    <span class="mail-date">{{ formatDate(mail.receivedDateTime) }}</span>
                </div>
                <div class="mail-from">
                    From : <b>{{ mail.from?.emailAddress?.name }}</b>
                    &lt;{{ mail.from?.emailAddress?.address }}&gt;
                </div>
                <div class="mail-preview">
                    {{ mail.bodyPreview }}
                </div>
            </li>
        </ul>
        <div v-if="error" class="error">{{ error }}</div>
    </div>
</template>

<script>
import { getUserMails } from '@/lib/microsoFGraph';

export default {
    name: 'ConversationPage',
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    data() {
        return {
            mails: [],
            error: null
        }
    },
    async mounted() {
        try {
            const data = await getUserMails();
            console.log('Mails:', data.value);
            this.mails = data.value;
            for (let i = 0; i < this.mails.length; i++) {
                console.log('Mail:', this.mails[i].id);
            }
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
.mail-list {
    list-style: none;
    padding: 0;
}
.mail-item {
    border-bottom: 1px solid #ddd;
    padding: 12px 0;
}
.mail-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
}
.mail-subject {
    color: #c756a2;
}
.mail-date {
    color: #888;
    font-size: 0.9em;
}
.mail-from {
    margin: 4px 0;
    font-size: 0.95em;
}
.mail-preview {
    color: #444;
    margin-bottom: 6px;
}
.error {
    color: red;
    margin-top: 10px;
}
</style>