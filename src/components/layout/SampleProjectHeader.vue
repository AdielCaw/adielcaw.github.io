<template>
  <header>
    <h1>
      <router-link to="/projects/SampleProject">Buy & Shop</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/projects/SampleProject">Products</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'cart' }">Cart</router-link>
          <base-badge mode="elegant">{{ qty }}</base-badge>
        </li>
        <li>
          <router-link :to="{ name: 'admin' }">Admin</router-link>
        </li>
      </ul>
    </nav>
    <div id="auth-actions">
      <base-button class="outline" link :to="{ name: 'auth' }" v-if="!isLoggedIn">Login</base-button>
      <div v-if="isLoggedIn">
        <span style="margin-right: 5px;">User</span>
        <a-avatar style="margin-right: 10px;">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
        <base-button class="flat" @click="logout">Logout</base-button>
      </div>
    </div>
  </header>
</template>

<script>
import { UserOutlined } from '@ant-design/icons-vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  components: { UserOutlined },
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => store.getters.isAuthenticated);
    const qty = computed(() => store.getters['cart/quantity']);
    const logout = () => store.dispatch('logout');
    
    return {
      isLoggedIn,
      qty,
      logout
    }
  }
}
</script>

<style scoped>
header {
  height: 5rem;
  background-color: white;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}
</style>