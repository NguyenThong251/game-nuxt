<template>
  <div class="left">
    <div class="dropdown-lang">
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-avatar start v-bind="props" size="small">
            <v-img v-if="lang === 'vi'" src="/image/flags/vi.png"></v-img>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item v-for="lang in langList" :key="lang.lang" :value="lang.lang"
            @click="() => handleChangeLang(lang.lang)">
            <template #prepend>
              <img class="w-[30px] mr-2" src="/image/flags/vi.png"></img>
            </template>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
  import type { LANG } from '~/types/common';

  defineProps<{
    lang: LANG,
    langObject: { [key: string]: string },
    langList: Array<{ lang: LANG, title: string }>
  }>()

  const emit = defineEmits<{
    (e: 'changeLang', lang: LANG): void
  }>()

  // Method
  const handleChangeLang = (lang: LANG) => {
    emit('changeLang', lang)
  }
</script>
