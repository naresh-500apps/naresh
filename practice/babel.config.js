<template>
    <div>
        <h1>enter table format</h1>
        <table border="1px">
            <th>
                <tr>SNO</tr>
                <tr>NAME</tr>
                <tr>EMAIL</tr>
                <tr>CONTACT</tr>
                <tr>CITY</tr>
            </th>
            <th>
                <td>1</td>
                <td>raju</td>
                <td>raj111@gmail.com</td>
                <td>897456123</td>
                <td>kakinada</td>
            </th>
             <th>
                <td>2</td>
                <td>srinu</td>
                <td>raj111@gmail.com</td>
                <td>897456123</td>
                <td>kakinada</td>
            </th>
             <th>
                <td>3</td>
                <td>prakash</td>
                <td>raj111@gmail.com</td>
                <td>897456123</td>
                <td>kakinada</td>
            </th>
             <th>
                <td>4</td>
                <td>ravi</td>
                <td>raj111@gmail.com</td>
                <td>897456123</td>
                <td>kakinada</td>
            </th>
               
        </table>
        <button type="button" @click="tab()">click me</button>
    </div>
</template>

<script>


export default {
    name:"TablE",
    data(){
        return{
            sno: "",
            name:"",
            email:"",
            contact:"",
            city:"",
        }
    },
    methods:{
        tab(){
            document.write(this.sno + "" + this.name + "" + this.email + "" + this.contact + "" + this.city);
        }
    }

}
</script>
