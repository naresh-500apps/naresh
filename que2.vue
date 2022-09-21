<template>
  <div>
    <h1 align="center">fetching data from a link</h1>
    <b-row
      ><b-col md="4"
        ><b-form-select 
          v-model="value" :options="countries"
          placeholder="enter the country name"
        ></b-form-select></b-col></b-row><br />
        <b-pagination v-model="currentPage" :per-page="perPage" :total-rows="rows" :aria-controls="my-table" ></b-pagination>
    <b-button @click="val()" variant="success">submit</b-button><br /><br />
    <b-table id="my-table" :per-page="perPage" :current-page="currentPage" striped hover :items="items" :fields="fields"> </b-table>
  </div>
</template>

<script>
import axios from "axios";
const { getNames } = require("country-list")
export default {
  name: "FaSt",
  data() {
    return {
        perPage:3,
        currentPage:1,
      items: "",
      fields: ["name", "domains", "web_pages", "state-province"],
      countries:[],
    };
  },
  mounted() {
   let countries = getNames();
  this.countries = countries.map((row) => {
  return { value: row, text: row };
});
  },
  methods: {
    async val() {
      let response = await axios.get("http://universities.hipolabs.com/search?country=" + this.value);
      let res = await response.data;
      this.items = res;
    },
  },
  computed:{
      rows(){
          return this.items.length
      }
  }   
};
</script>
