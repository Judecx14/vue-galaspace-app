<template>
    <div id="container-profile" class="py-4"> 
        <img id="profile-picture" class="mx-auto d-block" v-bind:src="photo" alt="profile-picture">
        <strong class="text-center">
            <p id="name">{{name}}</p>
        </strong>
        <div class="d-flex justify-content-center">
            <button id="btn-edit" class="d-flex align-items-center btn-profile px-5 justify-content-between">
                Edit <PencilAltIcon class="icon-size-profile"></PencilAltIcon>
            </button>
            <button id="btn-logout" class="btn-profile" v-on:click="logout">
                <LogoutIcon class="icon-size-profile"></LogoutIcon>
            </button>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <button class="me-3 btnTab" v-bind:class="{ btnBorderBottom: showPosts }">
                Posts
            </button>
            <button class="ms-3 btnTab" v-bind:class="{ btnBorderBottom: showFriends }">
                Friends List
            </button>
        </div>
    </div>
</template>

<script>
    import { PencilAltIcon, LogoutIcon } from '@heroicons/vue/outline'
    import { useRouter } from 'vue-router'
    import { getAuth, signOut } from "firebase/auth";
    export default {
        name: 'Profile ',
        components: {
            PencilAltIcon,
            LogoutIcon
        },
        data() {
            return {
                showPosts: true,
                showFriends: false,
                router: useRouter(),
                name: "",
                photo: "",
            }
        },
        mounted() {
            this.getProfile()
        },
        methods: {
            logout() {
                const auth = getAuth();
                signOut(auth)
                this.router.push("/");
            },
            getProfile(){
                console.log("HOLA SOY GET PROFILE");
                const auth = getAuth();
                const user = auth.currentUser;
                if (user !== null) {
                    // The user object has basic properties such as display name, email, etc.
                    const displayName = user.displayName;
                    //const email = user.email;
                    const photoURL = user.photoURL;
                    this.name = displayName;
                    this.photo = photoURL;
                    console.log(this.name)
                    console.log(this.photo)
                    // The user's ID, unique to the Firebase project. Do NOT use
                    // this value to authenticate with your backend server, if
                    // you have one. Use User.getToken() instead.
                    //const uid = user.uid;
                }
            }
        }
    }
</script>

<style scoped>
    #container-profile {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.2);
    }
    #profile-picture {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 100px;
    }
    #name {
        color: var(--color-violet);
        font-size: 25px;
        margin-block: 15px;
    }
    .btn-profile {
        color: var(--color-pink);
        border: 1px solid var(--color-pink);
        background: transparent;
        transition: 0.25s;
    }
    .btn-profile:hover {
        color: white;
        background: var(--color-pink);
    }
    #btn-edit {
        border-radius: 50px;
    }
    #btn-logout {
        width: 45px;
        height: 45px;
        border-radius: 100px;
        margin-left: 15px;
    }
    .icon-size-profile {
        width: 25px;
        height: 25px;
    }
    .btnTab {
        background: transparent;
        color: rgba(92, 92, 92, 0.644);
        border: none;
        border-bottom: 2px solid transparent;
    }
    .btnBorderBottom {
        border-bottom: 2px solid var(--color-pink);
    }
</style>