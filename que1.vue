<template>
  <div>
    <h1 align="center">fetching data from a link</h1>
    <b-row
      ><b-col md="4"
        ><b-form-input v-model="value" placeholder="enter the country name" class="btn btn-info dropdown-toggle"><select class="form-control"    >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select></b-form-input></b-col></b-row
    ><br/>
    <b-button @click="val()" variant="success">submit</b-button><br /><br />
    <b-table striped hover :items="items" :fields="fields" :options="countries"> </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TeSt",
  data() {
    return {
      items: "",
      fields: ["name", "domains", "web_pages", "state-province"],
      options:"",
    };
  },
  methods: {
    async val() {
      let response = await axios.get(
        "http://universities.hipolabs.com/search?country=" + this.value
      );
      let data1 = await response.data;
      this.items = data1;
    },
  },
};
</script>
