<template>
  <v-overlay :model-value="loading" class="align-center justify-center">
    <v-progress-circular color="primary" size="64" indeterminate></v-progress-circular>
  </v-overlay>
  <main class="main">
    <div class="mv sp">
      <v-carousel :show-arrows="false" height="100%" cycle :interval="3000" hide-delimiter-background>
        <v-carousel-item src="/image/Mobile/home/banner_2.jpg" cover />
      </v-carousel>
      <div class="marquee-wrapper marquee current">
        <div class="context inner">
          <img src="/image/desktop/home/icon01.png" width="18px" height="18px" alt="" class="marquee-icon">
          <NuxtMarquee :speed="20" autoFill class="text-white">
            <span v-for="(notice, index) in notices" :key="index" style="margin: 0 100px;">
              {{ notice.content }}
            </span>
          </NuxtMarquee>
        </div>
      </div>
    </div>

    <MenuMobile />

    <!-- PC -->
    <div class="el-game-wrapper router-view pc">
      <div class="re-bg">
        <div class="el-header__bg"></div>
      </div>
      <div class="el-game-wrapper__content">
        <div class="el-container-wrap">
          <div class="ele_container">
            <div class="ele_wrap">
              <div class="tabs">
                <template v-for="hotCategory in hotCategories">
                  <div :class="['ele-item', 'tab', currentTab === hotCategory.api_name ? 'active' : '']"
                    @click="() => handleActiveTab(hotCategory.api_name)">
                    <div class="l-icon joker">
                      <img :src="hotCategory.web_pic">
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="game-content-list">
            <div class="content active">
              <!-- <div class="game-type-tab">
                <div class="sub-tabs">
                  <div class="sub-tab active l-list">
                    <img src="/image/game/all.png">
                    <span>Tất cả các trò chơi</span>
                  </div>
                  <div class="sub-tab l-list l_two">
                    <img src="/image/game/star-all.png">
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
                <div class="sub-content active">
                  <div class="game-sub-tab-content">
                    <template v-for="game in gamesByCurrentTab?.data">
                      <div class="game-tab-content">
                        <div class="collect">
                          <div class="group">
                            <a
                              @click="() => handleClickGame({ id: game.id, game_code: game.game_code, game_type: game.game_type, api_name: game.api_name })">
                              Nhập game </a>
                            <div class="sc"
                              @click="() => handleAddFavorite({ game_type: game.game_type, api_name: game.api_name, model_id: game.id })">
                              <img src="/image/game/star-all.png" alt="sxwj">
                              <span>Bộ sưu tập</span>
                            </div>
                          </div>
                        </div>
                        <div class="tp">
                          <div class="el-image transImg">
                            <img :src="game?.img_url" class="el-image__inner" style="object-fit: cover;">
                          </div>
                        </div>
                        <span class="one">
                          <p>{{ game?.name }}</p>
                        </span>
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

    <!-- SP -->
    <div class="sp">
      <div class="el-game-wrapper router-view">
        <div class="el-game-wrapper__content">
          <div class="el-container-wrap">
            <div class="ele_container">
              <div class="ele_wrap">
                <div class="tabs">
                  <template v-for="hotCategory in hotCategories">
                    <div
                      :class="['ele-item', 'tab', 'jill-game-tab', 'js-get-text', currentTab === hotCategory.api_name ? 'active' : '']"
                      @click="() => handleActiveTab(hotCategory.api_name)">
                      <div class="l-icon joker">
                        <img :src="hotCategory.mobile_pic">
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="game-content-list">
              <div class="content contentsp active">
                <div class="game-tab-wrapper">
                  <div class="sub-content active">
                    <template v-for="game in gamesByCurrentTab?.data">
                      <div class="game-sub-tab-content"
                        @click="() => handleClickGame({ id: game.id, game_code: game.game_code, game_type: game.game_type, api_name: game.api_name })">
                        <div class="game-tab-content">
                          <div class="tp">
                            <div class="el-image transImg">
                              <img :src="game.img_url" class="el-image__inner" style="object-fit: cover;">
                            </div>
                          </div>
                          <div class="one-p">
                            <p>{{ game.name }}</p>
                            <i class="fa-regular fa-star star van-icon van-icon-star-o"></i>
                          </div>
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
  </main>
</template>
<script setup lang="ts">
  import { useHotStore } from '~/store/hot';
  import { useHot } from '../hot.model'
  import { useConfigStore } from '~/store/config';

  const configStore = useConfigStore()
  const { notices } = storeToRefs(configStore)
  const hotStore = useHotStore()
  const { handleClickGame, handleAddFavorite } = useCommon()
  const {
    // State
    loading,
    hotCategories,
    gameHots,
    currentTab,

    // Computed
    gamesByCurrentTab,

    // Method
    handleActiveTab,
  } = useHot()

  if (hotCategories.value?.length > 0) {
    hotStore.fetchGameHots({
      lang: configStore.lang,
      gameType: 98,
      tag: 'all',
      api_code: hotCategories.value[0]?.api_name,
      keyword: '',
      page: 1,
      limit: 18,
    })
  }

</script>
<style scoped>
  @import url('~/assets/css/slot.css');
  @import url('~/assets/css/c-game.css');
</style>