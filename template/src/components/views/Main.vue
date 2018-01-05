<template>
    <div id="app">

        <header-element
            v-bind:title="msg"
            subTitle="some sub title"
        />

        <h3>Pages</h3>
        <ul>
            <li><router-link to="/" >Home</router-link></li>
            <li><router-link to="/page1" >Page 1</router-link></li>
            <li><router-link to="/about" >About</router-link></li>

        </ul>


        <router-view></router-view>
        



        <footer-element />

    </div>
</template>

<script>

import HeaderComponent      from "@/components/common/header.vue";
import FooterComponent      from "@/components/common/footer.vue";


export default {
  name: 'app',
    components: {
        headerElement:  HeaderComponent,
        footerElement:  FooterComponent
    },
    data : () => { return {msg: 'Welcome to Your Vue.js App'} }
}
</script>

<style {{#less}}lang="less"{{/less}}>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
