<script lang="ts" setup>
import layContent from './components/lay-content/lay-content.vue'
import layFooter from './components/lay-footer/lay-footer.vue'
import layHeader from './components/lay-header/lay-header.vue'
</script>

<template>
  <div
    class="w-320 m-auto"
  >
    <layHeader />
    <layContent />
    <layFooter />
  </div>
</template>
