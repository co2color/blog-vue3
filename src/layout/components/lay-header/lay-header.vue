<script lang="ts" setup>
import type { Component } from 'vue'
import ToggleTheme from '@/components/ToggleTheme/ToggleTheme.vue'

interface ICommand {
  type: 'iconify' | 'component'
  icon?: string
  href?: string
  target?: string
  component?: Component
}

const commandList: ICommand[] = ([
  {
    type: 'iconify',
    icon: 'i-uil-github-alt',
    href: 'https://github.com/co2color',
  },
  {
    type: 'component',
    component: ToggleTheme,
  },
])
</script>

<template>
  <header class="flex justify-between h-15 items-center">
    <a class="cursor-pointer" href="/">cococolor</a>
    <nav class="grid gap-3 grid-auto-flow-col">
      <a
        v-for="item, index in commandList" :key="index"
        class="flex items-center justify-center leading-none inline-block decoration-none  transition-all op60 hover:op100 cursor-pointer"
        :href="item?.href" target="_blank"
      >
        <i v-if="item.type === 'iconify'" :class="`text-xl transition-all ${item.icon}`" />
        <component :is="item.component" v-else-if="item.component" />
      </a>
    </nav>
  </header>
</template>
