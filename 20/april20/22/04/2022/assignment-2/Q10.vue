<template>
    <div>
        <button @click="fill()">click me</button>
    </div>
</template>
<script>


export default{
    name:'VieW',
    data(){
        return{
            officers: [ { id: 20, name: 'Captain Piett' }, 
            { id: 24, name: 'General Veers' }, 
            { id: 56, name: 'Admiral Ozzel' }, 
            { id: 88, name: 'Commander Jerjerrod' } ],
        }
    },
    methods:{
        fill(){
            var result = this.officers.map((x)=>{
                return x.id
            })
            console.log(result)
    },
    }
}
</script>
