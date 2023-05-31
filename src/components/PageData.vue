<script>
export default {
    name: "PageData",
    data() {
        return {

        };
    },
    methods: {},
    mounted() { },
};
</script>

<template>
    <main>
        <div class="container">
            <div class="row data">
                <div class="col-8 ">
                    <h2 class="data-title">EVERY MOMENT COUNTS</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem aperiam fugiat mollitia, deleniti
                        autem exercitationem facilis, sunt minima amet itaque aliquam in velit perspiciatis magnam quam
                        dolor voluptatibus doloribus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quas nostrum sit culpa velit minus
                        saepe amet neque distinctio laborum, exercitationem eveniet voluptates nihil molestias architecto
                        veritatis dolor necessitatibus ea!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt fugit corrupti sed enim
                        accusantium at itaque accusamus inventore excepturi voluptate placeat ratione vel, rerum, ipsum
                        incidunt omnis impedit voluptas.</p>

                    <button class="btn btn-primary btn-lg" type="button">Our Mission</button>
                </div>
                <div class="col-4 icon-data">
                    <ul class="icon-list">
                        <li><i class="fa-regular fa-heart" style="color: #f0f2f4;"></i>2032</li>
                        <p class="icon-text">Volunteers WorldWide</p>
                        <li><i class="fa-regular fa-earth-americas" style="color: #ffffff;"></i>132</li>
                        <p class="icon-text">Active Projects</p>
                        <li><i class="fa-solid fa-dollar-sign" style="color: #ffffff;"></i>3.8M</li>
                        <p class="icon-text">Donated</p>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>


<style scoped lang="scss">
// @use '../styles/generic.scss' as *;
@use '../styles/partials/mixins' as *;

.data {
    padding: 1.5rem;
}

.data-title {
    border-bottom: 3px solid gold;
}

.icon-data {
    background-color: crimson;
    border: 1px dashed black;
    @include flex(center, center, center)
}

.icon-data li {
    list-style: none;
    font-size: 2rem;
}

.icon-list {
    padding: 2rem;
    margin: 0;
    flex-direction: column;
    @include flex(center, center, center)
}
</style>