<template>
    <div>
    <b-tabs pills card>
        <b-tab title="tab-1" @click="fun1()"></b-tab> 
        <b-tab title="hide-tab" @click="ishidden=!ishidden"></b-tab> 
       <b-table striped hover :items="names" :fields="fields" :per-page="perPage" :current-page="currentPage" v-model="hidden"></b-table>
          <b-pagination
          v-model="currentPage"
           :total-rows="rows"
           :per-page="perPage"
            aria-controls="my-table"
           ></b-pagination>
<p class="mt-3">Current Page: {{ currentPage }}</p>
    </b-tabs>
    </div>
</template>

<script>

export default{
    name:'FetcH',
    data(){
        return{
               perPage:5,
            currentPage:1,
             names:"",
            fields:['userId','id','title','completed'],          
            mytable:"",
            ishidden: false,
        }   
    },
    methods:{
        async fun1(){
            let response = await fetch("https://jsonplaceholder.typicode.com/todos");    
             this.names = await response.json()              
        }
    },
    async fun2(){
        let response1 =  await fetch("https://jsonplaceholder.typicode.com/todos");
         this.names = await response1.ishidden.json()
    },
    computed:{
        rows(){
            return this.names.length
        }
    }
}
</script>
