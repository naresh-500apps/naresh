<template>
    <div>
        <h1 align="center">PRODUCT DETAILS</h1><br><br>
     <b-form>
             <b-row><b-col md="2"><b-form-input type="text" v-model="val" placeholder="enter product_name"></b-form-input></b-col></b-row><br>
             <b-row><b-col md="2"><b-form-input type="number" v-model="val1" placeholder="enter price"></b-form-input></b-col></b-row><br>
             <b-row><b-col md="2"><b-form-input type="number" v-model="val2" placeholder="enter price_category"></b-form-input></b-col></b-row><br>
         </b-form>
         <b-button variant="primary" @click="fun()" class="float-left-md">submit</b-button> &nbsp;
         <b-button variant="danger" @click="fun1()" class="float-left-md">reset</b-button><br><br><br>  
         <b-table striped hover :items="products" :fields="fields"></b-table>
    </div>
</template>
<script>

export default{
    name:'RIce',
    data(){
        return{
            fields:['product_name','price','price_category'],
            products:[{product_name:"",price:"",price_category:""}],
            val:"",
            val1:"",
            val2:"",
        }
    },
    methods:{
        fun(){
            this.products.push({
                product_name: this.val,
                price: this.val1,
                price_category: this.val2,
            });
            this.val = ""
            this.val1 = ""
            this.val2 = ""
        },
        fun1(){
            this.products.pop({
                product_name: this.val,
                price: this.val1,
                price_category: this.val2,
            });
            this.val = ""
            this.val1 = ""
            this.val2 = ""
        }
    }
}
</script>
