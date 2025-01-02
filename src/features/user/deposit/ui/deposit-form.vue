<template>
  <v-alert v-if="state.isSubmited && alertWarning" density="compact" :text="alertWarning" type="warning" style="margin-bottom: 10px;" />
  <div class="w-full">
    <v-text-field v-model="state.money" label="Số tiền" variant="outlined" density="compact" />
    <v-btn class="text-none" color="primary" :loading="loading" @click="handleSubmit">
      Nạp tiền
    </v-btn>
  </div>
</template>
<script setup lang="ts">
  import type { TDepositRequest } from '../deposit.type';

  const emit = defineEmits<{
    (e: 'submit', { money }: TDepositRequest): void
  }>()

  // Type 
  type TState = {
    money: number,
    isSubmited: boolean,
  }

  // Props
  const props = defineProps<{
    loading: boolean
  }>();

  // State
  const state = reactive<TState>({
    money: 0,
    isSubmited: false
  })

  // Computed
  const alertWarning = computed(() => {
    if (!state.money || state.money === 0 || isNaN(state.money)) {
      return 'Số tiền không hợp lệ.'
    }
    return ''
  })

  // Method
  const handleSubmit = () => {

    state.isSubmited = true
    if (alertWarning.value) {
      return;
    }

    emit('submit', { money: state.money })
    state.isSubmited = false
  }

</script>
<style scoped>
  .title {
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 700;
    display: block;
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
      width: calc((100% - 50px) / 6);
    }

    .bank-card:nth-child(6n) {
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