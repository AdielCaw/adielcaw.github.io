<template>
        <a-row id="container-style" type="flex">
            <a-col flex="3">
                <div id="content-style">
                    <div id="title">HELLO</div>
                    <p>I am Adiel Caw, aspiring for the role of VueJS developer. I created this porfolio for the sole
                        purpose of showcasing my skills on VueJS, HTML, CSS and Javascript.
                        In this website there will be a Project page which there I will demonstrate my knowledge on
                        VueJS in a form of a Sample Project that I prepared.
                        I also included a short introductory of myself in this website with the work experiences I have
                        attained throughout my career.
                    </p>
                    <br>
                    <p> To know more about me, Kindly click the button "Go to About Me" to redirect you to the ABOUT ME
                        page or simply use the navigation slider on your left.</p>
                    <base-button class="outline" link to="/about">Go to About Me</base-button>
                </div>
            </a-col>
            <a-col flex="1">
                <base-image-card></base-image-card>
            </a-col>
        </a-row>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        const selectedNav = (key) => {
            store.dispatch('nav/setActiveNav', { key: key });
        }
        onMounted(() => selectedNav(['1']));
    }
}
</script>

<style scoped>
#content-style {
    padding: 0 50px;
}

#container-style {
    margin-top: 5%;
}
</style>