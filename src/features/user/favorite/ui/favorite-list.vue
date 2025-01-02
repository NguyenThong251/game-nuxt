<template>
    <div v-for="(favorite, index) in favoriteList" :key="index" class="gameTab-acc">
      <input type="checkbox" :id="`type${index}`" :checked="state.activeIndex === index"
        @change="toggleActiveIndex(index)">
      <label :for="`type${index}`" class="gameTab-label">
        <div class="gametile flex justify-between items-center">
          <div class="flex items-center">
            <img :src="favorite.icon">
            <span>{{ favorite.title }}</span>
          </div>
          <div class="flex">
            <img src="/image/user/xin.2d8e8d44.svg">
            <div class="ml-2 mr-4">{{ favorite.list.length }}</div>
            <img src="/image/user/you.8877ce1e.svg" class="you arrow">
          </div>
        </div>
      </label>
      <div class="gameBox gameBox-wrapper gameTab-content" v-show="state.activeIndex === index">
        <div class="game-list-wrap slot-list">
          <div v-for="game in favorite.list" :key="game.id" class="list game-list-item" @click="$vuetify.display.width < 1024 ? handleClickGame({
            id: game.id,
            game_type: game.game_type,
            ...(game?.game_code ? { game_code: game.game_code } : {}),
            api_name: game.api_name,
          }) : null">
            <div class="gameNaviCover-item">
              <p class="gameNaviCover-image">
                <img :src="game?.img_url || game?.web_pic">
              </p>
              <div class="gameNaviCover-item-box">
                <a class="open-game button-click" @click="() => handleClickGame({
                  id: game.id,
                  game_type: game.game_type,
                  ...(game?.game_code ? { game_code: game.game_code } : {}),
                  api_name: game.api_name,
                })">
                  Nhập game
                </a>
                <div class="star cursor-pointer sc" @click="handleDeleteFavorite(favorite.type, {
                  game_type: game.game_type,
                  api_name: game.api_name,
                  model_id: game.id
                })">
                  <img src="/image/fish/star-all.png" alt="sxwj">
                  <span>Huỷ</span>
                </div>
              </div>
            </div>
            <div class="gameNaviCover-name">
              <p>{{ game?.name || game?.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
    import { useCasinoStore } from '~/store/casino';
    import { useFishingStore } from '~/store/fishing';
    import { useSlotStore } from '~/store/slot';
    import { useSportStore } from '~/store/sport';
    import type { TAddFavoriteRequest } from '~/types/common';
  
    type TProps = {
      favoriteList: Array<{
        title: string;
        type: string;
        icon: string;
        list: Array<any>;
      }>
    };
    type TState = {
      activeIndex: number | null;
    }
  
    defineProps<TProps>()
  
    const slotStore = useSlotStore()
    const sportStore = useSportStore()
    const casinoStore = useCasinoStore()
    const fishingStore = useFishingStore()
    const {
      handleDeleteFavorite: deleteFavorite,
      handleClickGame
    } = useCommon()
    const state = reactive<TState>({
      activeIndex: null
    })
  
    const toggleActiveIndex = (index: number) => {
      if (state.activeIndex === index) {
        state.activeIndex = null; // Close the active item
      } else {
        state.activeIndex = index; // Open the clicked item
      }
    }
    const handleDeleteFavorite = (type: string, body: TAddFavoriteRequest) => {
      let callback;
      if (type === 'slot') {
        callback = slotStore.removeGameFavorite(body.model_id)
      } else if (type === 'sport') {
        callback = sportStore.removeGameFavorite(body.model_id)
      } else if (type === 'casino') {
        callback = casinoStore.removeGameFavorite(body.model_id)
      } else {
        callback = fishingStore.removeGameFavorite(body.model_id)
      }
      deleteFavorite(body, () => callback)
    }
  
  </script>
  <style lang="css" scoped>
    @import url('~/assets/css/favorite.css');
  </style>