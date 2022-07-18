<template>
    <div id="container-style">
        <div id="title">CERTIFICATES</div>
        <div id="divider"></div>
        <div id="cert-container">
            <a-card hoverable>
                <a-card-meta title="Vue - The Complete Guide (incl. Router & Composition API)">
                    <template #description>https://www.udemy.com/certificate/UC-6815dfe8-8969-4a12-99bb-c19bfaae3c8b/</template>
                </a-card-meta>
                <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-6815dfe8-8969-4a12-99bb-c19bfaae3c8b.jpg?v=1656478248000" />
            </a-card>
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        const selectedNav = (key) => {
            store.dispatch('nav/setActiveNav', {key: key});
        }
        onMounted(() => selectedNav(['5']));
    }
}
</script>

<style scoped>
img {
    max-width: 100%;
    max-height: 100%;
}

#title {
    margin: 0;
}

#cert-container {
    width: 100%
}
</style>