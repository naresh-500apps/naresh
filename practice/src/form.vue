<template>
    <div>
       <label>ENTER THE NAME:</label>
       <input type="text" id="name">
       <label>ENTER EMAIL:</label>
       <input type="text" id="name">
       <label>ENTER CONTACT:</label>
       <input type="number" id="name"> 
       <button type="button" @click="submit()">submit</button>   
       </div>
</template>

<script>
export default {
    name: 'ForM',
    data(){
        return{
            name:'naresh',
            email:'nar123@gmail.com',
            contact:'8974561236',
        }
        },
        methods:{
            submit(){
                document.write(this.name + "" + this.email + "" + this.contact);
            }
        }
    
}
    
</script>
