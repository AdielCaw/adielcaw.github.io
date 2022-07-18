<template>
    <div id="container-style">
        <div id="title">ABOUT ME</div>
        <div id="divider"></div>
        <p>
            I describe myself as someone who is hungry for knowledge and experience when it comes to programming. I enjoy work that challenges me
            to learn something new at the direction of my desired career path. I am adaptable to change, a team player and a fast learner.
        </p>
        <br>
        <p>
            I previously worked at PCCW for 3 and half months as an Assistant Systems Specialist which mainly focuses on Oracle EBS and PL/SQL programming language and before that,
            I worked with Super 8 Retail Systems as a Systems Programmer where I worked for about 4 years and used Oracle Database, C# programming and VueJS. I have used VueJS for 
            about a year in the company as part of an internal project we worked on. Upon leaving my previous company, I 
            have decided to further my career as a Frontend Developer and took up a Online Course to gain more knowledge on VueJS and also refresh my skills on it.
        </p>
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
        onMounted(() => selectedNav(['2']));
    }
}
</script>

<style scoped>
#title {
    margin: 0;
}
p {
    padding-right: 150px;
}
</style>