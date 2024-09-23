<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const commandList = ref([
  {
    label: 'Blog',
    type: 'text',
    iconfont: '',
    href: '/',
  },
  {
    label: 'Github',
    type: 'text',
    iconfont: '',
    href: 'https://github.com/co2color',
  },
  {
    label: 'dark',
    type: 'text',
    iconfont: '',
  },
])
</script>

<template>
  <header class="flex justify-between h-15 items-center text-coolgray">
    <span>cococolor</span>
    <nav class="grid gap-5 grid-auto-flow-col">
      <a
        v-for="item in commandList" :key="item.label" class="inline-block decoration-none text-coolgray transition-all
        opacity-60 hover:opacity-100 cursor-pointer" :href="item?.href" :target="item.href && '_blank'"
      >
        <div v-if="item.iconfont">icon</div>
        <div v-else class="text-inherit">{{ item.label }}</div>
      </a>
    </nav>
  </header>
</template>
