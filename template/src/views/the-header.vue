<template>
    <div>
        <h1>Header</h1>
        <ul>
            <li><router-link v-bind:to="{ name: 'home' }" >Home</router-link></li>
            <li><router-link v-bind:to="{ name: 'about' }" >About</router-link></li>
            <li><router-link v-bind:to="{ name: 'demo-home' }" >demo</router-link></li>
            <li><router-link v-bind:to="{ name: 'demo-page-1' }" >demo 1</router-link></li>
            <li><router-link v-bind:to="{ name: 'demo-page-2' }" >demo 2</router-link></li>
        </ul>
        <hr />
    </div>
</template>

<script>
    export default {}
</script>