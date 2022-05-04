<template>
    <div>
        <h1 align="center">CRUD OPERATIONS</h1><br><br>
        <b-form>
       <b-row><b-col md="4"><b-form-input v-model="value" type="text" placeholder="enter first name"></b-form-input></b-col></b-row>    <br><br>
        <b-row><b-col md="4"><b-form-input v-model="value1" type="text" placeholder="enter last name"></b-form-input></b-col></b-row> <br><br>
         <b-row><b-col md="4"><b-form-input v-model="value2" type="text" placeholder="enter emailid"></b-form-input></b-col></b-row> <br><br>
          <b-row><b-col md="4"><b-form-input v-model="value3" type="text" placeholder="enter contact no"></b-form-input></b-col></b-row> <br><br>
        </b-form>
         <b-button  variant="success" @click="fun()">Add</b-button> &nbsp; 
          <b-button  variant="primary" @click="fun1()">Edit</b-button> &nbsp; 
           <b-button  variant="danger" @click="fun2()">Delete</b-button> &nbsp; <br><br>
        <b-table striped hover  :items="items" :fields="fields"></b-table>
    </div>
</template>

<script>

export default{
    name:'CRud',
    data(){
        return{
           items:[{first_name: "",last_name: "",EmailID: "", ContactNo: ""}],
           fields:["first_name", "last_name", "EmailID", "ContactNo"],
           value:"",
           value1:"",
           value2:"",
           value3:"",

        }
    },
    methods:{
        fun(){
             this.items.push ({
                 first_name:this.value,
                 last_name:this.value1,
                 EmailID:this.value2,
                 ContactNo:this.value3,
             });
            //  this.value=""
            //  this.value1=""
            //  this.value2=""
            //  this.value3=""                    
        },
        fun1(){
             this.items.contentEditable ({
                 first_name:this.value,
                 last_name:this.value1,
                 EmailID:this.value2,
                 ContactNo:this.value3,
             });
            //  this.value=""
            //  this.value1=""
            //  this.value2=""
            //  this.value3=""                    
        },
        fun2(){
             this.items.pop ({
                 first_name:this.value,
                 last_name:this.value1,
                 EmailID:this.value2,
                 ContactNo:this.value3,
             });
            //  this.value=""
            //  this.value1=""
            //  this.value2=""
            //  this.value3=""                    
        },
    }
}
</script>
