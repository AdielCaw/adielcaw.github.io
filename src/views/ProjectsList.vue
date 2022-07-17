<template>
    <div id="container-style">
        <section>
            <div id="title">PROJECTS</div>
            <div id="divider"></div>
        </section>
        <ul>
            <li>
                <projects-item @click="viewProject"><project-filled /></projects-item>
            </li>
        </ul>
    </div>
</template>

<script>
import ProjectsItem  from '../components/projects/ProjectsItem.vue';
import { ProjectFilled } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
export default {
  components: {
    ProjectFilled,
    ProjectsItem
  },
  setup() {
    const router = useRouter();

    const viewProject = () => router.push('/projects/SampleProject');
    
    return {
        viewProject
    }
  }
};
</script>

<style scoped>

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
#title {
    margin: 0;
}

</style>