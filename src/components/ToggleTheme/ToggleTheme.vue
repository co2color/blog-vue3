<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div i-ri-moon-line dark:i-ri-moon-line @click="toggleDark" />
</template>
