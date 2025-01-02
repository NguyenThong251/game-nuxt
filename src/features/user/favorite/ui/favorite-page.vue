<template>
    <div v-if="$vuetify.display.width > 1024" class="pc">
      <FavoriteList :favoriteList="favoriteList" />
    </div>
    <DialogMobile v-else :visible="true" back-to-path="/user" title="Bộ Sưu Tập">
      <div class="p-4">
        <FavoriteList :favoriteList="favoriteList" />
      </div>
    </DialogMobile>
  </template>
  <script setup lang="ts">
    import { useCasinoStore } from '~/store/casino';
    import { useFishingStore } from '~/store/fishing';
    import { useSlotStore } from '~/store/slot';
    import { useSportStore } from '~/store/sport';
    import FavoriteList from './favorite-list.vue';
    import { useFavorite } from '../favorite.model';
  
    const slotStore = useSlotStore()
    const sportStore = useSportStore()
    const casinoStore = useCasinoStore()
    const fishingStore = useFishingStore()
  
    slotStore.fetchFavoriteList({ game_type: '1' })
    sportStore.fetchFavoriteList({ game_type: '3' })
    casinoStore.fetchFavoriteList({ game_type: '2' })
    fishingStore.fetchFavoriteList({ game_type: '8' })
  
    const { favoriteList } = useFavorite()
  </script>