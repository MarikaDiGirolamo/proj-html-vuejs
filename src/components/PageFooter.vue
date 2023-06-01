<script>
import BtnFooter from './BtnFooter.vue';
import LinkFooter from './LinkFooter.vue';

export default {
    name: 'PageFooter',
    components: {
        BtnFooter,
        LinkFooter
    },
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
    <!-- Creare due sottocomponenti per il PageFooter -->
    <!-- Big One => Call-to-Action-Donate (Change a Life Today) -->
    <BtnFooter />
    <!-- Lil'  =>Footer => Avada-Logo + Avada-Links -->
</template>

<style scoped lang="scss">
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;
</style>