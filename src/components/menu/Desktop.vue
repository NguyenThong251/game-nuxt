<template>
  <ul class="nav">
    <template v-for="category in categories">
      <li>
        <NuxtLink :to="category.href" class="category">
          <span>{{ category.title }}</span>
        </NuxtLink>
        <div class="menu-con">
          <div class="inner single-brand">
            <template v-for="game in category.data">
              <a class="box F-GAME cursor-pointer" @click="() => handleClickGame({
                id: game.id,
                game_type: game.game_type,
                ...(game?.game_code ? { game_code: game.game_code } : {}),
                api_name: game.api_name
              })">
                <div class="lo-left">
                  <img :src="game?.logo_url || game?.img_url" :alt="game?.title || game?.name" class="lo">
                </div>
                <div class="lo-right">
                  <p>{{ game?.title || game?.name }}</p>
                </div>
              </a>
            </template>
          </div>
        </div>
      </li>
    </template>
  </ul>
  <div class="kf-box">
    <NuxtLink to="/promotion" class="kf-item promotions">
      <img src="/image/desktop/header/khuyen-mai.png">
      <p>Khuyến mãi</p>
    </NuxtLink>
    <button class="kf-item" @click="handleOpenChat">
      <img src="/image/desktop/header/ho-tro.png">
      <p>Hỗ Trợ</p>
    </button>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    categories: Array<{
      title: string,
      href: string,
      gameType: number,
      data: Array<any>
    }>
  }>()

  const { handleClickGame, handleOpenChat } = useCommon()
</script>
