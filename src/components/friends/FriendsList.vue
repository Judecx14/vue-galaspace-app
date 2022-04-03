<template>
    <div id="container-friend-list">
        <section>
            <h3>Lista de Amigos</h3>
            <table>
                <tr v-for="friend in friends" v-bind:key="friend">
                    <td style="width: 150px;">
                        <img v-bind:src="friend.photo" alt="profile-photo">
                    </td>
                    <td><p>{{friend.name}}</p></td>
                    <td style="text-align: end;">
                        <button>
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
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h3{
        color: #452f75;
    }
    section{
        width: 65%;
    }
    table{
        margin-top: 15px;
        width: 100%;
        border-radius: 15px;
        box-shadow: 0px 0px 10px rgb(187, 187, 187);
    }
    td{
        padding: 15px;
        text-align: start;
    }
    img{
        width: 100px;
        height: 100px;
        object-fit: cover;
        aspect-ratio: 1/1;
        border-radius: 100px;
    }
    p{
        font-size: 20px;
        color: rgb(92, 92, 92);
    }
    button{
        background: transparent;
        border: none;
        width: 45px;
        height: 45px;
        color: rgb(92, 92, 92);
        transition: 0.25s;
    }
    button:hover{
        color: rgb(243, 83, 190);
        transition: 0.25s;
    }
</style>