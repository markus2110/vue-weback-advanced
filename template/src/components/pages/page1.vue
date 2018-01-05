<template>
    <div id="page1">
        <h3>Demo Store Data</h3>
        <demo-data />
    </div>
</template>

<script>
    import DemoDataComponent    from "@/components/DemoData/table.vue";
    export default {
        components: {
            demoData:       DemoDataComponent
        }
    }
</script>