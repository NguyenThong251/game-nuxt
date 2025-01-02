<template>
  <v-overlay :model-value="loading" class="align-center justify-center">
    <v-progress-circular color="primary" size="64" indeterminate></v-progress-circular>
  </v-overlay>
  <main class="main">

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
                <template v-for="slotCategory in slotCategories">
                  <div :class="['ele-item', 'tab', currentTab === slotCategory.api_name ? 'active' : '']"
                    @click="handleActiveTab(slotCategory.api_name)">
                    <div class="l-icon joker">
                      <img :src="slotCategory.web_pic">
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="game-content-list">
            <div class="content active">
              <div class="game-type-tab">
                <div class="sub-tabs">
                  <div :class="`sub-tab l-list ${mode === 'all' ? 'active' : ''}`" @click="handleChangeMode('all')">
                    <img src="/image/game/all.png">
                    <span>Tất cả các trò chơi</span>
                  </div>
                  <div :class="`sub-tab l-list ${mode === 'favorite' ? 'active' : ''}`"
                    @click="handleChangeMode('favorite')">
                    <img src="/image/game/star-all.png">
                    <span>Bộ sưu tập của tôi</span>
                  </div>
                </div>
                <!-- <div class="search-box">
                  <input v-model="keyword" type="text" maxlength="8" placeholder="Vui lòng nhập tên trò chơi"
                    class="r-search" @keydown.enter="handleSearch">
                  <i class="fas fa-search"></i>
                </div> -->
              </div>
              <div v-if="mode === 'all'" class="game-tab-wrapper pt-0">
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
              <div v-else class="game-tab-wrapper pt-0">
                <div class="sub-content active">
                  <div class="game-sub-tab-content">
                    <template v-for="game in favoriteList">
                      <div class="game-tab-content">
                        <div class="collect">
                          <div class="group">
                            <a
                              @click="() => handleClickGame({ id: game.id, game_code: game.game_code, game_type: game.game_type, api_name: game.api_name })">
                              Nhập game </a>
                            <div class="sc"
                              @click="() => handleDeleteFavorite({ game_type: game.game_type, api_name: game.api_name, model_id: game.id })">
                              <img src="/image/game/star-all.png" alt="sxwj">
                              <span>Huỷ</span>
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
            <v-pagination v-if="mode === 'all'" :model-value="gamesByCurrentTab?.current_page || 1"
              :length="Math.ceil((gamesByCurrentTab?.total || 1) / (gamesByCurrentTab?.per_page || 1))"
              :total-visible="4" rounded="circle" @update:model-value="handleChangePage"></v-pagination>
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
                  <template v-for="slotCategory in slotCategories">
                    <div
                      :class="['ele-item', 'tab', 'jill-game-tab', 'js-get-text', currentTab === slotCategory.api_name ? 'active' : '']"
                      @click="() => handleActiveTab(slotCategory.api_name)">
                      <div class="l-icon joker">
                        <img :src="slotCategory.mobile_pic">
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
              <v-pagination size="x-small" :model-value="gamesByCurrentTab?.current_page || 1"
                :length="Math.ceil((gamesByCurrentTab?.total || 1) / (gamesByCurrentTab?.per_page || 1))"
                :total-visible="4" rounded="circle" @update:model-value="handleChangePage"></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
  import { useSlotStore } from '~/store/slot';
  import { useSlot } from '../slot.model'
  import { useConfigStore } from '~/store/config';

  const configStore = useConfigStore()
  const slotStore = useSlotStore()
  const { handleClickGame, handleAddFavorite } = useCommon()
  const {
    // State
    loading,
    slotCategories,
    currentTab,
    mode,
    favoriteList,

    // Computed
    gamesByCurrentTab,

    // Method
    handleActiveTab,
    handleChangePage,
    handleChangeMode,
    handleDeleteFavorite
  } = useSlot()

  if (slotStore.slotCategories.length > 0) {
    slotStore.fetchGameSlots({
      lang: configStore.lang,
      gameType: 1,
      tag: 'all',
      api_code: slotStore.slotCategories[0].api_name,
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