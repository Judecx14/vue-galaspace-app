<template>
    <header class="p-2">
        <nav class="px-5 py-1">
            <ul class="d-flex justify-content-between align-items-center">
                <li>
                    <a href="">
                        <UserCircleIcon class="icon-size color-purple scale-animation"></UserCircleIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                        <UserGroupIcon class="icon-size color-purple scale-animation"></UserGroupIcon>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/img/navbar/logo.png" alt="logo" id="logo">
                    </a>
                </li>
                <li>
                    <a href="">
                        <ChatAlt2Icon class="icon-size color-purple scale-animation"></ChatAlt2Icon>
                    </a>
                </li>
                <li>
                    <a href="">
                        <HeartIcon class="icon-size color-purple scale-animation"></HeartIcon>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { UserCircleIcon, UserGroupIcon, ChatAlt2Icon, HeartIcon  } from '@heroicons/vue/outline'
export default {
    name:'Navbar',
    components: {
        UserCircleIcon,
        UserGroupIcon,
        ChatAlt2Icon,
        HeartIcon
    }   
}
</script>

<style scoped>
    header {
        position: fixed;
        width: 100%;
        z-index: 3;
        background-color: white;
    }
    nav {
        background-color: white;
        box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.2);
        border-radius: 10px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .color-purple {
        color: var(--color-purple);
    }
    .icon-size {
        width: 35px;
        height: 35px;
    }
    #logo {
        width: 80px;
    }
    .scale-animation {
        transition: transform 0.25s;
    }
    .scale-animation:hover {
        transform: scale(1.25);
    }
</style>