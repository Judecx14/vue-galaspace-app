<template>
    <section class="row col-12">
        <picture class="col-lg-7 d-none d-lg-block">
            <div class="p-4">
                <img id="logo" src="../../assets/img/layer/logo.png" alt="logo">
                <strong>Galaspace</strong>
            </div>
            <div id="container-greeting" class="d-flex align-items-center justify-content-center">
                <h1 class="text-center">
                    <p id="greet-up">There is a galaxy of people</p>
                    <p id="greet-down">to meet</p>
                </h1>
            </div>
            <div>
                <img id="image" class="mx-auto d-block" src="../../assets/img/layer/illustration.svg" alt="image">
            </div>
        </picture>
        <div class="d-flex align-items-center col-lg-5 col-12">
            <FormSignUp></FormSignUp>
        </div>
    </section>
</template>
<script>
    import FormSignUp from './FormSignUp.vue'
    export default {
        name: 'SignUp',
        components: {
            FormSignUp,
        }
    }
</script>

<style scoped>
    section {
        min-height: 100vh;
    }
    picture {
        background: rgb(62,38,105);
        background: linear-gradient(56deg, rgba(62,38,105,1) 0%, rgba(42,25,72,1) 100%);
    }
    strong {
        color: white;
        font-size: 20px;
    }
    #logo {
        width: 70px;
    }
    #container-greeting {
        min-height: 30%;
    }
    #greet-up {
        color: rgba(216, 216, 216, 0.555);
    }
    #greet-down {
        color: rgb(206, 206, 206);
    }
    #image {
        width: 400px;
    }
</style>