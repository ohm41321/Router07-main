<script setup>
import { RouterView } from 'vue-router';
import HeaderNav from '@/views/HeaderNav.vue'
import FooterCoff from '@/views/FooterCoff.vue'
</script>

<template>
<HeaderNav/>
<div class="container">
<RouterView/>
</div>

<FooterCoff/>
</template>

<style scoped>

</style>
