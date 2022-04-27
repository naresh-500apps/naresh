<template>
    <div>
        <h1>emit condition</h1>
        <button @click="fun1()">clickme</button>
    </div>
</template>
<script>


export default{
    name:'EmiT',
    components:{

    },
    methods:{
        fun1(){
            this.$emit("naresh");
        }
    }
}
  
        
</script>
