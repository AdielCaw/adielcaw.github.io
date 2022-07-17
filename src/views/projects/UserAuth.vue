<template>
  <div>
    <a-modal v-model:visible="visible" title="Error Message" @ok="handleOk">
      <p>{{ errorMessage }}</p>
    </a-modal>

    <a-card style="width: 500px; margin-left: 30%;">
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="authData.email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="authData.password" />
        </div>
        <p v-if="!formIsValid">Please enter a valid email and password (must be at least 6 characters long).</p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
      </form>
    </a-card>
  </div>
</template>

<script>
import { ref, computed, reactive } from 'vue';

import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const authData = reactive({
      email: '',
      password: ''
    });

    const visible = ref(false);

    const mode = ref('login');
    const formIsValid = ref(true);
    const errorMessage = ref(null);

    const submitButtonCaption = computed(() => {
      if (mode.value === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    });

    const switchModeButtonCaption = computed(() => {
      if (mode.value === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    });

    const submitForm = async () => {
      formIsValid.value = true;
      if (
        authData.email === '' ||
        !authData.email.includes('@') ||
        authData.password.length < 6
      ) {
        console.log(authData.email);
        console.log(authData.password);
        formIsValid.value = false;
        return;
      }

      const actionPayload = {
        email: authData.email,
        password: authData.password,
      };

      try {
        if (mode.value === 'login') {
          await store.dispatch('login', actionPayload);
        } else {

          await store.dispatch('signup', actionPayload);
        }

        router.replace('/projects/SampleProject');
      } catch (err) {
        errorMessage.value = err.message || 'Failed to authenticate, try later.';
      }
    }

    const switchAuthMode = () => {
      if (mode.value === 'login') {
        mode.value = 'signup';
      } else {
        mode.value = 'login';
      }
    }

    const showModal = () => visible.value = true;

    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };

    return {
      authData,
      mode,
      formIsValid,
      errorMessage,
      submitButtonCaption,
      switchModeButtonCaption,
      submitForm,
      switchAuthMode,
      showModal,
      handleOk
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>