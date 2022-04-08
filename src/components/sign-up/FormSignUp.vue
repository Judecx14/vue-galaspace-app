<template>
  <div id="signup-container" class="mt-1">
    <img class="mx-auto d-block d-lg-none" src="../../assets/logo.png" alt="logo">
    <h1 class="animate__animated animate__bounce">Sign Up</h1>
    <UserCircleIcon class="icon-user-image mx-auto d-block" v-if="!image"></UserCircleIcon>
    <img id="user-image" v-bind:src="image" v-if="image" class="d-block mx-auto">
    <label class="text-center d-block" for="image-input" id="label-image">
      Seleccionar imagen de perfil
    </label>
    <input v-on:change="onImageSelect" type="file" class="d-none" name="image-input" id="image-input" accept="image/png, image/jpeg">
    <input type="text" v-model="fullname" placeholder="Name" />
    <span v-if="v$.fullname.$error">
      {{ v$.fullname.$errors[0].$message }}
    </span>
    <input type="text" v-model="email" placeholder="Email" />
    <span v-if="v$.email.$error">
      {{ v$.email.$errors[0].$message }}
    </span>
    <input type="password" v-model="password" placeholder="Password" />
    <span v-if="v$.password.$error">
      {{ v$.password.$errors[0].$message }}
    </span>
    <input type="password" v-model="confirmPassword" placeholder="Confirm Password" />
    <span v-if="v$.confirmPassword.$error">
      {{ v$.confirmPassword.$errors[0].$message }}
    </span>
    <button type="submit" id="btn-signup" @click="signUp">
      Sign Up
    </button>
    <small>*By registering you accept our terms and conditions</small>
    <br />
    <p class="text-center m-3">
      <router-link :to="{ name: 'Login' }" class="mx-auto">Do you already have an account?</router-link>
    </p>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { UserCircleIcon } from '@heroicons/vue/outline'
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { useRouter } from 'vue-router';
import axios from 'axios'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
export default {
  name: "FormLogin",
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      router: useRouter(),
      image: "",
      imageURL: "",
      file: null
    };
  },
  components: {
    UserCircleIcon,
  },
  validations() {
    return {
      fullname: {
        required: helpers.withMessage("*The name is required", required),
      },
      email: {
        required: helpers.withMessage("*The email is required", required),
        email: helpers.withMessage("*Email is not valid", email),
      },
      password: {
        required: helpers.withMessage("*The password is required", required),
        minLength: helpers.withMessage(
          "*Password must be 8 characters",
          minLength(8)
        ),
      },
      confirmPassword: {
        required: helpers.withMessage("*Password must be confirmed", required),
        sameAs: helpers.withMessage(
            "*Passwords do not match", 
            sameAs(this.password)
        ),
      },
    };
  },
  methods: {
    onImageSelect(e) {
            this.file = e.target.files[0]
            this.image = URL.createObjectURL(e.target.files[0])
    },
    signUp() {
      const image = new FormData()
      image.append('file', this.file)
      this.v$.$validate();
      axios.post('https://api.cloudinary.com/v1_1/djldaixtk/image/upload?upload_preset=pcuhg6au', image)
        .then(response => {
            this.imageURL = response.data.secure_url
            console.log(this.imageURL)
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
              .then((userCredential) => {
                // Signed in
                this.router.push("/home");
                const user = userCredential.user;
                updateProfile(
                  auth.currentUser,
                  {
                    displayName: this.fullname,
                    photoURL: this.imageURL
                  }
                )
                console.log(user)
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                // ..
              });
        })
    },
  },
};
</script>

<style scoped>
    #signup-container {
        width: 100%;
    }
    h1 {
        color: #452f75;
    }
    input {
        width: 100%;
        margin: 10px 0px 10px 0px;
        border-radius: 100px;
        padding: 10px;
        border: 1px solid #5c4e9a;
    }
    input:focus {
        outline: none;
    }
    small {
        color: #5c4e9a;
    }
    #btn-signup {
        background-color: #ffffff;
        border-radius: 100px;
        border: 2px solid #452f75;
        color: #452f75;
        width: 100%;
        padding: 10px;
        margin-top: 15px;
        margin-bottom: 15px;
        transition: 0.35s;
    }
    #btn-signup:hover {
        background-color: #452f75;
        color: #ffffff;
        transition: 0.35s;
    }
    a {
        color: #5c4e9a;
        text-decoration: none;
    }
    a:hover {
        color: #452f75;
    }
    span{
        color: #5c4e9a;
        font-size: 12px;
        margin-left: 15px;
    }
    .icon-user-image{
      height: 125px;
      width: 125px;
      color: #a7a7a7;
    }
    #label-image{
      cursor: pointer;
      color: #a7a7a7;
    }
    #user-image{
      width: 125px;
      height: 125px;
      object-fit: cover;
      border-radius: 100px;
    }
</style>