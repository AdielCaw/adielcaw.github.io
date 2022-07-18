export default {
    setActiveNav(context, payload) {
      context.commit('setActiveNav', payload.key);
    }
}