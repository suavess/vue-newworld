<template>
  <div>
    <header-layout />
    <router-view class="app-main" />
    <footer-layout />
  </div>
</template>

<script>
import HeaderLayout from '@/components/layout/Header'
import FooterLayout from '@/components/layout/Footer'

export default {
  name: 'App',
  components: {
    HeaderLayout,
    FooterLayout
  }
}
</script>

<style>
@import "./assets/css/main.css";
</style>
