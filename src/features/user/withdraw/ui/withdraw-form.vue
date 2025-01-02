<template>
  <v-alert v-if="state.isSubmited && alertWarning" density="compact" :text="alertWarning" type="warning" />
  <div class="box mt-2">
    <p class="text">Số Dư</p>
    <p class="number">{{ formatedBalance }}</p>
    <span class="icon"><i class="fas fa-sync-alt"></i></span>
  </div>

  <v-form fast-fail @submit.prevent="handleSubmit">
    <ul class="bank-card-list my-8">
      <li v-for="bank in userBanks" :key="bank.id" :class="['bank-card', state.bank?.id === bank.id ? 'is-active' : '']"
        @click="state.bank = bank">
        <img :src="BANK_LOGO_MAPPING[bank.bank_type]" :alt="bank.card_no + ' ' + bank.bank_type_text">
        <div class="px-2 pb-2 text-gray-500 text-sm">
          <span>STK: </span>
          <span>{{ bank.card_no }}</span>
        </div>
      </li>
    </ul>
    <div class="mt-0 flex justify-between">
      <label>Tên chủ thẻ</label>
      <span>{{ state.bank?.owner_name || '---' }}</span>
    </div>
    <div class="mt-4 flex justify-between">
      <label>Tài khoản ngân hàng</label>
      <span>{{ state.bank?.card_no || '---' }}</span>
    </div>
    <v-text-field v-model="state.money" class="mt-4" label="Số tiền rút" variant="outlined" density="compact" />
    <v-btn :loading="loading" color="primary" class="text-none" type="submit" block>Rút tiền</v-btn>
  </v-form>
</template>
<script setup lang="ts">
  import type { TMemberBank } from '~/features/auth/auth.type';
  import type { TWithdrawRequest } from '../withdraw.type';
  import type { TMe } from '~/types/auth';
  import { BANK_LOGO_MAPPING } from '~/const/bank';

  const props = defineProps<{
    loading: boolean,
    formatedBalance: string,
    userInfo: TMe,
    userBanks: Array<TMemberBank>
  }>()
  const emit = defineEmits<{
    (e: 'submit', payload: TWithdrawRequest): void
  }>()

  type TState = {
    bank: TMemberBank | null;
    money: number;
    password: string;
    isSubmited: boolean;
  }

  const state = reactive<TState>({
    bank: null,
    money: 0,
    password: '',
    isSubmited: false,
  })
  const alertWarning = computed(() => {
    if (!state.bank) {
      return 'Thẻ ngân hàng bắt buộc'
    }

    if (state.money === 0) return 'Số tiền bắt buộc nhập'
    if (state.money > props.userInfo?.money) return 'Số tiền phải nhỏ hơn số dư'
    //if (state.money < 30000) return 'Số tiền rút tối thiểu là 30.000'
    if (isNaN(state.money)) return 'Số tiền không hợp lệ'
    return ''
  })

  // Method
  const handleSubmit = async (event: Event) => {
    state.isSubmited = true
    if (alertWarning.value) {
      return;
    }

    // const results: any = await event
    // if (!results.valid) return;

    emit('submit', {
      name: state.bank!.owner_name,
      money: `${state.money}`,
      account: state.bank!.card_no,
      member_bank_id: state.bank!.id,
      member_bank_text: state.bank!.bank_type_text,
      member_remark: "",
      // qk_pwd: ""
    })

    state.isSubmited = false
  }

</script>
<style scoped>
  .box {
    background: linear-gradient(270deg, #0982fe, #64b7ff);
    padding: 20px 10px;
    color: #fff;
    font-weight: 500;
    border-radius: 5px;
    position: relative;
    font-size: 15px;
  }

  .box .icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .box .number {
    margin-top: 5px;
    font-size: 18px;
  }

  .bank-card-list {
    display: flex;
    flex-wrap: wrap;
  }

  .bank-card {
    margin-right: 10px;
    margin-bottom: 10px;
    position: relative;
    cursor: pointer;
    transition: 0.3s;
  }

  @media screen and (min-width: 1024px) {
    .bank-card {
      width: calc((100% - 50px) / 5);
    }

    .bank-card:nth-child(5n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 1023px) {
    .bank-card {
      width: calc((100% - 10px) / 2);
    }

    .bank-card:nth-child(2n) {
      margin-right: 0;
    }
  }

  .bank-card:hover {
    opacity: 0.7;
  }

  .bank-card:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 6px;
    border: 1px solid #ebecf0;
  }

  .bank-card.is-active {
    position: relative;
    border-radius: 6px;
  }

  .bank-card.is-active:before {
    border: 1px solid #0982fe;
  }

  .bank-card.is-active::after {
    content: "";
    z-index: 2;
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 20px;
    height: 20px;
    background: 0 0/100% no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAZlBMVEUAAACA//8zmf8JhP8JhP8Kg/8Jg/8Jg/8Jgv8Jg/8Jgv8Jgv4Kgv4NhP4OhP4ViP4pkv47m/4/nf5Anv5Tp/5VqP5frv5+vf5/vv6iz/6j0P663P7H4v7e7v7j8P7y+P76/P7///96VFIuAAAAC3RSTlMAAgVRVYCKpdnc8yMpdBMAAADeSURBVEjHndNZEoIwEEVRnNGLgjMqKtn/JrVALSED8PozlVOd9BBFw2OmGBSDYlAMikExKAbFoBgUg2JQDIpBMSgGxaAYFINiUAyKQTEoBsWgGBSDYlAMvc3+lnYgh3maIg0ipzGmWAeQx5hzINPXbHwGvzneM4/Bb0rzyNwGn9mW74uVsg2+GiRXU6tdZfJAc//qllwqdbLztFCj1rUydp4mavXnp/LA7Fk9/ag8MLCOua6UbVbhXXgr2xB37E9ycBwu+uxcO6aCWY6HGyaCmStmNPw/Q9+2ihfTugYvK6lCAEw4uaMAAAAASUVORK5CYII=);
  }
</style>