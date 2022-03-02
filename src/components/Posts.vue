<template>
    <div id="container-posts">
        <section>
            <h3>Publicaciones</h3>
            <div id="post" v-for="post in posts" v-bind:key="post">
                <picture class="d-flex align-items-center">
                    <img id="profile-photo" v-bind:src="post.profileImage" alt="profile-picture">
                    <p id="name">{{post.name}}</p>
                </picture>
                <img id="body-img" v-bind:src="post.bodyImage" alt="">
                <p class="p-3">
                    {{post.body}}
                </p>
                <div class="d-flex justify-content-between px-3 pb-3">                    
                    <button class="btn-custom">Comentarios {{post.qtyComments}}</button>
                    <button class="btn-custom" id="btn-icon">
                        <HeartIcon></HeartIcon>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import { HeartIcon } from '@heroicons/vue/outline'
export default {
    name: 'Posts',
    components: { HeartIcon },
    data (){
        return{
            posts: []    
        }
    },
    mounted(){
        this.getPosts()
    },
    methods: {
        getPosts: async function(){
            await axios.get('https://galaspace-api-default-rtdb.firebaseio.com/posts.json')
            .then(response => {
                this.posts = response.data
            })
        }
    }
}
</script>

<style scoped>
    
    h3{
        color: #452f75;
    }
    p{
        font-size: 15px;
        color: rgb(92, 92, 92);
    }
    #post{
        width: 100%;
        box-shadow: 0px 0px 15px rgb(190, 190, 190);
        border-radius: 15px;
        margin-block: 17.5px;
    }
    picture{
        padding: 20px 35px;
    }
    #name{
       font-weight: bold; 
    }
    #profile-photo{
        width: 75px;
        height: 75px;
        object-fit: cover;
        border-radius: 100px;
        margin-right: 25px;
    }
    #body-img{
        width: 100%;
    }
    .btn-custom{
        background: transparent;
        color: rgb(243, 83, 190);
        border: none;
        font-weight: bold;
    }
    #btn-icon{
        width: 40px;
        height: 40px;
    }
</style>