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

    <!-- end common -->
    <div class="sport-wrapper router-view">
      <div class="re-bg pc">
        <div class="sport-header__bg">
        </div>
      </div>
      <div class="sport-wrapper-bottom">
        <div class="sport-game-inner">
          <div class="game-list-wrap">
            <template v-for="game in sportCategories">
              <!-- item -->
              <div class="list">
                <!-- pc -->
                <div class="pc">
                  <div class="list-item">
                    <p class="list-item-bg"><img :src="game.web_pic" alt="one" class="imgOne"></p>
                    <p class="frist-span list-item-ttl">{{ game.title }}</p>
                    <div class="list-item-box">
                      <div class="button-click"
                        @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                        Nhập game</div>
                      <div class="sc"
                        @click="() => handleAddFavorite({ game_type: game.game_type, api_name: game.api_name, model_id: game.id })">
                        <img src="/image/fish/star-all.png"><span>Bộ sưu tập</span>
                      </div>
                    </div>

                  </div>
                </div>

                <!-- sp -->
                <div class="list-sp sp cursor-pointer"
                  @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                  <div class="gameNavCover-items">
                    <div class="gameNavCover-cover">
                      <img class="van-image__img" :src="game.mobile_pic">
                    </div>
                    <p class="gameNavCover-name">{{ game.title }}</p>
                  </div>
                </div>

              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
  import { useConfigStore } from '~/store/config';
  import { useSport } from '../sport.model'

  const configStore = useConfigStore()
  const { notices } = storeToRefs(configStore)
  const { handleClickGame, handleAddFavorite } = useCommon()
  const {
    // State
    sportCategories,

    // Method
  } = useSport()
</script>
<style>
  @import url('~/assets/css/sport.css');
</style>