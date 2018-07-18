<template>
  <div id="app">
    <the-header/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700,800&amp;subset=thai');
@import url('https://fonts.googleapis.com/css?family=Kanit:400,700&amp;subset=thai');
@import ('./assets/fonts.css');
:root {
  --background-body: #ebece7, white;
}
html, body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #a3bbff;
  overflow-y: auto;
  background: linear-gradient(var(--background-body));
  font-family: 'Proxima Nova Light', 'Kanit', Sans-Serif;
}
</style>
