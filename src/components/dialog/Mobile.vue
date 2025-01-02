<template>
  <v-dialog :model-value="visible" fullscreen>
    <v-card>
      <v-card-text class="px-0 py-0" style="background: #eff5fb;">
        <div class="my-header white">
          <div class="my-header-left">
            <NuxtLink :to="backToPath" class="cursor-pointer">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAfCAYAAACVgY94AAACbklEQVRYhcWXTYhNYRjHf9cwxiRq0Lio0U2Rj3STbCgLiZJC+chKlJTULJgsbbAzi5lhJYQSSqTIgpqGEhtJsyELZmjGwkdi0NXT+9zucZ973rnnznmPX926Pf9zzvvvfc/zcXLFYpGETAZuAltjbusEuk20QSYlvC0HXPCYu5amORow2AvsNVHHK+CAiU6QJAZPAodM1PEF2AF8M0pGBo8Bx03UUQL2A4NGSYF6DB4ETptohTPADRPNyOAefe9yRnH0A10mmiI+g1s0Y5uM4hgGdgK/jZKBwfVaMpqN4vgF7AI+GCVlahlcDdwCWo1SoUuPNzjVBpcBd4GZnoWvp12MfUQNFoB7wBzP9YNaUkpGCWxwHnAfWGCuqCBFeDvw1SiBDbbpzi0y6r9M13ZWmsBPMn6VPlVK15OYZ22MGjwHrDB2wiAlq0/XLWnr/FNjpR5gqvxpyufzF4Ep5pJwzAeGgOdapmYDa6pWmwX8kEoh8+AdLcpZ8glYAoxqxZDkm1u1/ndguezgA2Az0J6hwVbdpdvAT+CjJmAUOdVCeaKWbX80TqLISLUSeGuUgJTLzHtgE/DOs9QM4JKnNwchWqhf61GPeBZaBxw10YwMCi81YT6bKyucABJ/aTVKrWHhKbBNs6gWMuFcBqb9L4PCQ2A3MGYUx1LgVEhjZeIMClIf98VUeuFItCWFwmdQuAocjplepJee114eDCnU4z37mbadDUZxpaegM2IQ6jEoDAAtwFqjuCH3DfDCKCmQ5MNdvovPmqhDpo8OE83YIPo+XjFRd9QyFaXeZeo94jKSLJLd0pMXV2kLdep+nJo74C+xynQWqaCbiwAAAABJRU5ErkJggg=="
                class="arrow">
            </NuxtLink>
          </div>
          <h2 class="my-header-title">
            <span>{{ title }}</span>
          </h2>
        </div>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
  defineProps<{ visible: boolean; title: string; backToPath: string; }>()
</script>
<style scoped>
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