<template>
    <div>
        <the-header />
        <router-view></router-view>
        <the-footer />
    </div>
</template>

<script>

    import Header from "./the-header.vue";
    import Footer from "./the-footer.vue";

    export default {
            components : {
                theHeader : Header,
                theFooter : Footer,
            }
    }
</script>