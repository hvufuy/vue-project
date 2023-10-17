<script setup>
import { RouterView } from 'vue-router'
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
</script>

<template>
  <div class="d-flex flex-column">
    <MyHeader />
    <RouterView />
    <MyFooter />
  </div>
</template>

<style scoped></style>
