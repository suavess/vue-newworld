<template>
  <div>
    <header-layout/>
    <router-view></router-view>
    <footer-layout/>
  </div>
</template>

<script>
import HeaderLayout from '@/components/layout/Header'
import FooterLayout from '@/components/layout/Footer'

export default {
  name: 'app',
  components: {
    HeaderLayout,
    FooterLayout
  }
}
</script>

<style>
@import './assets/css/main.css';
</style>
