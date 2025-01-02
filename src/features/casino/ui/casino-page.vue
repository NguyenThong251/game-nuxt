<template>
  <main class="main">
    <div class="mv sp">
      <v-carousel show-arrows="hover" height="100%" cycle :interval="3000" hide-delimiter-background>
        <v-carousel-item src="/image/Mobile/home/banner_1.jpg" cover />
      </v-carousel>
      <div class="marquee-wrapper marquee current">
        <div class="context inner">
          <img src="/image/desktop/home/icon01.png" width="18px" height="18px" alt="" class="marquee-icon">
          <NuxtMarquee :speed="20" autoFill class="text-white">
            <span v-for="(notice, index) in notices" :key="index" class="mx-50">
              {{ notice.content }}
            </span>
          </NuxtMarquee>
        </div>
      </div>
    </div>

    <MenuMobile />

    <div class="live-wrapper router-view">
      <div class="re-bg">
        <div class="live-header__bg pc">
        </div>
      </div>
      <div class="live-main">
        <ul class="game-list-wrap">

          <template v-for="game in casinoCategories">
            <!-- item -->
            <li class="list">
              <!-- pc -->
              <div class="pc">
                <div class="list-item">
                  <p class="list-item-bg"><img :src="game.web_pic" alt="one" class="one"></p>
                  <p class="list-item-ttl">{{ game.title }}</p>

                  <div class="list-item-box">
                    <div class="open-game button-click"
                      @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                      Nhập game</div>
                    <div class="star cursor-pointer sc"
                      @click="() => handleAddFavorite({ game_type: game.game_type, api_name: game.api_name, model_id: game.id })">
                      <img src="/image/fish/star-all.png" alt="sxwj"><span>Bộ sưu tập</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- mobile -->
              <div class="sp item cursor-pointer"
                @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                <div class="gameNavCover-items">
                  <div class="gameNavCover-cover">
                    <div class="game-img van-image">
                      <img class="van-image__img" :src="game.mobile_pic">
                    </div>
                    <div class="gameNavCover-tag">Casino</div>
                  </div>
                  <p class="gameNavCover-name">{{ game.title }}</p>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
  import { useConfigStore } from '~/store/config';
  import { useCasino } from '../casino.model'

  const configStore = useConfigStore()
  const { notices } = storeToRefs(configStore)
  const { handleClickGame, handleAddFavorite } = useCommon()
  const {
    // State
    casinoCategories,

    // Method
  } = useCasino()
</script>
<style>
  @import url('~/assets/css/casino.css');
</style>