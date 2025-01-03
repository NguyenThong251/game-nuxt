<template>
  <main class="main">
    <div class="mv">
      <v-carousel class="<md:hidden" :show-arrows="false" :interval="3000" hide-delimiters height="calc(500/1920*100vw)"
        cycle>
        <v-carousel-item v-for="(banner, i) in banners.pc" :key="i" :src="banner.url" cover />
      </v-carousel>
      <v-carousel class="md:hidden" :show-arrows="false" :interval="3000" hide-delimiters height="calc(280/750*100vw)"
        cycle>
        <v-carousel-item v-for="(banner, i) in banners.mobile" :key="i" :src="banner.url" cover />
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

    <div class="wrap-home">
      <div class="home">
        <div class="feature-game-wp">
          <div class="section-title"> Game nổi bật</div>
          <div class="section-content">
            <div data-v-166fe82e="" class="third-party-wp">
              <v-slide-group show-arrows>
                <v-slide-group-item v-for="(game, index) in homeHots" :key="index">
                  <div class="game game-nt ma-4"
                    @click="() => handleClickGame({ id: game.id, game_type: game.game_type, game_code: game.game_code, api_name: game.api_name })">
                    <div class="el-image">
                      <img :src="game?.img_url" class="el-image__inne" :alt="game?.name">
                    </div>
                    <div class="btn-enterGame">
                      <button class="el-button el-button--default">
                        <span>Vào trò chơi</span>
                      </button>
                    </div>
                    <div data-v-6a78c811="" class="gameName">{{ game?.name }}</div>
                  </div>
                </v-slide-group-item>
              </v-slide-group>
            </div>
          </div>
        </div>

        <section class="p-layout sec-sport">
          <h2 class="p-layout__ttl">Thể Thao</h2>
          <div class="content">
            <!-- PC -->
            <div class="pc">
              <div class="list">
                <template v-for="game in sportCategories">
                  <!-- <div class="list-item">
                    <p class="list-item-img"><img :src="game.web_pic" alt="one" class="imgOne"></p>
                    <p class="list-item-ttl">{{ game.title }}</p>
                  </div> -->
                  <!-- <div class="pc"> -->
                  <div class="list-item">
                    <p class="list-item-bg"
                      @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                      <!-- <a @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })" class="gameNavCover-items"> -->
                      <img :src="game.web_pic" alt="one" class="imgOne">
                      <!-- </a> -->
                    </p>
                    <p class="frist-span list-item-ttl">{{ game.title }}</p>
                  </div>
                  <!-- <div class="button-click"
                        @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                        Nhập game</div> -->
                  <!-- </div> -->
                </template>
              </div>
            </div>
            <!-- SP -->
            <div class="sp">
              <div class="row-game">
                <template v-for="game in sportCategories">
                  <a @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })"
                    class="gameNavCover-items">
                    <div class="gameNavCover-cover">
                      <img class="van-image__img" :src="game.mobile_pic">
                    </div>
                    <p class="gameNavCover-name">{{ game.title }}</p>
                  </a>
                </template>
              </div>
            </div>
          </div>
        </section>

        <section class="p-layout sec-casio">
          <h2 class="p-layout__ttl">Casino</h2>
          <div class="content">
            <div class="pc">
              <div class="list">
                <template v-for="game in casinoCategories">
                  <div class="list-item">
                    <p class="list-item-bg"
                      @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                      <img :src="game.web_pic" alt="one" class="imgOne">
                    </p>
                    <p class="list-item-ttl">{{ game.title }}</p>
                  </div>
                  <!-- <div class="item">
                    <p class="one"><img :src="game.web_pic" alt="one"></p>
                    <p class="three"><img src="/image/casino/ob_bg.3535c232.png" alt="three"></p>
                    <p class="four"><img src="/image/casino/live_common.5bbffb1e.png" alt="four"></p>
                    <div class="live_brand">
                      <img src="/image/casino/api_game_1647579141_NuduAmHssd.png" alt="two" class="two">
                      <span>{{ game.title }}</span>
                      <div class="wrap-game">
                        <div class="open-game"
                          @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                          Nhập game</div>
                        <div class="star">
                          <img src="/image/casino/starlive.png" alt="sxwj">
                        </div>
                      </div>
                    </div>
                  </div> -->
                </template>
              </div>
            </div>
            <div class="sp">
              <div class="row-game">
                <template v-for="game in casinoCategories">
                  <a class="gameNavCover-items"
                    @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                    <div class="gameNavCover-cover">
                      <div class="game-img van-image">
                        <img class="van-image__img" :src="game.mobile_pic">
                      </div>
                      <div class="gameNavCover-tag">Casino</div>
                    </div>
                    <p class="gameNavCover-name">{{ game.title }}</p>
                  </a>
                </template>
              </div>
            </div>
          </div>
        </section>

        <section class="p-layout sec-nohu">
          <h2 class="p-layout__ttl">Nổ hũ</h2>
          <div class="content">
            <!-- PC -->
            <div class="pc">
              <div class="row-game">
                <template v-for="game in slotCategories">
                  <a class="gameNavCover-items"
                    @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                    <div class="gameNavCover-cover">
                      <div class="game-img van-image">
                        <img class="van-image__img" :src="game.web_pic">
                      </div>
                    </div>
                    <p class="gameNavCover-name">{{ game.title }}</p>
                  </a>
                </template>
              </div>
            </div>
            <!-- SP -->
            <div class="sp">
              <div class="row-game">
                <template v-for="game in slotCategories">
                  <a class="gameNavCover-items"
                    @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                    <div class="gameNavCover-cover">
                      <div class="game-img van-image">
                        <img class="van-image__img" :src="game.mobile_pic">
                      </div>
                      <div class="gameNavCover-tag">Nổ hủ</div>
                    </div>
                    <p class="gameNavCover-name">{{ game.title }}</p>
                  </a>
                </template>
              </div>
            </div>
          </div>
        </section>

        <section class="p-layout sec-bai">
          <h2 class="p-layout__ttl">Game bài</h2>
          <div class="content">
            <!-- PC -->
            <div class="pc">
              <div class="row-game">
                <template v-for="game in cardCategories">
                  <a class="gameNavCover-items"
                    @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                    <div class="gameNavCover-cover">
                      <div class="game-img van-image">
                        <img class="van-image__img" :src="game.web_pic">
                      </div>
                    </div>
                    <p class="gameNavCover-name">{{ game.title }}</p>
                  </a>
                </template>
              </div>
            </div>
            <!-- SP -->
            <div class="sp">
              <div class="row-game">
                <template v-for="game in cardCategories">
                  <a class="gameNavCover-items"
                    @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                    <div class="gameNavCover-cover">
                      <div class="game-img van-image">
                        <img class="van-image__img" :src="game.mobile_pic">
                      </div>
                      <div class="gameNavCover-tag">Game bài</div>
                    </div>
                    <p class="gameNavCover-name">{{ game.title }}</p>
                  </a>
                </template>
              </div>
            </div>
          </div>
        </section>

        <section class="p-layout sec-fish">
          <h2 class="p-layout__ttl">Bắn cá</h2>
          <div class="content">
            <!-- PC -->
            <div class="pc">
              <div class="row-game">
                <template v-for="game in fishingCategories">
                  <a class="gameNavCover-items"
                    @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                    <div class="gameNavCover-cover">
                      <div class="game-img van-image">
                        <img class="van-image__img" :src="game.web_pic">
                      </div>
                    </div>
                    <p class="gameNavCover-name">{{ game.title }}</p>
                  </a>
                </template>
              </div>
            </div>
            <!-- SP -->
            <div class="sp">
              <div class="row-game">
                <template v-for="game in fishingCategories">
                  <a @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })"
                    class="gameNavCover-items">
                    <div class="gameNavCover-cover">
                      <div class="game-img van-image">
                        <img class="van-image__img" :data-src="game.mobile_pic" :src="game.mobile_pic" lazy="loaded">
                      </div>
                      <div class="gameNavCover-tag">Bắn Cá</div>
                    </div>
                    <p class="gameNavCover-name">{{ game.title }}</p>
                  </a>
                </template>
              </div>
            </div>
          </div>
        </section>

        <!-- <section class="p-layout sec-soxo" style="display: none;">
          <h2 class="p-layout__ttl">Sổ số</h2>
          <div class="content">
            <div class="pc">
              <div class="row-game">
                <template v-for="game in lotteries">
                  <a class="gameNavCover-items"
                    @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                    <div class="gameNavCover-cover">
                      <div class="game-img van-image">
                        <img class="van-image__img" :src="game.web_pic">
                      </div>
                    </div>
                    <p class="gameNavCover-name">{{ game.title }}</p>
                  </a>
                </template>
              </div>
            </div>
            <div class="sp">
              <div class="row-game">
                <template v-for="game in lotteries">
                  <a class="gameNavCover-items"
                    @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })">
                    <div class="gameNavCover-cover">
                      <div class="game-img van-image">
                        <img class="van-image__img" :src="game.mobile_pic">
                      </div>
                    </div>
                    <p class="gameNavCover-name">{{ game.title }}</p>
                  </a>
                </template>
              </div>
            </div>
          </div>
        </section> -->
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useConfigStore } from '~/store/config';
import { useHome } from '../home.model'
import { useSportStore } from '~/store/sport';
import { useCasinoStore } from '~/store/casino';
import { useSlotStore } from '~/store/slot';
import { useCardStore } from '~/store/card';
import { useFishingStore } from '~/store/fishing';
import { useLotteryStore } from '~/store/lottery';
import { DEVICE_TYPE, LANG } from '~/types/common';
import { useHotStore } from '~/store/hot';

