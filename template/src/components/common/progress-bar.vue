<template>
    <div class="progressbar" v-bind:style="{ width: precentage +'%' }">\{{ precentage }}%</div>
</template>

<script>
export default {
    props : {
        current:    {type:  Number, default: 0 },
        total:      {type:  Number, default: 0 }
    },

    computed: {
        precentage : function(){
            var precent = Math.ceil( (this.current / this.total)*100 );
            return (precent === 0) ? 70 : precent;
        },
    },
}
</script>

<style {{#less}}lang="less"{{/less}}>
.progressbar{
    font-size: 9px;
    background-color: orange;
}
</style>