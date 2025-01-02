<template>
  <v-form fast-fail @submit.prevent="handleSubmit">
    <v-text-field v-model="state.createBankPayload.owner_name" :rules="rules.ownerName" label="Tên chủ thẻ"
      variant="outlined" density="compact" />
    <v-text-field v-model="state.createBankPayload.card_no" :rules="rules.cardNo" label="Số tài khoản"
      variant="outlined" density="compact" />
    <div class="dropdown-container" @click="toggleDropdown">
      <div class="dropdown-selected">
        {{ selectedBank || 'Chọn ngân hàng' }}
        <span class="dropdown-icon" :class="{ open: isOpen }">&#9662;</span>
      </div>
      <ul v-if="isOpen" class="dropdown-list">
        <li v-if="userBankTypeList.length === 0" class="dropdown-item no-data">
          No Bank
        </li>
        <li v-else v-for="item in userBankTypeList" :key="item.key" @click.stop="selectBank(item)"
          class="dropdown-item">
          {{ item.value }}
        </li>
      </ul>
    </div>
    <div class="input-details">
      <p v-if="errors.bankType" class="error-message">{{ errors.bankType }}</p>
    </div>
    <v-text-field v-model="state.createBankPayload.bank_address" :rules="rules.bankAddress" label="Chi nhánh"
      variant="outlined" density="compact" />
    <v-btn :loading="loading" class="text-none" color="primary" type="submit" block>Tạo Tài Khoản</v-btn>
  </v-form>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, reactive } from 'vue';
import type { TCreateBankBody } from '../../bank.type';
import { useAuthStore } from '~/store/auth';

type TProps = {
  loading: boolean;
}
type TState = {
  createBankPayload: TCreateBankBody;
}

defineProps<TProps>()

const emit = defineEmits<{
  (e: 'submit', body: TCreateBankBody): void
}>()

// State
const authStore = useAuthStore()
const { userBankTypeList, userInfo } = storeToRefs(authStore)
const state = reactive<TState>({
  createBankPayload: {
    member_id: '',
    card_no: '',
    bank_address: '',
    bank_type: '',
    owner_name: ''
  }
})
const rules = {
  cardNo: [
    (value: string) => {
      if (!value) return 'Số tài khoản bắt buộc';
      return true;
    }
  ],
  bankAddress: [
    (value: string) => {
      if (!value) return 'Chi nhánh bắt buộc';
      return true;
    }
  ],
  ownerName: [
    (value: string) => {
      if (!value) return 'Tên chủ thẻ bắt buộc';
      return true;
    }
  ],
  // bankType: [
  //   (value: string) => {
  //     if (!value) return 'Ngân hàng bắt buộc';
  //     return true;
  //   }
  // ],
}

const isOpen = ref(false);
const selectedBank = ref('');
const errors = reactive({
  bankType: '',
});
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = (event: Event) => {
  const dropdown = document.querySelector('.dropdown-container');
  if (dropdown && !dropdown.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

const selectBank = (item: { key: string; value: string }) => {
  state.createBankPayload.bank_type = item.key;
  selectedBank.value = item.value;
  isOpen.value = false;
  errors.bankType = '';
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});
onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown);
});

// Validate bankType
const validateBankType = () => {
  errors.bankType = !state.createBankPayload.bank_type
    ? 'Ngân hàng bắt buộc'
    : '';
};

// Method
const handleSubmit = async (event: Event) => {
  validateBankType();
  const result: any = await event;
  if (!result.valid) return;

  if (!errors.bankType) {
    emit('submit', state.createBankPayload)
  }
};
</script>
<style scoped>
.dropdown-container {
  position: relative;
  width: 100%;
  border: 1px solid #9e9e9e;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #fff;
  font-size: 16px;
  color: #333;
}

.dropdown-selected {
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: var(--v-medium-emphasis-opacity);
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #9e9e9e;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  margin-top: 2px;
  padding: 0;
  list-style: none;
}

.dropdown-item {
  padding: 10px 12px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.dropdown-icon {
  transition: transform 0.3s ease;
}

.dropdown-icon.open {
  transform: rotate(180deg);
}

.input-details {
  padding-inline: 16px;
  align-items: flex-end;
  display: flex;
  font-size: .75rem;
  font-weight: 400;
  grid-area: messages;
  justify-content: space-between;
  letter-spacing: .0333333333em;
  line-height: normal;
  min-height: 22px;
  overflow: hidden;
  padding-top: 6px;
}

.error-message {
  color: #B00020;
  font-size: 12px;
  line-height: 12px;
  min-height: 14px;
  color: (176, 0, 32);
}
</style>