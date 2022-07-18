<template>
    <div id="container-style">
        <div id="title">SKILLS</div>
        <div id="divider"></div>
        <div id="skills-list">
            <div>HTML</div><a-progress :percent="90" status="active" strokeColor="#005C53"/>
            <div>VUE.JS</div><a-progress :percent="70" status="active" strokeColor="#005C53"/>
            <div>JAVASCRIPT</div><a-progress :percent="60" status="active" strokeColor="#005C53"/>
            <div>NODE.JS</div><a-progress :percent="60" status="active" strokeColor="#005C53"/>
            <div>FIREBASE</div><a-progress :percent="30" status="active" strokeColor="#005C53"/>
            <div>ORACLE DATABASE</div><a-progress :percent="80" status="active" strokeColor="#005C53"/>
            <div>PL/SQL</div><a-progress :percent="80" status="active" strokeColor="#005C53"/>
            <div>ORACLE FORMS</div><a-progress :percent="80" status="active" strokeColor="#005C53"/>
            <div>ORACLE REPORTS</div><a-progress :percent="70" status="active" strokeColor="#005C53"/>
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
        onMounted(() => selectedNav(['4']));
    }
}
</script>


<style scoped>

#title {
    margin: 0;
}

#skills-list {
    margin-left: 25%;
    width: 50%
}
</style>