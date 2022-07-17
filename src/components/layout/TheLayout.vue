<template>
  <div id="components-layout-demo-fixed-sider">
    <a-layout has-sider>
      <a-layout-sider v-model:collapsed="collapsed" id="a-layout-sider-style" @mouseover="setCollapsed(false)"
        @mouseleave="setCollapsed(true)"
        :style="{ height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, borderRadius: '0.2857rem', zIndex: '99' }">
        <div class="logo">
          <p>LOGO</p>
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <router-link to="/">
              <home-outlined />
              <span class="nav-text">Home</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/about">
              <user-outlined />
              <span class="nav-text">About Me</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/experience">
              <upload-outlined />
              <span class="nav-text">Experience</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <router-link to="/skills">
              <bar-chart-outlined />
              <span class="nav-text">Skills</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="5">
            <router-link to="/certificates">
              <cloud-outlined />
              <span class="nav-text">Certificates</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="6">
            <router-link to="/projects">
              <appstore-outlined />
              <span class="nav-text">Projects</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <slot name="header"></slot>
        <a-layout-content id="a-layout-content-style">
          <div id="a-content-style">
            <slot></slot>
          </div>
        </a-layout-content>
        <a-layout-footer id="a-footer-style">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>


<script>
import { UserOutlined, HomeOutlined, UploadOutlined, BarChartOutlined, CloudOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
export default {
  components: {
    UserOutlined,
    HomeOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
  },

  setup() {
    let collapsed = ref(true);
    const setCollapsed = (value) => collapsed.value = value;

    return {
      collapsed,
      selectedKeys: ref(['1']),
      setCollapsed
    };
  },

};
</script>
<style>
/* logo */
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

/* sider and nav buttons */
.ant-layout-sider, .ant-menu {
  background: #BDE038 !important;
}

#a-layout-sider-style {
  box-shadow: 0 1px 20px 0 rgb(0 0 0 / 50%);
}

/* layout */
.ant-layout {
  background: none !important;
}

/* content */
#a-layout-content-style {
  margin-right: 35px;
  height: 100%;
}

/* nav selected */
.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #042940 !important;
}


/* nav color */
.ant-menu-dark .ant-menu-item>span>a,
.ant-menu-dark .ant-menu-item {
  color: #042940 !important;
}

#a-footer-style {
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>