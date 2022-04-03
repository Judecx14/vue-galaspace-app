<template>
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
                        <button id="btn-post" v-on:click="createPost">Share</button> 
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
        onImageSelect(e) {
            this.file = e.target.files[0]
            this.image = URL.createObjectURL(e.target.files[0])
        },
        deleteImage() {
            this.image = ""
        },
        updatePost: async function() {
            const updateData = new FormData()
            updateData.append('body', this.content)
            await axios.put('https://galaspace-api-default-rtdb.firebaseio.com/posts.json', updateData)
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
        border-radius: 10px;
        padding: 15px;
        box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.2);
        margin-bottom: 18px;
    }
    #profile-picture{
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 100px;
    }
    #text-input{
        border: 1px solid rgb(196, 196, 196);
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
        border: 2px solid var(--color-pink);
        border-radius: 25px;
        background: transparent;
        color: var(--color-pink);
        padding-inline: 20px;
        margin-left: 10px;
        transition: 0.25s;
    }
    #btn-post:hover{
        background-color: var(--color-pink);
        color: white;
    }
    #btn-select-img{
        background-color: transparent;
        color: var(--color-pink);
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    #btn-remove-img{
        background-color: transparent;
        color: var(--color-pink);
        width: 40px;
        height: 40px;
        cursor: pointer;
        border:none;
    }
</style>