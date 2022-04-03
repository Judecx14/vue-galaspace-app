<template>
    <div class="p-3" id="container-contacts">
        <picture class="d-flex align-items-center">
            <img class="profile-photo ms-1 me-3" src="https://media.vogue.es/photos/624103b0d16dfa60cb8c4282/2:3/w_1600,c_limit/GettyImages-1388065805.jpg" alt="profile-photo">
            <p class="mt-3">Billie Eilish</p>
        </picture>
    </div>
</template>

<script>
    export default {
        name: 'Contacts',
    }
</script>

<style scoped>
    #container-contacts {
        background-color: white;
        box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.2);
        border-radius: 10px;
        height: 73vh;
        overflow-y: scroll;
    }
    picture {
        transition: 0.25s;
        cursor: pointer;
        border-radius: 10px;
        margin-bottom: 10px;
    }
    picture:hover {
        transform: scale(1.05);
        background-color: rgba(214, 214, 214, 0.637);
        border-radius: 10px;
    }
    .profile-photo {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 100px;
    }
</style>