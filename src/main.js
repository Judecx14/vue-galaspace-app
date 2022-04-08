import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from "vuex";
import { initializeApp } from "firebase/app";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore({
    state: {
        count: 1,
    },
});


const firebaseConfig = {
    apiKey: "AIzaSyB1mC0UxMUMsSQHt6qntS-j8y9HxBMIieE",
    authDomain: "vue-galaspace-app.firebaseapp.com",
    projectId: "vue-galaspace-app",
    storageBucket: "vue-galaspace-app.appspot.com",
    messagingSenderId: "265553837352",
    appId: "1:265553837352:web:ab343b3947f1ddebb2241d",
    measurementId: "G-QP0817HM2N"
};

initializeApp(firebaseConfig);

//createApp(App).use(router).mount('#app')

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

