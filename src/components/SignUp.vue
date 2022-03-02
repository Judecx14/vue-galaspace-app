<template>
  <div id="signup-container" class="mt-1">
    <h1>Registrate</h1>
    <input type="text" v-model="fullname" placeholder="Nombre" />
    <span v-if="v$.fullname.$error">
      {{ v$.fullname.$errors[0].$message }}
    </span>
    <input type="text" v-model="email" placeholder="Email" />
    <span v-if="v$.email.$error">
      {{ v$.email.$errors[0].$message }}
    </span>
    <input type="password" v-model="password" placeholder="Contraseña" />
    <span v-if="v$.password.$error">
      {{ v$.password.$errors[0].$message }}
    </span>
    <input type="password" v-model="confirmPassword" placeholder="Confirmar contraseña" />
    <span v-if="v$.confirmPassword.$error">
      {{ v$.confirmPassword.$errors[0].$message }}
    </span>
    <button type="submit" id="btn-signup" @click="submitForm">
      Iniciar Sesión
    </button>
    <small>Al registrate aceptas nuestros terminos y condiciones</small>
    <br />
    <p class="text-center m-3">
      <a href="#" class="mx-auto">¿Ya tienes Cuenta?</a>
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
  name: "signup",
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
        required: helpers.withMessage("*El nombre es requerido", required),
      },
      email: {
        required: helpers.withMessage("*El email es requerido", required),
        email: helpers.withMessage("*Correo no valido", email),
      },
      password: {
        required: helpers.withMessage("*La contraseña es requerida", required),
        minLength: helpers.withMessage(
          "*La contraseña debe ser de 8 caracteres",
          minLength(8)
        ),
      },
      confirmPassword: {
        required: helpers.withMessage("*Se debe confirmar la contraseña", required),
        sameAs: helpers.withMessage(
            "*Las contraseñas no conciden", 
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
        width: 50%;
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