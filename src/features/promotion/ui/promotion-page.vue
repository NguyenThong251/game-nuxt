<template>
  <main class="main">
    <!-- PC -->
    <div class="pc">
      <div class="promotion-game-wrapper router-view">
        <div class="re-bg">
          <div class="promotions-header__bg"></div>
        </div>
        <div class="re-bg-one"></div>
        <div class="promotion-game-main">
          <div class="el-container-wrap">
            <div class="game-content-list">
              <div class="content active" id="content1">
                <div class="game-tab-wrapper pt-4">
                  <div id="subContent1-1" class="sub-content active">
                    <div class="game-sub-tab-content scroll">
                      <ul class="wrap w-full">
                        <template v-for="promotion in promotions">
                          <li>
                            <div class="sct">
                              <div class="xq">
                                <p class="xq-p">
                                  <a class="button-click" @click="selectedPromotionId = promotion.id">Xem chi
                                    tiết</a>
                                  <img src="/image/promotion/detail.png" class="jt">
                                </p>
                              </div>
                              <img :src="promotion.cover_image" alt="banner" class="banner">
                            </div>
                            <div class="po-title">
                              <span>{{ promotion.title }}</span>
                            </div>
                          </li>
                        </template>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SP -->
    <div class="sp sp-promotion mt-[90px]">
      <div class="wrap-content">
        <div id="tab01" class="tab-content js-panel">
          <template v-for="promotion in promotions">
            <button class="activityBox" @click="selectedPromotionId = promotion.id">
              <div class="img lazy-img"><img :src="promotion.cover_image"></div>
              <div class="title">
                <div class="title_h">
                  <h4>{{ promotion.title }}</h4>
                </div>
              </div>
            </button>
          </template>
        </div>
      </div>
    </div>
  </main>
  <PromotionDetail :visible="!!selectedPromotionId" :promotion-id="selectedPromotionId"
    @close="selectedPromotionId = null" />

</template>
<script setup lang="ts">
  import { useConfigStore } from '~/store/config';
  import { usePromotionStore } from '~/store/promotion';
  import { usePromotion } from '../promotion.model';
  import PromotionDetail from './promotion-detail.vue';

  const configStore = useConfigStore()
  const promotionStore = usePromotionStore()

  promotionStore.fetchPromotions({ lang: configStore.lang })

  const { promotions, selectedPromotionId } = usePromotion()
</script>
<style scoped>
  @import url('~/assets/css/promotion.css');
</style>