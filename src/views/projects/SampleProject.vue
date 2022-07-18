<template>
    <div id="sample-project-container">
        <section>
            <sample-project-header></sample-project-header>
        </section>
        <section id="product-container">
            <router-view></router-view>
        </section>
    </div>

</template>

<script>
import SampleProjectHeader from '../../components/layout/SampleProjectHeader.vue';
import { onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

export default {
    components: {
        SampleProjectHeader
    },
    setup() {
        const store = useStore();
        const router = useRouter();

        const didAutoLogout = computed(() => store.getters.didAutoLogout);

        onMounted(() => store.dispatch('auth/tryLogin'));

        watch(didAutoLogout, (curValue, oldValue) => {
            if (curValue && curValue !== oldValue) {
                router.replace('/projects/SampleProject');
            }
        })
    },
}
</script>

<style scoped>
#sample-project-container {
    margin-left: 120px;
    margin-right: 35px;
    margin-top: 2%;
    margin-bottom: 8%;
    color: #10454F;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    /* margin-bottom: 10%; */
    background-color: #fff;
    border-radius: 8px;
}

#icon-style {
    font-size: 16px;
    margin-right: 5px;
}

#product-container {
    padding-bottom: 3%;
}
</style>