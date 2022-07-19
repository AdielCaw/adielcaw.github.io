<template>
  <the-layout>
    <template #header>
      <the-header></the-header>
    </template>
    <transition name="content">
      <router-view></router-view>
    </transition>
  </the-layout>
</template>

<script>
import TheLayout from './components/layout/TheLayout.vue';
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheLayout,
    TheHeader
}  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap');

body {
  font-family: 'Inter', serif !important;
  font-weight: 500;
  background: #D6D58E !important;
  color: #042940 !important;
}

#title {
    font-size: 90px;
    font-weight: 800;
}

#container-style {
    text-align: justify;
    margin-left: 120px;
    margin-right: 35px;
    margin-bottom: 10%;
}

#divider {
    border-top: 2px solid #042940;
    margin-bottom: 30px
}

/* .content-enter-from,
.content-leave-to {
  opacity: 0;
}

.content-enter-active {
  transition: opacity 0.3s ease-out;
}

.content-leave-active {
  transition: opacity 0.3s ease-in;
}

.content-enter-to,
.content-leave-from {
  opacity: 1;
} */

.content-enter-active {
  animation: opacity 0.5s ease-out;
}

/* .content-leave-active {
  animation: slide-scale 0.4s ease-in;
} */

@keyframes opacity {
  0% {
    opacity: 0;
  }

  /* 70% {
    transform: translateY(-245px);
  } */

  100% {
    opacity: 1;
  }
}
</style> 