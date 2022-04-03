<template>
  <div id="signup-container" class="mt-1">
    <img class="mx-auto d-block d-lg-none" src="../../assets/logo.png" alt="logo">
    <h1>Sign Up</h1>
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
    <button type="submit" id="btn-signup" @click="submitForm">
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
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
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
    };
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
    submitForm() {
      this.v$.$validate();
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
</style>