<template>
    <div id="header">
        <h1>\{{ title }}</h1>
        <h2>\{{ subTitle }}</h2>
    </div>
</template>

<script>
export default {
    props : {
        title:      {type:  String, default: "The title" },
        subTitle:   {type:  String, default: "The sub title" }
    }
}
</script>