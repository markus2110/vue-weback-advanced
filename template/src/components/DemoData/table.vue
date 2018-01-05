<template>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Done</th>
            </tr>
        </thead>

        <tbody  v-if="demoRecords.length > 0">
            <tr class="record" v-bind:class="{ done: record.done }" v-for="record in demoRecords">
                <td>\{{ record.id }}</td>
                <td>\{{ record.name }}</td>
                <td><input type="checkbox" v-bind:checked="record.done ? 'checked' : ''" v-on:change="toggleDone(record)" /></td>
            </tr>
        </tbody>

        <tbody  v-else>
            <tr>
                <td colspan="3">Loading Data ...</td>
            </tr>
        </tbody>


        <tfoot>
            <tr>
                <td><span>Open: \{{ notDoneRecords }}</span></td>
                <td></td>
                <td><span>Done: \{{ doneRecords }}</span></td>
            </tr>

            <tr>
                <td colspan="3" class="precentage">

                    <progress-bar v-bind:current="doneRecords" v-bind:total="demoRecords.length" v-show="demoRecords.length > 0" />
                    

                </td>
            </tr>
        </tfoot>
    </table>
</template>

<script>

import ProgressBar    from "@/components/common/progress-bar.vue";

export default {

    created: function () {
        if(!this.$store.state.demo.data.length){
            this.$store.dispatch('demo/fetchData');
        }else{
            console.info("data already fetched");
        }
    },

    components: {
        ProgressBar: ProgressBar
    },
    computed: {
        demoRecords : function(){
            return this.$store.getters["demo/allData"];
        },

        doneRecords : function(){
            return this.$store.getters["demo/countDone"];
        },
        notDoneRecords : function(){
            return this.$store.getters["demo/countNotDone"];
        },
    },

    methods : {
        toggleDone : function(record){
            this.$store.commit("demo/TOGGLE_DONE", record);
        }
    }
}
</script>

<style {{#less}}lang="less"{{/less}}>
table{
    border:solid 1px;
    border-spacing: 0px;
    border-collapse: collapse;
    width:100%;
}

table td{
    border:solid 1px;
}

table tr.done{
    background:#42b983;
}
</style>
