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

    <!-- PC -->
    <div class="fish-game-wrapper router-view pc">
      <div class="re-bg">
        <div class="promotions-header__bg"></div>
      </div>
      <div class="re-bg-one"></div>
      <div class="fish-game-main">
        <div class="el-container-wrap">
          <div class="game-content-list">
            <div class="content active" id="content1">
              <!-- <div class="game-type-tab">
                <div class="sub-tabs">
                  <div class="sub-tab active l-list" onclick="showSubContent('subContent1-1')">
                    <img src="/image/card/all.png">
                    <span>Tất cả các trò chơi</span>
                  </div>
                  <div class="sub-tab l-list l_two" onclick="showSubContent('subContent1-2')">
                    <img src="/image/card/star-all.png">
                    <span>Bộ sưu tập của tôi</span>
                  </div>
                </div>
                <div class="search-box">
                  <input v-model="keyword" type="text" maxlength="8" placeholder="Vui lòng nhập tên trò chơi"
                    class="r-search" @keydown.enter="handleSearch">
                  <i class="fas fa-search"></i>
                </div>
              </div> -->
              <div class="game-tab-wrapper">
                <div id="subContent1-1" class="sub-content active">
                  <div class="game-sub-tab-content scroll">
                    <template v-for="game in fishingCategories">
                      <div class="game-tab-content">
                        <div class="el-brand-item">
                          <div class="collect">
                            <div class="group">
                              <a
                                @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                                Nhập game
                              </a>
                              <div class="sc"
                                @click="() => handleAddFavorite({ game_type: game.game_type, api_name: game.api_name, model_id: game.id })">
                                <img src="/image/fish/star-all.png" alt="sxwj">
                                <span>Bộ sưu tập</span>
                              </div>
                            </div>
                          </div>
                          <div class="tp">
                            <div class="el-image transImg">
                              <img :src="game?.web_pic" class="el-image__inner" style="object-fit: cover;">
                            </div>
                          </div>
                          <span class="one">
                            <p>{{ game?.title }}</p>
                          </span>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row-game sp">
      <template v-for="game in fishingCategories">
        <div class="gameNavCover-items cursor-pointer"
          @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
          <div class="gameNavCover-cover">
            <div class="game-img van-image">
              <img class="van-image__img" :data-src="game?.mobile_pic" :src="game?.mobile_pic" lazy="loaded">
            </div>
          </div>
          <p class="gameNavCover-name">{{ game?.title }}</p>
        </div>
      </template>
    </div>
  </main>
</template>
<script setup lang="ts">
  import { useConfigStore } from '~/store/config';
  import { useFishing } from '../fishing.model';
  import { useFishingStore } from '~/store/fishing';

  // State
  const configStore = useConfigStore()
  const { notices } = storeToRefs(configStore)
  const fishingStore = useFishingStore()
  const { handleClickGame, handleAddFavorite } = useCommon()
  const {
    fishingCategories,
    keyword,

    // Method
    handleSearch,
  } = useFishing()

  fishingStore.fetchGameFishings({
    lang: configStore.lang,
    gameType: 8,
    tag: '',
    keyword: keyword.value || '',
    page: 1,
    limit: 18
  });
</script>
<style>
  @import url('~/assets/css/fish.css');
  @import url('~/assets/css/c-game.css');
</style>