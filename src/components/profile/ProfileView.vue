<template>
    <Navbar></Navbar>
    <section class="row col-12 px-3">
        <div class="col-lg-3 d-none d-lg-block fixed">
            <p id="subtitle">Search</p>
            <Search></Search>
        </div>
        <div class="col-lg-6 offset-lg-3">
            <p id="title-create-publication">Profile</p>
            <Profile></Profile>
        </div>
        <div class="col-lg-3 d-none d-lg-block fixed offset-lg-9">
            <p id="subtitle">Contacts</p>
            <Contacts></Contacts>
        </div>
    </section>
</template>

<script>
import Navbar from '../Navbar.vue'
import Search from '../Search.vue'
import Contacts from '../Contacts.vue'
import Profile from './Profile.vue'
export default {
    name: 'ProfileView',
    components: {
        Navbar,
        Search,
        Contacts,
        Profile,
    }
}
</script>

<style scoped>
    section {
        padding-top: 125px;
    }
    #title-create-publication {
        font-size: 18.5px;
        color: var(--color-purple);
        font-weight: 500;
    }
    #subtitle {
        font-size: 18.5px;
        color: gray;
        font-weight: 500;
    }
    .fixed {
    position: fixed;
    }
</style>