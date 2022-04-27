<template>
    <div>
        <Emitchild @naresh="fun1()"></Emitchild>
    </div>
</template>
<script>
import Emitchild from './emit.vue'

export default{
    name:'EmiT1',
    components:{
        Emitchild
    },
    methods:{
        fun1(){
            document.write("naresh");
        }
    }
}
</script>
