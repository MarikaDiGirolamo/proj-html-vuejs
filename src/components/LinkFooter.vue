<script>

export default {
    name: "LinkFooter",
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    }

}
</script>


<template>
    <div class="container">
        <div class="py-3 my-4">
            <div class="img">
                <a href="">
                    <img src="../assets/Logo_4.png" alt="Logo-Footer">
                </a>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <p class=" text text-center">&copy; Copyright 2012-2022 | Avada Theme by
            <span>ThemeFusion</span>
            | All Right Reserved | Powered by <span>WordPress</span>
        </p>

        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a href="#" class="nav-link px-2"><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link px-2"><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link px-2"><i class="fa-brands fa-twitter"></i></a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link px-2"><i class="fa-brands fa-youtube"></i></a>
            </li>
        </ul>
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;


.container {
    background-color: $countsColor;
    margin-top: 2rem;
    @include noFlex(center, center, center)
}

.container img {
    padding: 2rem;
    margin-bottom: 3rem;
}


.container-fluid {
    padding-top: 1rem;
    background-color: $linkColor;
    opacity: 0.8;
    @include noFlex(center, center, center)
}

i {
    font-size: 30px;
    margin-top: 1rem;
}

.text {
    margin-top: 4rem;
}

.nav-link,
span {
    color: $newThemeColor;
}
</style>