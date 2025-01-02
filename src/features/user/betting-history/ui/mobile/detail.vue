<template>
  <v-dialog id="special-dialog" :model-value="visible" :fullscreen="$vuetify.display.width < 1024"
    :max-width="$vuetify.display.width > 1024 ? 540 : 1024" @update:model-value="handleClose">
    <v-card>
      <v-card-text class="px-0 py-0" style="background: #eff5fb;">
        <div class="my-header white">
          <div class="my-header-left">
            <div class="cursor-pointer" @click="handleClose">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAfCAYAAACVgY94AAACbklEQVRYhcWXTYhNYRjHf9cwxiRq0Lio0U2Rj3STbCgLiZJC+chKlJTULJgsbbAzi5lhJYQSSqTIgpqGEhtJsyELZmjGwkdi0NXT+9zucZ973rnnznmPX926Pf9zzvvvfc/zcXLFYpGETAZuAltjbusEuk20QSYlvC0HXPCYu5amORow2AvsNVHHK+CAiU6QJAZPAodM1PEF2AF8M0pGBo8Bx03UUQL2A4NGSYF6DB4ETptohTPADRPNyOAefe9yRnH0A10mmiI+g1s0Y5uM4hgGdgK/jZKBwfVaMpqN4vgF7AI+GCVlahlcDdwCWo1SoUuPNzjVBpcBd4GZnoWvp12MfUQNFoB7wBzP9YNaUkpGCWxwHnAfWGCuqCBFeDvw1SiBDbbpzi0y6r9M13ZWmsBPMn6VPlVK15OYZ22MGjwHrDB2wiAlq0/XLWnr/FNjpR5gqvxpyufzF4Ep5pJwzAeGgOdapmYDa6pWmwX8kEoh8+AdLcpZ8glYAoxqxZDkm1u1/ndguezgA2Az0J6hwVbdpdvAT+CjJmAUOdVCeaKWbX80TqLISLUSeGuUgJTLzHtgE/DOs9QM4JKnNwchWqhf61GPeBZaBxw10YwMCi81YT6bKyucABJ/aTVKrWHhKbBNs6gWMuFcBqb9L4PCQ2A3MGYUx1LgVEhjZeIMClIf98VUeuFItCWFwmdQuAocjplepJee114eDCnU4z37mbadDUZxpaegM2IQ6jEoDAAtwFqjuCH3DfDCKCmQ5MNdvovPmqhDpo8OE83YIPo+XjFRd9QyFaXeZeo94jKSLJLd0pMXV2kLdep+nJo74C+xynQWqaCbiwAAAABJRU5ErkJggg=="
                class="arrow">
            </div>
          </div>
          <h2 class="my-header-title">
            <span>Chi Tiết Đặt Cược</span>
          </h2>
        </div>
        <div class="betDetail-wrapper">
          <div class="betDetail-card betDetail-card-info">
            <p class="betDetail-title">Thông tin cược:</p>
            <div class="betDetail-content">
              <div class="betDetail-item">
                <div class="tx-item-col">
                  <div class="tx-item-cap">ID</div>
                  <div class="tx-item-res">
                    <label class="copyLabel label betDetail-id">
                      <span>{{ bettingHistoryDetail.id }}</span>
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-copy" viewBox="0 0 16 16">
                          <path fill-rule="evenodd"
                            d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                      </i>
                    </label>
                  </div>
                </div>
              </div>
              <div class="betDetail-item">
                <div class="tx-item-col">
                  <div class="tx-item-cap">Thành viên cược</div>
                  <div class="tx-item-res">
                    <span class="label">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-compass" viewBox="0 0 16 16">
                          <path
                            d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                          <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                        </svg>
                      </i>{{ userName }}</span>
                  </div>
                </div>
              </div>
              <div class="betDetail-item">
                <div class="tx-item-col">
                  <div class="tx-item-cap">Game</div>
                  <div class="tx-item-res">
                    <strong class="label">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-compass" viewBox="0 0 16 16">
                          <path
                            d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                          <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                        </svg>
                      </i>{{ `${gameDetail?.api?.api_title} ${gameDetail.name}` }}</strong>
                  </div>
                </div>
              </div>
              <div class="betDetail-item">
                <div class="tx-item-col">
                  <div class="tx-item-cap">Trạng thái</div>
                  <div class="tx-item-res">
                    <strong class="--gray --bg-gray label">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-crosshair2" viewBox="0 0 16 16">
                          <path
                            d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0m-.5 2.02A6 6 0 0 0 2.02 7.5h1.005A5 5 0 0 1 7.5 3.025zm1 1.005A5 5 0 0 1 12.975 7.5h1.005A6 6 0 0 0 8.5 2.02zM12.975 8.5A5 5 0 0 1 8.5 12.975v1.005a6 6 0 0 0 5.48-5.48zM7.5 12.975A5 5 0 0 1 3.025 8.5H2.02a6 6 0 0 0 5.48 5.48zM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                        </svg>
                      </i>{{ bettingHistoryDetail.winloss < 0 ? 'Thua' : 'Thắng' }}</strong>
                  </div>
                </div>
              </div>
              <div class="betDetail-item">
                <div class="tx-item-col">
                  <div class="tx-item-cap">Kỳ xổ</div>
                  <div class="tx-item-res">
                    <span class="label">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-calendar4-week" viewBox="0 0 16 16">
                          <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                          <path
                            d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                        </svg>
                      </i>{{ bettingHistoryDetail.ag }}</span>
                  </div>
                </div>
              </div>
              <div class="betDetail-item">
                <div class="tx-item-col">
                  <div class="tx-item-cap">Cược lúc</div>
                  <div class="tx-item-res">
                    <span class="label">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-alarm" viewBox="0 0 16 16">
                          <path
                            d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                          <path
                            d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
                        </svg>
                      </i>
                      {{ formatDateVN(bettingHistoryDetail.time) }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="betDetail-item">
                <div class="tx-item-col">
                  <div class="tx-item-cap">Kết quả</div>
                  <div class="tx-item-res">
                    <ul class="betDetail-result --dice">
                      <li v-for="(face, index) in bettingHistoryDetail.result.facesList" :key="index"
                        class="betDetail-result-item mr-1">
                        <img :src="`/image/${bettingHistoryMapping.symbols[face]}`" alt="">
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="betDetail-item">
                <div class="tx-item-col">
                  <div class="tx-item-cap">Tổng số cược</div>
                  <div class="tx-item-res">
                    <span class="label">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-crosshair" viewBox="0 0 16 16">
                          <path
                            d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        </svg></i>{{ bettingHistoryDetail.items.length }} số cược</span>
                  </div>
                </div>
              </div>
              <div class="betDetail-item">
                <div class="tx-item-col">
                  <div class="tx-item-cap">Tổng tiền cược</div>
                  <div class="tx-item-res">
                    <strong class="label">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-cash-stack" viewBox="0 0 16 16">
                          <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                          <path
                            d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                        </svg></i>{{ formatCurrency(bettingHistoryDetail.bet || 0) }}</strong>
                  </div>
                </div>
              </div>
              <div class="betDetail-item">
                <div class="tx-item-col">
                  <div class="tx-item-cap">Thắng cược</div>
                  <div class="tx-item-res">
                    <strong class="label">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-cash-stack" viewBox="0 0 16 16">
                          <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                          <path
                            d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                        </svg></i>{{ formatCurrency(bettingHistoryDetail.win || 0) }}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="betDetail-card betDetail-card-result">
            <p class="betDetail-title">Chi tiết đơn cược</p>
            <div class="betDetail-content">
              <div class="betDetail-table">
                <table>
                  <thead>
                    <tr>
                      <th>Nội dung</th>
                      <th>Tiền cược</th>
                      <th>Kết quả</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in bettingHistoryDetail.items" :key="item.id">
                      <td>{{ bettingHistoryMapping?.gate[item.id]?.nameVi }}</td>
                      <td>{{ formatCurrency(item.bet || 0) }}</td>
                      <td>
                        <strong :class="`${item.winloss > 0 ? '--green' : '--red'}`">
                          {{ formatCurrency(item.winloss || 0) }}
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Tổng cộng</th>
                      <th>
                        {{ formatCurrency(bettingHistoryDetail.bet || 0) }}
                      </th>
                      <th>
                        <span :class="`${bettingHistoryDetail.winloss > 0 ? '--green' : '--red'}`">
                          {{ formatCurrency(bettingHistoryDetail.winloss || 0) }}
                        </span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
  import type { TGame } from '~/types/game';
  import type { TBettingHistory } from '../../betting-history.type';
  import type { TBettingHistoryMapping } from '~/const/betting-history';

  type TProps = {
    visible: boolean;
    userName: string;
    gameDetail: TGame;
    bettingHistoryDetail: TBettingHistory;
    bettingHistoryMapping: TBettingHistoryMapping;
  }
  defineProps<TProps>()

  const emit = defineEmits<{
    (e: 'close'): void
  }>()

  const { formatCurrency, formatDateVN } = useCommon()

  // Method
  const handleClose = () => {
    emit('close')
  }

</script>
<style scoped>
  @import url('~/assets/css/betting-history/detail-mobile.css');

  .my-header {
    padding: 15px 0 15px;
    position: relative;
    margin-bottom: 8px;
  }

  .my-header.white {
    background-color: #fff;
    color: #333;
  }

  .my-header .my-header-left {
    width: 20px;
    position: absolute;
    top: 13px;
    left: 0px;
    width: 23px;
    margin-left: 1rem;
    vertical-align: middle;
  }

  .my-header .my-header-title {
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
    text-align: center;
  }
</style>
<style>
  #special-dialog>.v-overlay__content {
    height: 100vh !important;
    max-height: 100vh !important;
    margin: 0 !important;
  }
</style>