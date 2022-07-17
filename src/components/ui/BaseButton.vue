<template>
        <button v-if="!link" :class="mode">
            <slot></slot>
        </button>
        <router-link v-else :to="to" :class="mode">
            <slot></slot>
        </router-link>
</template>

<script>

export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.40rem 1.2rem;
  font: inherit;
  background-color: #042940;
  border: 1px solid #042940;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  /* margin-right: 0.5rem; */
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #042940;
  border-color: #042940;
}
.flat {
  background-color: transparent;
  color: #005C53;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #042940;
  color: #042940;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #042940;
  color: #fff;
}
</style>