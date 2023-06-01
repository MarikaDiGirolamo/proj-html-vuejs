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
        <div class="container-fluid">
            <div class="row data">
                <div class="col-8 text-data">
                    <div class="title">
                        <h2 class="data-title border-bottom">EVERY MOMENT COUNTS</h2>
                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem aperiam fugiat mollitia,
                        deleniti
                        autem exercitationem facilis, sunt minima amet itaque aliquam in velit perspiciatis magnam quam
                        dolor voluptatibus doloribus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quas nostrum sit culpa velit
                        minus
                        saepe amet neque distinctio laborum, exercitationem eveniet voluptates nihil molestias
                        architecto
                        veritatis dolor necessitatibus ea!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt fugit corrupti sed enim
                        accusantium at itaque accusamus inventore excepturi voluptate placeat ratione vel, rerum, ipsum
                        incidunt omnis impedit voluptas.</p>

                    <button class="btn" type="button">Our Mission</button>
                </div>
                <div class="col-4 icon-data">
                    <ul class="icon-list">
                        <li><i class="fa-regular fa-heart" style="color: #f0f2f4;"></i> 2032</li>
                        <p class="icon-text">Volunteers WorldWide</p>
                        <li><i class="fa-regular fa-earth-americas" style="color: #ffffff;"></i> 132</li>
                        <p class="icon-text">Active Projects</p>
                        <li><i class="fa-solid fa-dollar-sign" style="color: #ffffff;"></i> 3.8M</li>
                        <p class="icon-text">Donated</p>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>


<style scoped lang="scss">
// @use '../styles/generic.scss' as *;
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

.text-data {
    padding: 4rem;

    p {
        padding: 1.25rem 0;
    }
}

.title {
    width: 400px;
    size: 3px;
    border-bottom: 2px solid $newThemeColor;
}

.btn {
    color: $newThemeColor;
    border: 1px solid #A7BED3;
    background: transparent;
    // &:hover {
    //     color: $supportColor;
    // }
}

.icon-data {
    background: url(../assets/Planisfero\ 2.jpg);
    background-color: $dataColor;
    padding: 2rem;
    border: 1px dashed $textColor;
    @include flex(center, center, center)
}

.icon-data li {
    list-style: none;
    font-size: 2rem;
    color: $supportColor;
}

.icon-list {
    padding: 2rem;
    margin: 0;
    flex-direction: column;

    .icon-text {
        color: $supportColor;
    }
}
</style>