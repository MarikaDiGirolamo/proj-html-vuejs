<script>
import PageData from './PageData.vue';
import CallToAction from './CallToAction.vue';
import PageArticles from './PageArticles.vue';
export default {
    name: 'PageMain',
    components: {
        PageData,
        CallToAction,
        PageArticles,
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
    <main>
        <!-- Creare 3 sottocomponenti in cui dividere il main -->
        <!-- Page Datas (Every Moment Counts) -->
        <PageData />
        <!-- Page Call-to-Action (Our Values) -->
        <CallToAction />
        <!-- Page Articles (Recent Causes + Latest Articles) -->
        <PageArticles />
    </main>
</template>

<style scoped lang="scss"></style>