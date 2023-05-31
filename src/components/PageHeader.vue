<script>
import JumboSearch from './JumboSearch.vue';
export default{
    name: "PageHeader",
    components:{
        JumboSearch
    },
    data() {
        return {};
    },
    methods: {

    },
    mounted() {
    },
}

</script>

<template>
    <!-- Creare un  sottocomponente per la navbar e jumbotron da importare dentro l'header -->
    <JumboSearch />
</template>

<style scoped lang="scss">
</style>