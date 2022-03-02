<template>
        <h3>Editar Perfil</h3>
        <div id="container-data" class="text-center">
            <img v-bind:src="profile_image">
            <br>
            <label id="change-image" for="profile-photo-input">
                <PencilAltIcon></PencilAltIcon>
            </label>
            <input v-on:change="onImageSelect" type="file" class="d-none" name="profile-photo-input" id="profile-photo-input" accept="image/png, image/jpeg">
            <br>
            <label for="name">Nombre</label>
            <br>
            <input type="text" name="name" id="name" v-model="name">
            <br>
            <div class="d-flex justify-content-end">
                <button id="save" v-on:click="save">Guardar</button>
            </div>
        </div>
</template>

<script>
import { PencilAltIcon } from '@heroicons/vue/outline'
import axios from 'axios'
export default {
    name: 'start',
    components: {
        PencilAltIcon
    },
    data (){
        return{ 
            id: "fZxef4V4P03I51qDwbyd",
            file: null,
            profile_image: "https://los40es00.epimg.net/los40/imagenes/2021/01/26/musica/1611651861_307195_1611652561_gigante_normal.jpg",
            name: "Billie Eilish"
       }
    },
    methods:{
        onImageSelect(e){
            this.file = e.target.files[0]
            this.profile_image = URL.createObjectURL(e.target.files[0]);
            
        },
        deleteFoto(){
            this.profile_image = "";
        },
        save: async function() {
            const formData = new FormData()
            formData.append('photo', this.file, this.file.name)
            formData.append('name', this.name)
            await axios.post("http://localhost:3333/users/fZxef4V4P03I51qDwbyd", formData)
            .then(response => {
                console.log(response.data);
            })   
        }
    }
}
</script>

<style scoped>

    h3{
        color: #452f75;
    }

    #container-data{
        width: 100%;
        box-shadow: 0px 0px 15px rgb(170, 170, 170);
        border-radius: 15px;
        padding: 15px;
        margin-block: 35px;
    }
    img{
        margin-top: 20px;
        width: 200px;
        height: 200px;
        border-radius: 100px;
        object-fit: cover;
    }
    #change-image{
        width: 60px;
        height: 60px;
        background: #E71F76;
        color: white;
        border: none;
        border-radius: 100px;
        position: relative;
        top: -60px;
        left: 55px;
        margin-bottom: -20px;
       padding: 10px;
    }
    label{
        font-size: 18px;
        color: #5f5f5f;
        font-weight: 600;
        cursor: pointer;
    }
    #name{
        border: 1px solid #5f5f5f;
        padding: 10px;
        border-radius: 50px;
        margin-left: 10px;
        margin-bottom: 50px;
    }
    #name:focus{
        outline: none;
    }
    #save{
        background: transparent;
        color: #E71F76;
        border-radius: 50px;
        padding-inline: 30px;
        padding-block: 10px;
        border: 2px solid #E71F76;
        transition: 0.35s;
        margin-bottom: 20px;
    }
    #save:hover{
        background: #E71F76;
        color: white;
        transition: 0.35s;
    }
</style>