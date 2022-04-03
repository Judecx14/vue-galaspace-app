<template>
    <div id="container-search" class="pt-3 px-2">
        <form class="d-flex justify-content-around align-items-center">
            <input type="text" name="search" id="search" placeholder="Find more people">
            <button type="submit">
                <SearchCircleIcon class="icon-search"></SearchCircleIcon>
            </button>
        </form>
        <picture class="d-flex flex-column mt-5 pt-5">
            <UserAddIcon class="icon-add mx-auto"></UserAddIcon>
            <small class="text-center">Look for someone</small>
        </picture>
    </div>
</template>

<script>
    import { SearchCircleIcon, UserAddIcon } from '@heroicons/vue/outline'
    export default {
        name: 'Search',
        components: {
            SearchCircleIcon,
            UserAddIcon
        }
    }
</script>

<style scoped>
    #container-search {
        background-color: white;
        box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.2);
        border-radius: 10px;
        min-height: 73vh;
    }
    input{
        background-color: rgb(235, 232, 232);
        border: none;
        border-radius: 100px;
        padding: 5px;
        padding-left: 10px;
    }
    input:focus{
        outline: none;;
    }
    button {
        background: transparent;
        border: none;
        margin: 0;
    }
    .icon-search {
        width: 30px;
        height: 30px;
        color: gray;
    }
    .icon-add {
        width: 80px;
        height: 80px;
        color: rgba(221, 218, 218, 0.466);
    }
    small{
        color: rgba(128, 128, 128, 0.651);
    }
</style>