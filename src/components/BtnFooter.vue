<script>
import LinkFooter from './LinkFooter.vue';
import { store } from '../data/store';
export default {
    name: "BtnFooter",
    components: {
        LinkFooter
    },
    data() {
        return {
            store
        }
    },
    methods: {

    },
    mounted() {

    }

}
</script>


<template>
    <footer>
        <div class="container-fluid">
            <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                <div class="container py-5">
                    <div class="footer-text">
                        <h2 class="display-5">CHANGE A LIFE TODAY</h2>
                        <p>As long as poverty, injustice & inequality persist, none of us can truly rest. It doesn't take
                            much to change a life. Get in touche today anda start making the difference</p>
                    </div>
                    <div class="footer-btn">
                        <button class="btn btn-lg" type="button" v-for="f_btn in store.footer_btns" :key="f_btn">{{ f_btn
                        }}</button>
                        <!-- <button class="btn" type="button">Volunteer</button>
                                            <button class="btn" type="button">Donate Now</button> -->
                    </div>
                </div>
            </div>
        </div>

        <LinkFooter />
    </footer>
</template>


<style scoped lang="scss">
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

footer {
    margin-top: 5rem;
    padding-top: 5rem;
}

.container-fluid {
    width: 100%;
    height: 100%;
    background: url(../assets/JumboTron.jpeg) no-repeat center top;
    @include noFlex(center, center, center)
}

.container {
    max-width: 800px;

    h2,
    p {
        color: $supportColor;
        padding: 1rem;
    }

    p {
        font-size: 1.3rem;
        font-weight: lighter;
    }

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
        width: 30%;
        border-radius: 4px;
        margin: 2rem 0;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
        -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
    }


    .btn {
        width: 200px;
        font-size: 1.5rem;
        background: transparent;
        color: $newThemeColor;
        border: 1px solid $newThemeColor;
        border-radius: 20px;
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
}
</style>
