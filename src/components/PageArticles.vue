<script>

import { store } from '../data/store';

export default {
    name: "PageArticles",
    data() {
        return {
            store
        };
    },
    methods: {},
    mounted() { },
};
</script>

<template>
    <div class="container-fluid">
        <div class="container">
            <div class="article-title">
                <h2>LATEST ARTICLES</h2>
                <p class="sub-title">Together we all make the difference</p>

                <div class="row">
                    <div class="col-6">
                        <div class="card card-top">
                            <img src="../assets/IMG_1.jpeg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Understand Community Complexity</h5>
                                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut
                                    itaque quos magni eligendi.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../assets/IMG_2.jpeg" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">The Human Sotry of Uniqueness</h5>
                                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut
                                        itaque quos magni eligendi.</p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <img src="../assets/IMG_3.jpeg" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Sustainable Trade Tattics</h5>
                                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut
                                        itaque quos magni eligendi.</p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <img src="../assets/IMG_4.jpeg" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Farmers Making a Difference</h5>
                                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut
                                        itaque quos magni eligendi.</p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <img src="../assets/IMG_5.jpeg" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Meeting Remote Tribes in Perù</h5>
                                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut
                                        itaque quos magni eligendi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="link">
                <h2>VIEW ALL OUR ARTICLES</h2>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

.article-title {
    padding: 5rem 0;
    color: $textColor;

    .sub-title {
        padding: 3rem 0;
    }

    @include noFlex(center, center, center)
}

p {
    color: $paragraphColor;
}

.card {
    border: none;

    h5 {
        color: $newThemeColor;
    }

    p {
        color: $paragraphColor;
    }

    @include flex(center, center, center)
}

.card-top {
    border: 1px solid $textColor;

    .card-text {
        padding: 0.5rem;
    }
}

.card-side {
    padding: 1rem;
    @include flex(center, center, center)
}

.link {
    background-color: $dataColor;
    color: $supportColor;
    padding: 0.5rem;
    margin: 0;
    @include flex(center, center, center)
}
</style>