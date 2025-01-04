<template>
  <main id="content">
    <v-carousel class="<md:hidden" :show-arrows="false" :interval="3000" hide-delimiters height="calc(500/1920*100vw)"
      cycle>
      <v-carousel-item v-for="(banner, i) in banners.pc" :key="i" :src="banner.url" cover />
    </v-carousel>
    <v-carousel class="md:hidden" :show-arrows="false" :interval="3000" hide-delimiters height="calc(280/750*100vw)"
      cycle>
      <v-carousel-item v-for="(banner, i) in banners.mobile" :key="i" :src="banner.url" cover />
    </v-carousel>
    <!-- <div class="sp"><img src="/img/home/home_kv_sp.png" alt=""></div> -->

    <!-- <div id="kv">
    </div> -->
    <!-- for PC -->
    <div class="pc">
      <section id="hotgame">
        <h2 class="ttl"><img src="/img/home/ttl_hotgame.png" alt="HOT GAME"></h2>
        <div class="gameListWrap game--hotgame">
          <ul class="gameList">
            <div class="item"><img src="/img/home/hotgame_baccarat.png" alt=""><a href="#" class="btnPlay">CHƠI
                NGAY</a></div>
            <div class="item"><img src="/img/home/hotgame_taixiu.png" alt=""><a href="#" class="btnPlay">CHƠI
                NGAY</a></div>
            <div class="item"><img src="/img/home/hotgame_xocdia.png" alt=""><a href="#" class="btnPlay">CHƠI
                NGAY</a></div>
            <div class="item"><img src="/img/home/hotgame_baccarat2.png" alt=""><a href="#" class="btnPlay">CHƠI
                NGAY</a></div>
            <div class="item"><img src="/img/home/hotgame_xocdialive.png" alt=""><span class="btnPlay">COMMING
                SOON</span></div>
            <div class="item"><img src="/img/home/hotgame_taixiulive.png" alt=""><span class="btnPlay">COMMING
                SOON</span></div>
          </ul>

        </div>
      </section>
      <section id="livecasino">
        <h2 class="ttl"><img src="/img/home/ttl_casino.png" alt="HOT GAME"></h2>
        <div class="gameListWrap game--casino">
          <div data-v-166fe82e="" class="gameList jsCasinoSlider slSlider">
            <v-slide-group show-arrows>
              <v-slide-group-item v-for="game in casinoCategories">
                <div class="item">
                  <div class="info"><img :src="game.web_pic" alt="">
                    <p class="caption">{{ game.title }}</p><a
                      @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })"
                      class="button btnMain btn--green">CHƠI NGAY</a>
                  </div>
                </div>
              </v-slide-group-item>
            </v-slide-group>
          </div>
          <!-- <div class="section-content">
          </div> -->
        </div>
      </section>

      <section id="thethao">
        <h2 class="ttl"><img src="/img/home/ttl_thethao.png" alt="HOT GAME"></h2>
        <div class="gameListWrap game--sport">
          <div data-v-166fe82e="" class="gameList jsCasinoSlider slSlider">
            <v-slide-group show-arrows>
              <v-slide-group-item v-for="game in sportCategories">
                <div class="item">
                  <div class="info"><img :src="game.web_pic" alt="">
                    <p class="caption">{{ game.title }}</p><a
                      @click="() => handleClickGame({ id: game.id, game_type: game.game_type, api_name: game.api_name })"
                      class="button btnMain btn--green">CHƠI NGAY</a>
                  </div>
                </div>
              </v-slide-group-item>
            </v-slide-group>
          </div>
        </div>
      </section>
      <section id="other">
        <v-container class="game--container">
          <v-row>
            <v-col cols="2" class="position-relative custom-col">
              <p class="title">NỔ HỦ</p>
              <v-carousel height="300" show-arrows="hover" cycle hide-delimiters>
                <div class="" v-for="game in slotCategories">
                  <v-carousel-item :src="game.web_pic" cover>
                  </v-carousel-item>
                </div>
              </v-carousel>
              <div class="position-absolute top-100px right-30px">
                <p class="caption ">Nổ Hủ PP</p>
              </div>
              <div class="position-absolute bottom-30px left-50  translate-center ">
                <a href="#" class="button btnMain btn--green">CHƠI NGAY</a>
              </div>
            </v-col>
            <v-col cols="2" class="position-relative custom-col">
              <p class="title">BẮN CÁ</p>
              <v-carousel height="300" show-arrows="hover" cycle hide-delimiters>
                <div class="" v-for="game in fishingCategories">
                  <v-carousel-item :src="game.web_pic" cover>
                  </v-carousel-item>
                </div>
              </v-carousel>
              <div class="position-absolute top-100px right-30px">
                <p class="caption ">Bắn Cá FS</p>
              </div>
              <div class="position-absolute bottom-30px left-50  translate-center ">
                <a href="#" class="button btnMain btn--green">CHƠI NGAY</a>
              </div>
            </v-col>
            <v-col cols="2" class="position-relative custom-col">
              <p class="title">ĐÁ GÀ</p>
              <v-carousel height="300" show-arrows="hover" cycle hide-delimiters>
                <div class="" v-for="game in fishingCategories">
                  <v-carousel-item :src="game.web_pic" cover>
                  </v-carousel-item>
                </div>
              </v-carousel>
              <div class="position-absolute top-100px right-30px">
                <p class="caption ">Đá Gà DM</p>
              </div>
              <div class="position-absolute bottom-30px left-50  translate-center ">
                <a href="#" class="button btnMain btn--green">CHƠI NGAY</a>
              </div>
            </v-col>
            <v-col cols="2" class="position-relative custom-col">
              <p class="title">GAME BÀI</p>
              <v-carousel height="300" show-arrows="hover" cycle hide-delimiters>
                <div class="" v-for="game in cardCategories">
                  <v-carousel-item :src="game.web_pic" cover>
                  </v-carousel-item>
                </div>
              </v-carousel>
              <div class="position-absolute top-100px right-30px">
                <p class="caption ">Đá Gà DM</p>
              </div>
              <div class="position-absolute bottom-30px left-50  translate-center ">
                <a href="#" class="button btnMain btn--green">CHƠI NGAY</a>
              </div>
            </v-col>
            <v-col cols="2" class="position-relative custom-col">
              <p class="title">XỔ SỐ</p>
              <v-carousel height="300" show-arrows="hover" cycle hide-delimiters>
                <div class="" v-for="game in cardCategories">
                  <v-carousel-item :src="game.web_pic" cover>
                  </v-carousel-item>
                </div>
              </v-carousel>
              <div class="position-absolute top-100px right-30px">
                <p class="caption ">Đá Gà DM</p>
              </div>
              <div class="position-absolute bottom-30px left-50  translate-center ">
                <a href="#" class="button btnMain btn--green">CHƠI NGAY</a>
              </div>
            </v-col>

          </v-row>
        </v-container>
      </section>
      <section id="khuyenmai">
        <h2 class="ttl"><img src="/img/home/ttl_khuyenmai.png" alt="HOT GAME"></h2>
        <div class="bnrList">
          <div data-v-166fe82e="" class="gameList jsCasinoSlider slSlider">
            <v-slide-group show-arrows>
              <v-slide-group-item v-for="promotion in promotions">
                <div class="item"><img :src="promotion.cover_image" alt=""></div>

              </v-slide-group-item>
            </v-slide-group>
          </div>

        </div>
        <div class="wrap">
          <div class="txtBox">
            <h3>TUT88 - Nhà cái uy tín hàng đầu châu Á</h3>
            <p><strong>TUT88</strong> đã trở thành điểm đến lí tưởng tại <strong>Châu Á</strong> để tham gia cá cược
              trực tuyến trong suốt hơn 10 năm qua! Với lượng trò chơi casino trực tuyến đa dạng nhất và khuyến mãi chào
              mừng phong phú nhất. Điều này không khó để giải thích vì sao Mansion trở thành một trong các <strong>nhà
                cái uy tín hàng đầu</strong> và được yêu thích hiện nay.</p>

            <p>Đến với <strong>TUT88</strong> Online Games, thành viên có thể thỏa sức đam mê từ các trò chơi của casino
              trực tuyến như <strong>Baccarat, Rồng Hổ, Roulette, Blackjack và Sic Bo</strong> đến các trò chơi quen
              thuộc như <strong>Poker, Keno</strong> và Xổ Số luôn có các giải thưởng thêm hấp dẫn hàng tháng. Thành
              viên sẽ được trải nghiệm cùng hàng loạt các trò chơi trực tuyến đến từ các nhà cung cấp <strong>uy tín
                hàng đầu</strong> trong ngành cá cược và đặc biệt hơn, các trò chơi slot mới sẽ luôn được cập nhật
              thường xuyên. Hai trò chơi mới hàng đầu sẽ được ra mắt mỗi tuần, thành viên còn có thể tận hưởng có game
              độc quyền chỉ có tại <strong>TUT88</strong> với các giải thưởng và khuyến mãi đặc biệt. Từ đây,
              <strong>TUT88</strong> sẽ luôn thông báo các người chiến thắng jackpot tại máy xèng trực tuyến.
            </p>

            <p><strong>TUT88</strong> không chỉ cung cấp các trò chơi casino trực tuyến tốt nhất, mà còn đưa ra tỉ lệ
              cược cạnh tranh nhất tại các sự kiện thể thao lớn nhất hành tinh. Những người hâm mộ thể thao muốn hoà
              mình cùng các trận đấu mong đợi nhất có thể tham gia dự đoán các trận cầu được cung ứng trên thị trường đa
              dạng. Thành viên có thể cổ vũ hoặc đặt cược các giải đấu lớn nhất cho đội bóng và cầu thủ yêu thích – như
              tại bóng đá, bóng rổ, bóng bầu dục, quần vợt, cầu lông, khúc côn cầu, bóng chuyền, gôn, cricket, Muay Thai
              hoặc bóng chày. Người hâm mộ bóng đá có thể đặt cược cho đội bóng yêu thích của mình tại các giải đấu
              Ngoại Hạng Anh, <strong>Serie A Ý, Bundesliga Đức, La Liga Tây Ban Nha hay World Cup</strong>. Các game
              thủ còn có thể tham gia khi chơi. <strong>TUT88</strong> cũng là nhà cái đáng tin cậy nhất vì thế thành
              viên luôn an tâm về sự hữu ích của đồng tiền mình bỏ ra.</p>

            <p>Để tham gia <strong>TUT88</strong> rất đơn giản, với quy trình đăng ký đơn giản cũng như các phương thức
              gửi và rút tiền có thể giao dịch mọi lúc, mọi nơi. Việc đăng ký có thể thực hiện trên máy tính và trang
              dành cho di động hoặc sử dụng ứng dụng cho trên di động cho Android hoặc iOS. Thành viên mới có thể nhận
              thêm khuyến mãi <strong>175% Thưởng Chào Mừng</strong> khi gửi tiền lần đầu tại <strong>Live
                Casino</strong> cùng với các khuyến mãi theo tháng đầy hấp dẫn và giải thưởng lớn nhất trong các giải
              đấu thể thao.<br>
              Với thành viên thân Với thành viên thân. Do vậy, cược trực tuyến tốt nhất tại <strong>Châu Á</strong> khi
              tham gia slot games, casino trực tuyến, keno & xổ số, thể thao, và poker mọi lúc, mọi nơi.<br>
              <strong>Đăng ký TUT88</strong> ngay hôm nay và trải nghiệm sự lôi cuốn cuồng nhiệt của các trò chơi casino
              ngay tại nhà hay bất kỳ đâu cùng với chiếc điện thoại trong tay! Chúc bạn một ngày lành!
            </p>
          </div>
        </div>
      </section>
    </div>
    <!-- for SP -->
    <div class="sp">
      <!-- <div class="infoUSerSP">
       <div class="infoUSerSP_inner">
          <div class="userBox1">
            <div class="userName"><span class="vip">VIP<span>1</span></span>Usename002</div>
            <p class="userAmount">234,000,000 VNĐ</p>
          </div>
          <div class="userBtn"><button class="btnMain btnUserNap btn--yellow">RÚT TIỀN</button></div>
          <div class="userBtn"><button class="btnMain btnUserRut btn--green">NẠP TIỀN</button></div>
        </div> 
      </div> -->
      <InfoMobile />
      <section id="hotgameSP">
        <h2 class="ttl"><img src="/img/home/ttl_hotgame_sp.png" alt="HOT GAME"></h2>
        <div class="gameList">
          <div class="item"><a href="#"><img src="/img/home/game_sp_baccarat.png" alt=""></a></div>
          <div class="item"><a href="#"><img src="/img/home/game_sp_taixiu.png" alt=""></a></div>
          <div class="item"><a href="#"><img src="/img/home/game_sp_xocdia.png" alt=""></a></div>
          <div class="item"><a href="#"><img src="/img/home/game_sp_pk3.png" alt=""></a></div>
          <div class="item"><a href="#"><img src="/img/home/game_sp_xocdialive.png" alt=""></a></div>
          <div class="item"><a href="#"><img src="/img/home/game_sp_taixiulive.png" alt=""></a></div>
        </div>
      </section>
      <section id="othergameSP">
        <h2 class="ttl"><img src="/img/home/ttl_hotgame_sp.png" alt="HOT GAME"></h2>
        <div class="gameList">
          <div class="item"><a href="#"><img src="/img/home/game_sp_casino.png" alt=""></a></div>
          <div class="item"><a href="#"><img src="/img/home/game_sp_thethao.png" alt=""></a></div>
          <div class="item w50"><a href="#"><img src="/img/home/game_sp_nohu.png" alt=""></a></div>
          <div class="item w50"><a href="#"><img src="/img/home/game_sp_banca.png" alt=""></a></div>
          <div class="item w50"><a href="#"><img src="/img/home/game_sp_gamebai.png" alt=""></a></div>
          <div class="item w50"><a href="#"><img src="/img/home/game_sp_daga.png" alt=""></a></div>
          <div class="item"><a href="#"><img src="/img/home/game_sp_xoso.png" alt=""></a></div>
        </div>
      </section>
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
import { usePromotionStore } from '~/store/promotion';
import { usePromotion } from '~/features/promotion/promotion.model';
import InfoMobile from '~/components/header/InfoMobile.vue';


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

const promotionStore = usePromotionStore()
promotionStore.fetchPromotions({ lang: configStore.lang })
const { promotions, selectedPromotionId } = usePromotion()
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