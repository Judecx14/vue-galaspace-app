<template>
        <h3>Crear Publicación</h3>
        <div id="create-post">
            <form>
                <div class="d-flex justify-content-around mb-2 align-items-center">
                    <img id="profile-picture" v-bind:src="profilePicture">
                    <input type="text" id="text-input" v-model="content">
                </div>
                <img id="post-image" v-bind:src="image" v-if="image">
                <div class="d-flex justify-content-end me-3">
                    <button id="btn-remove-img" v-if="image" v-on:click="deleteImage">
                        <XIcon id="icon"></XIcon>
                    </button>
                    <div class="d-flex">
                        <label for="image-input" class="d-flex justify-content-center align-items-center" id="btn-select-img">
                            <PhotographIcon id="icon"></PhotographIcon>
                        </label>
                        <input v-on:change="onImageSelect" type="file" class="d-none" name="image-input" id="image-input" accept="image/png, image/jpeg">
                        <button id="btn-post" v-on:click="createPost">Publicar</button> 
                    </div>     
                </div>
            </form>
        </div>
</template>

<script>
import { PhotographIcon, XIcon } from '@heroicons/vue/outline'
import axios from 'axios'
export default {
    name: 'CreatePost',
    components: {
        PhotographIcon, 
        XIcon
    },
    data (){
        return{ 
            profilePicture: "https://media.vogue.mx/photos/61aa21a7e654317d15422bed/2:3/w_1600,c_limit/1351801585",
            content: "",
            image: "",
            name: "Billie Eilish",
            file: null,
       }
    },
    methods:{
        onImageSelect(e){
            this.file = e.target.files[0]
            this.image = URL.createObjectURL(e.target.files[0]);
        },
        deleteImage(){
            this.image = "";
        },
        createPost: async function() {
            const formData = new FormData()
            formData.append('user', this.name)
            formData.append('user_picture', this.profilePicture)
            formData.append('photo', this.file, this.file.name)
            formData.append('body', this.content)
            await axios.post('http://127.0.0.1:3333/post', formData)
            .then(response => {
                console.log(response);
            })
        }
    }
}
</script>

<style scoped>
    h3{
        color: #452f75;
    }
    #create-post{
        width: 100%;
        border-radius: 15px;
        padding: 15px;
        box-shadow: 0px 0px 15px rgb(173, 173, 173);
        margin-block: 17.5px;

    }
    #profile-picture{
        width: 75px;
        height: 75px;
        object-fit: cover;
        border-radius: 100px;
    }
    #text-input{
        border: 1px solid gray;
        height: 45px;
        width: 80%;
        border-radius: 100px;
        padding: 10px;
    }
    #text-input:focus{
        outline: none;
    }
    #post-image{
        width: 100%;
        margin-bottom: 10px;
        border-radius: 15px;
    }
    #btn-post{
        border: 2px solid #E71F76;
        border-radius: 25px;
        background: transparent;
        color: #E71F76;
        padding-inline: 30px;
        margin-left: 10px;
    }
    #btn-post:hover{
        background-color: #E71F76;
        color: white;
    }
    #btn-select-img{
        background-color: transparent;
        color: #E71F76;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    #btn-remove-img{
        background-color: transparent;
        color: #E71F76;
        width: 40px;
        height: 40px;
        cursor: pointer;
        border:none;
    }
</style>