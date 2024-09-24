<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { RouterLink } from 'vue-router'

interface ICommand {
  label: string
  type: 'iconfont' | 'text'
  iconfont?: string
  href?: string
  target?: string
  commandCallBack?: (item: ICommand) => void
}

const isDark = ref(false)

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
    iconfont: 'icon-sun',
    commandCallBack: changeTheme,
  },
])

function changeTheme(item: ICommand) {
  item.iconfont = isDark.value ? 'icon-sun' : 'icon-moon'
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <header class="flex justify-between h-15 items-center">
    <a class="cursor-pointer text-sm decoration-none text-coolgray-7 dark:text-coolgray-2" href="/">cococolor</a>
    <nav class="grid gap-3 grid-auto-flow-col">
      <a
        v-for="item in commandList" :key="item.label"
        class="inline-block decoration-none text-coolgray-7 dark:text-coolgray-2 transition-all opacity-60 hover:opacity-100 cursor-pointer"
        :href="item?.href" :target="item?.target" @click="item.commandCallBack && item.commandCallBack(item)"
      >
        <i v-if="item.iconfont" :class="`transition-all text-sm iconfont ${item.iconfont}`" />
        <div v-else class="text-inherit">{{ item.label }}</div>
      </a>
    </nav>
  </header>
</template>
