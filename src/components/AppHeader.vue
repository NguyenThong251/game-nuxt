<template>
  <header class="header">
    <div class="header01">
      <div class="inner">
        <!-- <HeaderLanguageSelector :lang="lang" :langObject="langObject" :langList="langList"
          @change-lang="handleChangeLang" /> -->
        <HeaderLogoDesktop :systemConfig="systemConfig" />
        <AuthLoginDesktop />
      </div>
    </div>
    <div class="header02 pc">
      <div class="inner">
        <!-- <HeaderLogoDesktop :systemConfig="systemConfig" /> -->
        <!-- <MenuDesktop :categories="categories" /> -->
      </div>
    </div>
    <div class="header03 sp">
      <div class="inner">
        <!-- <HeaderLogoMobile :systemConfig="systemConfig" />
        <AuthLoginLinkMobile /> -->
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import type { TSystemConfig } from '~/features/config/config.type';
import type { LANG } from '~/types/common';
import type { TCategoryGame, TGame } from '~/types/game';

defineProps<{
  categories: Array<{
    title: string,
    href: string,
    gameType: number,
    data: Array<TGame | TCategoryGame>
  }>,
  lang: LANG,
  langObject: { [key: string]: string }
  langList: Array<{ lang: LANG, title: string }>
  systemConfig: TSystemConfig
}>()

const emit = defineEmits<{
  (e: 'changeLang', lang: LANG): void
}>()

// Method
const handleChangeLang = (lang: LANG) => {
  emit('changeLang', lang)
}
</script>