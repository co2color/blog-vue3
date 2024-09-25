<script lang="ts" setup>
import ToggleTheme from '@/components/ToggleTheme/ToggleTheme.vue'
import { type Component, type Ref, shallowRef } from 'vue'

interface ICommand {
  label: string
  type: 'iconify' | 'text' | 'component'
  icon?: string
  href?: string
  target?: string
  component?: Component
  commandCallBack?: (item: ICommand) => void
}

const commandList: Ref<ICommand[]> = shallowRef([
  {
    label: '',
    type: 'iconify',
    icon: 'i-uil-github-alt',
    href: 'https://github.com/co2color',
    target: '_blank',
  },
  {
    label: '',
    type: 'component',
    component: ToggleTheme,
  },
])
</script>

<template>
  <header class="flex justify-between h-15 items-center">
    <a class="cursor-pointer  decoration-none text-coolgray dark:text-coolgray-2" href="/">cococolor</a>
    <nav class="grid gap-3 grid-auto-flow-col">
      <a
        v-for="item in commandList" :key="item.label"
        class="flex items-center justify-center  leading-none inline-block decoration-none text-coolgray-7 dark:text-coolgray-2 transition-all opacity-50 hover:opacity-100 cursor-pointer"
        :href="item?.href" :target="item?.target" @click="item.commandCallBack && item.commandCallBack(item)"
      >
        <i v-if="item.type === 'iconify'" :class="`text-xl transition-all ${item.icon}`" />
        <component :is="item.component" v-else-if="item.component" />
        <div v-else class="text-inherit">{{ item.label }}</div>
      </a>
    </nav>
  </header>
</template>
