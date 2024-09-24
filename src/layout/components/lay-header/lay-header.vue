<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { ref, type Ref } from 'vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

interface ICommand {
  label: string
  type: 'iconfont' | 'text'
  iconfont?: string
  href?: string
  target?: string
  commandCallBack?: (item: ICommand) => void
}

const commandList: Ref<ICommand[]> = ref([
  {
    label: '',
    type: 'iconfont',
    iconfont: 'icon-GitHub',
    href: 'https://github.com/co2color',
    target: '_blank',
  },
  {
    label: 'dark',
    type: 'iconfont',
    iconfont: isDark.value ? 'icon-moon' : 'icon-sun',
    commandCallBack: changeTheme,
  },
])

function changeTheme(item: ICommand) {
  item.iconfont = isDark.value ? 'icon-sun' : 'icon-moon'
  toggleDark()
}
</script>

<template>
  <header class="flex justify-between h-15 items-center">
    <a class="cursor-pointer text-lg decoration-none text-coolgray dark:text-coolgray-2" href="/">cococolor</a>
    <nav class="grid gap-3 grid-auto-flow-col">
      <a
        v-for="item in commandList" :key="item.label"
        class="inline-block decoration-none text-coolgray-7 dark:text-coolgray-2 transition-all opacity-60 hover:opacity-100 cursor-pointer"
        :href="item?.href" :target="item?.target" @click="item.commandCallBack && item.commandCallBack(item)"
      >
        <i v-if="item.iconfont" :class="`transition-all text-lg iconfont ${item.iconfont}`" />
        <div v-else class="text-inherit">{{ item.label }}</div>
      </a>
    </nav>
  </header>
</template>
