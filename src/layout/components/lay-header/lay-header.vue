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
  <header class="flex justify-between">
    <span>cococolor</span>
    <nav>
      <a v-for="item in commandList" :key="item.label" class="inline-block" :href="item?.href" :target="item.href && '_blank'">
        <div v-if="item.iconfont">icon</div>
        <div v-else>{{ item.label }}</div>
      </a>
    </nav>
  </header>
</template>
