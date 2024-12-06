<script lang="ts" setup>
import type { Component } from 'vue'
import ToggleTheme from '@/components/ToggleTheme/ToggleTheme.vue'

interface ICommand {
  type: 'iconify' | 'component'
  icon?: string
  href?: string
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
  <header px-2 flex justify-between pt-4 items-center sticky top-0 style="background-color: var(--c-bg)">
    <a cursor-pointer text-lg href="/">cococolor</a>
    <nav grid gap-3 grid-auto-flow-col>
      <a
        v-for="item, index in commandList" :key="index"
        flex items-center justify-center leading-none inline-block decoration-none transition-all op60 hover:op100 cursor-pointer
        :href="item?.href" target="_blank"
      >
        <i v-if="item.type === 'iconify'" text-xl transition-all :class="`${item.icon}`" />
        <component :is="item.component" v-else-if="item.component" />
      </a>
    </nav>
  </header>
</template>
