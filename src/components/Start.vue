<template>
    <div class="row col-12 contenedor">
        <!--<design-login class="col-xl-7 col-sm-2 diseño"></design-login>-->
        <div class="col form-container">
            <LoginForm></LoginForm>
        </div>
    </div>
</template>

<script>
import LoginForm from './LoginForm.vue'
//import DesignLogin from './DesignLogin.vue'
export default {
    name: 'start',
    components: {
        LoginForm,
        //DesignLogin
    }
}
</script>

<style scoped>
    .contenedor{
    min-height: 100vh;
    }
    .form-container{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -180px;
    }
    .form-container2{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -120px;
    }
    .form-container3{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -120px;
    }
    @media (max-width: 1249px) {
    .diseño{
        display: none;
    }
    .form-container{
        width: 100%;
    }
    .form-container2{
        width: 100%;
    }
    }
</style>