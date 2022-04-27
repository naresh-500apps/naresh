<template>
  <div>
    <h1>parent props</h1>
    <props :name="name" ref="venkata" :message="message"  />
    <button @click="fun()">clickme</button>
  </div>
</template>
<script>
import props from "./props.vue";
export default {
  name: "ProP",
  components: {
    props,
  },
  data() {
    props;
    return {
      name: "naresh",
      message: "hi how are you",
    };
  },
  methods: {
    fun() {
      this.$refs.venkata.res();
    },
  },
};
</script>
