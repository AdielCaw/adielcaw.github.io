<template>
    <header id="header-style">
            <div id="header-text"></div>
            <!-- <div id="header-icons"><setting-filled /></div> -->
    </header>
</template>

<!-- <script>
import { SettingFilled } from '@ant-design/icons-vue';

export default {
  components: { SettingFilled },
}
</script> -->

<style scoped>
/* header */
#header-style {
  background: #fff;
  height: 5rem; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  width: 100%;
  padding-left: 120px;
  padding-right: 35px;
}
#header-text {
    display: inline-block;
}
#header-icons {
    display: inline-block;
    margin-left: 85vh;
    font-size: 20px;
}
</style>