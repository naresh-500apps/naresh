<template>
    <div>
        <h1>promises condition</h1>
        <button @click="res()">click me</button>
    </div>
</template>
<script>

export default{
    name:'PRom',
    data(){
        return{
               
        }
    },
    methods:{
        res(){
            let promise = new Promise((myresolve,myreject) => {
                myresolve("hello");
                myreject("error");
            })
            promise.then(() => {
                document.write("hi this is naresh");
            })
            .catch(() => {
                document.write("errors");
            })
        },
    }
}         
</script>
