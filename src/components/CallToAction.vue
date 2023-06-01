<script>
import { store } from '../data/store';
export default {
    name: "CallToAction",
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
    <div class="container-fluid call-container">
        <div class="call-title">
            <h2>OUR VALUES</h2>
            <p>Think Big. Act Bigger</p>
        </div>

        <div class="call-icon">
            <div class="container">
                <div class="row">
                    <div class="col-3 call-text">
                        <i class="fa-solid fa-droplet"></i>
                        <h3>clean water</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod nemo recusandae
                            voluptatibus alias id autem ut aspernatur natus iusto explicabo nam obcaecati, veniam sunt est
                            voluptate harum? Sequi, suscipit.</p>
                        <button class="btn" type="button">Learn More</button>
                    </div>
                    <div class="col-3 call-text">
                        <i class="fa-solid fa-stethoscope"></i>
                        <h3>clean water</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod nemo recusandae
                            voluptatibus alias id autem ut aspernatur natus iusto explicabo nam obcaecati, veniam sunt est
                            voluptate harum? Sequi, suscipit.</p>
                        <button class="btn" type="button">Learn More</button>
                    </div>
                    <div class="col-3 call-text">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <h3>clean water</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod nemo recusandae
                            voluptatibus alias id autem ut aspernatur natus iusto explicabo nam obcaecati, veniam sunt est
                            voluptate harum? Sequi, suscipit.</p>
                        <button class="btn" type="button">Learn More</button>
                    </div>
                    <div class="col-3 call-text">
                        <i class="fa-solid fa-droplet"></i>
                        <h3>clean water</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod nemo recusandae
                            voluptatibus alias id autem ut aspernatur natus iusto explicabo nam obcaecati, veniam sunt est
                            voluptate harum? Sequi, suscipit.</p>
                        <button class="btn" type="button">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid recent-causes">
        <div class="recent-title">
            <h2 class="border-bottom">RECENT CAUSES</h2>
            <p>We run Projects in over 30 countries in 5 continents</p>
        </div>
        <div class="container card-container">
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
        <h2 class="link">VIEW ALL OUR CAUSES</h2>
    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

.call-container {
    padding: 2rem;
    // margin-bottom: 2rem;
    width: 100%;
    height: 100%;
    background: url(../assets/JumboTron.jpeg) no-repeat center top;

    padding-bottom: 4rem;

    .call-title {
        color: white;
        padding: 2rem;

        @include noFlex(center, center, center)
    }

    h2 {
        border-bottom: 2px solid $newThemeColor;

    }

    .call-text i,
    h3,
    p {
        padding-bottom: 1.5rem;
    }

    .btn {
        color: $newThemeColor;
        border: 1px solid #A7BED3;
        margin: 3rem;
        background: transparent;
    }

    .call-icon {
        @include flex(center, center, center)
    }

    .call-icon h3,
    p {
        color: white;
    }

    .fa-solid {
        color: $newThemeColor;
        font-size: 50px;
    }

}

.recent-causes {
    background-color: $supportColor;
    padding: 5rem;

    .recent-title {
        margin: 2rem;

        p {
            color: $paragraphColor;
        }

        @include noFlex(center, center, center)
    }
}

.card-container {
    margin-bottom: 2rem;
}

.links {
    background-color: $dataColor;
    color: white;
    padding: 1.5rem;
    @include flex(center, center, center)
}
</style>