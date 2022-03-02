<template>
    <div class="d-flex justify-content-center align-items-center">
        <section>
            <!-- <FriendsList></FriendsList> -->
            <!-- <Posts></Posts> -->
            <EditProfile></EditProfile>
            <CreatePost></CreatePost>
        </section>
    </div>
</template>

<script>
//import FriendsList from './FriendsList.vue'
//import Posts from './Posts.vue'
import CreatePost from './CreatePost.vue'
import EditProfile from './EditProfile.vue'
export default {
    name: 'start',
    components: {
        //FriendsList,
        //Posts,
        CreatePost,
        EditProfile
    },
    data (){
        return{ 
       }
    },
    methods:{
    }
}
</script>

<style scoped>
    section{
        width: 50%;
    }

</style>