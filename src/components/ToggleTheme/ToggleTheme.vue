<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div text-xl i-ri-sun-line dark:i-ri-moon-line @click="toggleDark()" />
</template>
