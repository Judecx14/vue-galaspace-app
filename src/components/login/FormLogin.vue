<template>
  <div id="login-container" class="mt-1">
    <img class="mx-auto d-block d-lg-none" src="../../assets/logo.png" alt="logo">
    <h1 class="animate__animated animate__bounce">Login</h1>
    <input type="text" v-model="email" placeholder="Email" />
    <span v-if="v$.email.$error">
      {{ v$.email.$errors[0].$message }}
    </span>
    <input type="password" v-model="password" placeholder="Password" />
    <span v-if="v$.password.$error">
      {{ v$.password.$errors[0].$message }}
    </span>
    <p class="text-center" id="error-message" v-if="errMsg">{{ errMsg }}</p>
    <!-- <p class="text-center m-3">
      <a href="#" class="mx-auto">Did you forget your password?</a>
    </p> -->
    <button type="submit" id="btn-signup" @click="login">
      Login
    </button>
    <p class="text-center m-3">
      <router-link :to="{ name: 'SignUp' }" class="mx-auto">Sign In</router-link>
    </p>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  helpers,
} from "@vuelidate/validators";
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "FormLogin",
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      email: "",
      password: "",
      router: useRouter(),
      errMsg: "",      
    };
  },
  validations() {
    return {
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
      }
    };
  },
  methods: {
    login() {
      this.v$.$validate();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          this.router.push("/home");
          const user = userCredential.userr
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          switch (errorCode) {
          case 'auth/invalid-email':
              this.errMsg = 'Invalid email'
              break
          case 'auth/user-not-found':
              this.errMsg = 'No account with that email was found'
              break
          case 'auth/wrong-password':
              this.errMsg = 'Incorrect password'
              break
          default:
              this.errMsg = 'Email or password was incorrect'
              break
        }
        });
    },
  },
};
</script>

<style scoped>
    #login-container {
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
    #error-message{
      color: rgb(226, 66, 66);
    }
</style>