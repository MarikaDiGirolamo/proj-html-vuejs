<script>
import { store } from '../data/store';
export default {
    name: "CallToAction",
    data() {
        return {
            store,
        };
    },
    methods: {},
    mounted() { },
};
</script>

<template>
    <div class="container-fluid call-container">
        <div class="call-title p-3 m-5">
            <h2>OUR VALUES</h2>
            <p class="pt-3">Think Big. Act Bigger</p>
        </div>

        <div class="call-icon">
            <div class="container">
                <div class="row">
                    <article class="col-3 call-text" v-for="item in store.articleArr" :key="item">
                        <div class="icon" :style="{ color: item.color }">
                            <img :src="`src/assets/svg-icon/${item.image}`">
                        </div>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                        <button class="btn btn-lg" type="button" v-for="btn in store.btns" :key="btn">{{ btn
                        }}</button>
                    </article>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid recent-causes">
        <div class="recent-title">
            <h2>RECENT CAUSES</h2>
            <p>We run Projects in over 30 countries in 5 continents</p>
        </div>
        <div class="container card-container" id="causes-articles">
            <div class="row call-card">
                <div class="col-3" v-for="card in store.cards" :key="card">
                    <div class="card">
                        <img :src="`src/assets/${card.image}`" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid links">
        <a href="#causes-articles">VIEW ALL OUR CAUSES</a>
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

.call-container {
    padding: 2rem;
    width: 100%;
    height: 100%;
    background: url(../assets/JumboTron.jpeg) no-repeat center top;

    padding-bottom: 4rem;

    .call-title {
        // width: 400px;
        color: white;
        padding: 2rem;

        @include noFlex(center, center, center);

        h2 {
            font-size: 2.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        h2:after {
            content: ' ';
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

    }

    img {
        width: 4rem;
        height: 4rem;
        margin-bottom: 2rem;
        fill: $newThemeColor !important;
        stroke: $newThemeColor !important;
    }
}


.call-text i,
h3,
p {
    padding-bottom: 1.5rem;
}

.btn {
    background: transparent;
    color: $newThemeColor;
    border: 1px solid $newThemeColor;
    margin: 3rem;
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

.call-icon {
    @include flex(center, center, center)
}

.call-icon h3,
p {
    color: white;

}



.recent-causes {
    padding: 3rem;

    .recent-title {
        margin: 2rem;

        h2 {
            font-size: 2.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        h2:after {
            content: ' ';
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

        p {
            color: $paragraphColor;
            text-align: center;
        }

    }
}

.card-container {
    margin-bottom: 2rem;
}

.links {
    background-color: $dataColor;
    color: white;
    padding: 1.5rem;
    @include flex(center, center, center);

    a {
        font-size: 1.5rem;
        text-decoration: none;
        color: $supportColor;

        &:hover {
            transform: scale(1.2);
            transition: 0.3s;
        }
    }

}
</style>