<template>
  <div>
    <h1 align="center">fetching data from a link</h1>
    <b-row><b-col md="2"><b-form-input v-model="value" placeholder="Enter your country name"></b-form-input></b-col></b-row><br>
    <b-button @click="res()" variant="success">submit</b-button><br><br>
    <b-table striped hover :items="get" :fields="fields"></b-table>
  </div>
</template>
<script>
export default {
  name: "DeMo",
  data() {
    return {
      get:"",
      fields: ["name", "domains","web_pages"],
    }
  },
  methods: {
    async res() {
      let response = await fetch("http://universities.hipolabs.com/search?country=" + this.value);
      this.get = await response.json();
      
    }
  },
}
</script>
