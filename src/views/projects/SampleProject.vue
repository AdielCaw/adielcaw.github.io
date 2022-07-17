<template>
    <div id="sample-project-container">
        <section>
            <!-- <base-button link to="/projects"><span id="icon-style"><LeftOutlined/></span>Go back to Projects</base-button> -->
            <sample-project-header></sample-project-header>
        </section>
        <section id="product-container">
            <router-view></router-view>
        </section>
    </div>

</template>

<script>
import SampleProjectHeader from '../../components/layout/SampleProjectHeader.vue';

export default {
    components: {
        SampleProjectHeader
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