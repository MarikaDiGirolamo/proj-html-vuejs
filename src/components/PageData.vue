<script>
import { store } from '../data/store';
export default {
    name: "PageData",
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
    <main>
        <div class="container-fluid">
            <div class="row data">
                <div class="col-8 text-data">
                    <div class="title">
                        <h2 class="data-title">EVERY MOMENT COUNTS</h2>
                    </div>
                    <p v-for="data in store.p_datas" :key="data">{{ data }}</p>

                    <button class="btn" type="button">Our Mission</button>
                </div>
                <div class="col-4 icon-data">
                    <ul class="icon-list">
                        <!-- <li v-for="icon in store.icon_lists" :key="icon.id">{{ icon.id }}</li> -->
                        <li><i class="fa-regular fa-heart" style="color: #f0f2f4;"></i> 2032</li>
                        <p class="icon-text">Volunteers WorldWide</p>
                        <li><i class="fa-regular fa-earth-americas"></i> 132</li>
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

h2 {
    font-size: 2.5rem;
}

h2:after {
    content: ' ';
    display: block;
    border: 1px solid $newThemeColor;
    width: 20%;
    border-radius: 4px;
    margin: 2rem 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}

.btn {
    color: $newThemeColor;
    border: 1px solid #A7BED3;
    padding: 1rem;
    background: transparent;


    &:hover {
        background: transparent;
        color: $newThemeColor;
        outline-color: $newThemeColor;
    }

    &:active {
        background-color: transparent;
        color: $newThemeColor;
        box-shadow: 3px 6px 8px 1px rgba(167, 190, 217, 0.76);
        transform: translateY(4px);
    }

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