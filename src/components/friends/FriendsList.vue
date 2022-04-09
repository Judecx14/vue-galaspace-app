<template>
    <div id="container-friend-list">
        <section>
            <table>
                <tr v-for="friend in friends" v-bind:key="friend">
                    <td style="width: 80px;">
                        <img id="friend-photo" v-bind:src="friend.photo" alt="profile-photo">
                    </td>
                    <td><p class="mt-3">{{friend.name}}</p></td>
                    <td style="text-align: end;">
                        <button id="trash-icon">
                            <TrashIcon></TrashIcon>
                        </button>
                    </td>
                </tr>
            </table>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import { TrashIcon } from '@heroicons/vue/solid'
export default {
    name: 'FriendsList',
    components: { TrashIcon },
    data(){
        return {
            friends: []
        }
    },
    async mounted() {
        await axios.get('https://galaspace-api-default-rtdb.firebaseio.com/friends.json')
        .then(response => {
            this.friends = response.data
        })
    }
}
</script>

<style scope>
    #container-friend-list{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section{
        width: 100%;
    }
    table{
        width: 100%;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgb(187, 187, 187);
    }
    td{
        padding: 15px;
        text-align: start;
    }
    #friend-photo{
        width: 50px;
        height: 50px;
        object-fit: cover;
        aspect-ratio: 1/1;
        border-radius: 100px;
    }
    p{
        color: rgb(92, 92, 92);
    }
    #trash-icon{
        background: transparent;
        border: none;
        width: 35px;
        height: 35px;
        color: rgb(92, 92, 92);
        transition: 0.25s;
    }
    #trash-icon:hover{
        color: var(--color-pink);
        transition: 0.25s;
    }
</style>