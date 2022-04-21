<template>
    <div>
        <h1>HelloWorld</h1>
        <p>iam naresh</p>
        <button type="submit" @click="res">Submit</button>
    </div>
</template>

<script>

export default {
    name:"HomE",
    data(){
        return{
            name:"naresh",
        }
    },
    methods:{
        res(){
            document.write(this.name)
        }
    }
}
</script>