const splitTag = (text: string): Array<string> => text.split(',')

const configStore = useConfigStore()
const { notices } = storeToRefs(configStore)
const hotStore = useHotStore()
const { homeHots } = storeToRefs(hotStore)
const sportStore = useSportStore()
const { sportCategories } = storeToRefs(sportStore)
const casinoStore = useCasinoStore()
const { casinoCategories } = storeToRefs(casinoStore)
const slotStore = useSlotStore()
const { slotCategories } = storeToRefs(slotStore)
const cardStore = useCardStore()
const { cardCategories } = storeToRefs(cardStore)
const fishingStore = useFishingStore()
const { fishingCategories } = storeToRefs(fishingStore)
const lotteryStore = useLotteryStore()
const { lotteries } = storeToRefs(lotteryStore)
const { handleClickGame } = useCommon()

const {
  // State
  banners,
  // Method
  fetchBanners,
} = useHome()

fetchBanners(DEVICE_TYPE.PC, { group: 'new1', lang: configStore.lang || LANG.VI })
fetchBanners(DEVICE_TYPE.MOBILE, { group: 'mobile', lang: configStore.lang || LANG.VI })

</script>
<style scoped>
/* @import url('~/assets/css/top.css'); */
@import url('~/assets/cssnew/home.css');
</style>