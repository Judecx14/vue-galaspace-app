<template>
        <div id="container-data" class="text-center">
            <router-link class="d-block text-start color: " :to="{ name: 'Profile' }">
                <ArrowCircleLeftIcon class="icon-back"></ArrowCircleLeftIcon>
            </router-link>
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
            <div class="d-flex justify-content-center">
                <button id="save" v-on:click="updateProfile">Guardar</button>
            </div>
        </div>
</template>

<script>
import { PencilAltIcon, ArrowCircleLeftIcon } from '@heroicons/vue/outline'
import axios from 'axios'
import { getAuth, updateProfile  } from "firebase/auth";
import { useRouter } from 'vue-router';
export default {
    name: 'start',
    components: {
        PencilAltIcon,
        ArrowCircleLeftIcon
    },
    data (){
        return{ 
            file: null,
            profile_image: "",
            name: "",
            imageURL: "",
            router: useRouter()
       }
    },
    mounted() {
            this.getProfile()
    },
    methods:{
        onImageSelect(e){
            this.file = e.target.files[0]
            this.profile_image = URL.createObjectURL(e.target.files[0]);
            
        },
        deleteFoto(){
            this.profile_image = "";
        },
        getProfile(){
            const auth = getAuth();
            const user = auth.currentUser;
            if (user !== null) {
                const displayName = user.displayName;
                const photoURL = user.photoURL;
                this.name = displayName;
                this.profile_image = photoURL;
                console.log(this.name)
                console.log(this.photo)
                const uid = user.uid;
                this.id = uid
            }
        },
        updateProfile(){
            const image = new FormData()
            image.append('file', this.file)
            //this.v$.$validate();
            axios.post('https://api.cloudinary.com/v1_1/djldaixtk/image/upload?upload_preset=pcuhg6au', image)
                .then(response => {
                    this.imageURL = response.data.secure_url
                    console.log(this.imageURL)
                    const auth = getAuth();
                    updateProfile(auth.currentUser,{
                    displayName: this.name, photoURL: this.imageURL
                    }).then(() => {
                        this.router.push("/profile")
                    }).catch((error) => {
                        console.log(error)
                    });
                })
        }
    }
}
</script>

<style scoped>
    .icon-back{
        color: var(--color-pink);
        width: 35px;
    }
    h3{
        color: #452f75;
    }

    #container-data{
        width: 100%;
        box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.2);        
        border-radius: 15px;
        padding: 10px;
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
    a{
        text-decoration: none !important;
    }
    .no-deco{
        text-decoration: none !important;
    }
    router-link a{
    text-decoration: none !important;
}
    #name:focus{
        outline: none;
    }
    #save{
        background: transparent;
        color: #E71F76;
        border-radius: 50px;
        padding-inline: 30px;
        padding-block: 5px;
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