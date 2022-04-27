<template>
    <div>
        <h1 align="center">props condition</h1>
        <p>{{name}}</p>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    name:"PropS",
     props:{
         name:String,
         message:String,
     },
     methods:{
         res(){
             document.write('hi this is naresh');
         }
     }
}
    
</script>
