<template>
    <div id="container-posts">
        <section>
            <div id="post" v-for="post in posts" v-bind:key="post">
                <picture class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <img id="profile-photo" v-bind:src="post.user_photo" alt="profile-picture">
                        <p class="mt-3" id="name">{{post.author}}</p>
                    </div>
                    <div class="dropdown" v-if="isMine">
                        <button id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <DotsCircleHorizontalIcon class="icon-dropdown"/>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <button class="dropdown-item">
                                    <PencilAltIcon style="height: 20px; width: 20px"/>
                                    Edit
                                </button>
                            </li>
                            <li>
                                <button class="dropdown-item">
                                    <MinusCircleIcon style="height: 20px; width: 20px"/>
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </div>
                </picture>
                <img id="body-img" v-bind:src="post.image" alt="">
                <p class="p-3"> 
                    {{ post.body}}
                </p>
                <!-- <div class="d-flex justify-content-between px-3 pb-3">                    
                    <button class="btn-custom">Comments {{post.qtyComments}}</button>
                        <button class="btn-custom" id="btn-icon">
                            <HeartIcon></HeartIcon>
                        </button>
 
                </div> -->
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
//import { getAuth } from "firebase/auth";
import { MinusCircleIcon, PencilAltIcon, DotsCircleHorizontalIcon } from '@heroicons/vue/outline'
export default {
    name: 'Posts',
    components: { MinusCircleIcon, PencilAltIcon, DotsCircleHorizontalIcon },
    props: {
        isMine: Boolean
    },
    data (){
        return{
            posts: [],
            id: "",
            name: "",
            profilePicture: ""    
        }
    },
    mounted(){ 
        this.getPosts()
    },
    methods: {
        getPosts: async function(){
            await axios.get('http://192.168.14.8:3333/posts')
            .then(response => {
                this.posts = response.data
            })
        },
    }
}
</script>

<style scoped>
    #btn-post{
        border: 2px solid var(--color-pink);
        border-radius: 25px;
        background: transparent;
        color: var(--color-pink);
        padding-inline: 30px;
        margin-left: 10px;
    }
    #btn-post:hover{
        background-color: var(--color-pink);
        color: white;
    }
    #edit {
        width: 100%;
        height: 100px;
        border: none;
    }

    #edit:focus {
        outline: none;
    }

    #dropdownMenuButton1{
        background: transparent;
        border: none;
        color: var(--color-pink);
        font-size: 35px;
    }
    p{
        font-size: 15px;
        color: rgb(92, 92, 92);
    }
    #post{
        width: 100%;
        box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.2);
        border-radius: 15px;
        margin-block: 17.5px;
    }
    picture{
        padding: 20px 35px;
    }
    #name{
       font-weight: 500; 
    }
    #profile-photo{
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 100px;
        margin-right: 25px;
    }
    #body-img{
        width: 100%;
    }
    .btn-custom{
        background: transparent;
        color: gray;
        border: none;
        font-weight: 500;
    }
    #btn-icon{
        width: 40px;
        height: 40px;
        color: var(--color-pink);
    }
    .icon-dropdown {
        width: 30px;
        height: 30px;
        color: rgb(124, 124, 124);
    }
</style>