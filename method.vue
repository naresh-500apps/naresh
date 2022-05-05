<template>
    <div>
        <h1 align="center">method and computed condition</h1>   
        <b-button v-on:click="a++" variant="primary">add To A</b-button> &nbsp;
        <b-button v-on:click="b++" variant="secondary">add To B</b-button>   
        <p>A - {{ a }}</p>
        <p>B - {{ b }}</p>
        <p>Age + A = {{ addToA}}</p>
        <p>Age + B = {{ addToB}}</p>
    </div>
</template>

<script>

export default{
    name:'MEcd',
    data(){
        return{
           Age:20,
           a:0,
           b:0
        }
        
    },
   // methods:{
    //    addToA: function() {
    //        console.log('addToA')
    //          return this.a + this.Age;       
            
    //     },
    
    // addToB: function() {
    //     console.log('addToB')
    //         return this.b + this.Age;
    // }
computed:{
     addToA: function() {
         console.log('addToA')
             return this.a + this.Age;                        
} , 
    addToB: function() {
        console.log('addToB')
            return this.b + this.Age;
}
}
}

</script>
