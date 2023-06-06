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
                        <li><i class="fa-regular fa-heart"></i><span> 2032</span>
                            <p class="icon-text">Volunteers WorldWide</p>
                        </li>
                        <li><i class="fa-solid fa-earth-americas"></i><span> 132</span>
                            <p class="icon-text">Active Projects</p>
                        </li>
                        <li><i class="fa-solid fa-dollar-sign"></i><span> 3.8M</span>
                            <p class="icon-text">Donated</p>
                        </li>
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
    background: transparent;
    color: $newThemeColor;
    border: 1px solid $newThemeColor;
    border-radius: 15px;
    margin-top: 1.5rem;
    width: 200px;
    font-size: 1.5rem;
    background: transparent;


    &:hover {
        background-color: $newThemeColor;
        color: $linkColor;
        outline-color: $newThemeColor;
        transform: scale(1.2);
        transition: 0.3s;
    }

    &:active {
        background-color: transparent;
        color: $newThemeColor;
        box-shadow: 3px 6px 8px 1px rgba(167, 190, 217, 0.76);
        transform: translateY(4px);
    }

}

.icon-data {
    background: url(../assets/planisfero_bn.jpg) center;
    background-color: $dataColor;
    padding: 2rem;
    @include flex(center, center, center)
}

.icon-data li,
i {
    list-style: none;
    font-size: 2rem;
    color: $textColor;
    line-height: 4rem;

}

.icon-list {
    padding: 2rem;
    margin: 0;
    flex-direction: column;

    .icon-text {
        color: $textColor;
        font-size: 1.5rem;
    }
}
</style>