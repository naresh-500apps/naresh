<template>
    <div>
        <h1>enter table format</h1>
        <b-table  :items="details"></b-table>
    </div>
</template>

<script>

export default {
    name:"TablE",
    data(){
        return{
         details:[{sno:"1",name:"suri",email:"suri123@gmail.com",contact:"879456123",city:"kakinada"},
                  {sno:"2",name:"ramu",email:"suri123@gmail.com",contact:"879456123",city:"gudivada"},
                  {sno:"3",name:"sreenu",email:"suri123@gmail.com",contact:"879456123",city:"razole"},
                  {sno:"4",name:"mahesh",email:"suri123@gmail.com",contact:"879456123",city:"vizag"}]
        }
    },
}
</script>
