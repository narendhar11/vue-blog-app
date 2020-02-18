<template>
  <div id="app">
    <Navbar/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name : 'app',
  components:{
    Navbar
  }
}
</script>
<style>
*{
   font-family: 'Poppins', sans-serif;
   border-radius: 0px !important
}
body{
  background-color: #f5f3ef;
}
</style>