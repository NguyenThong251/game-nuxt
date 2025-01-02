<template>
  <!-- <div class="mb-4">Thông tin cơ bản</div>
  <v-text-field :model-value="userInfo.name" label="Tên người dùng" disabled variant="outlined" density="compact" />
  <v-text-field :model-value="userInfo.realname" label="Tên thật" disabled variant="outlined" density="compact" />
  <v-btn variant="tonal" class="text-none" color="primary" @click="handleOpenChat">Liên hệ CSKH để thay đổi</v-btn>
  <v-divider class="mt-8 mb-4"></v-divider>
  <div class="mb-4">Bảo mật tài khoản</div>
  <div class="flex justify-between items-center">
    <div>
      <span>Mật khẩu đăng nhập: </span>
      <span>******</span>
    </div>
    <v-btn color="primary" variant="outlined" class="text-none" @click="authStore.handleOpenChangePasswordDialog">Sửa
      đổi</v-btn>
  </div> -->
  <div class="profile__title">
    <div class="profile__title__logo"><a href="./"><img src="/img/logo.svg" alt="TUT88"></a></div>
    <h1>Thông Tin Cá Nhân</h1>
    <div class="profile__info">
      <div class="user-row1 sp">
        <p class="user__tag">VIP1</p>
        <p class="user__username">Usenguyen000</p>
      </div>
      <div class="profile__info__email">
        <div class="profile__info__email_ttl">Email:</div>
        <div class="profile__info__email_name">e******t@gmail.com</div>
        <div class="profile__info__email_update"><a href="#updateEmail">Cập Nhật</a></div>
      </div>
      <div class="profile__info__phone">
        <div class="profile__info__phone_ttl">Số Điện Thoại:</div>
        <div class="profile__info__phone_name">04*****345</div>
        <div class="profile__info__phone_update"><a href="#updatePhone">Cập Nhật</a></div>
      </div>
    </div>
    <div class="back__button sp"><img src="/img/profile/icon_left.png" alt="icon"></div>
  </div>
  <div class="password-manager">
    <h2 class="password-manager__h2">Quản Lý Mật Khẩu</h2>
    <ul class="password-manager__list">
      <li><a href="#updatePassLogin"><img src="/img/profile/icon_pass1.png" alt="icon">mật khẩu đăng
          nhập</a></li>
      <li><a href="#createPass"><img src="/img/profile/icon_pass2.png" alt="icon">tạo mật khẩu rút
          tiền</a></li>
      <li><a href="#updatePass"><img src="/img/profile/icon_pass2.png" alt="icon">cập nhật mật khẩu rút
          tiền</a></li>
    </ul>
  </div>
  <!-- <div class="remodal popup__content" data-remodal-id="updateEmail" role="dialog">
      <div>
        <div class="popup__title">Cập Nhật Email</div>
        <div class="popup__fornm">
          <dl>
            <dt>Email hiện tại</dt>
            <dd><input type="email" placeholder="Nhập lại email hiện tại"></dd>
          </dl>
          <dl>
            <dt>Email mới</dt>
            <dd><input type="email" placeholder="Không được trùng với email hiện tại"></dd>
          </dl>
          <dl>
            <dt>Nhập lại Mật Khẩu</dt>
            <dd><input type="text" placeholder="Nhập lại mật khẩu"><span class="hide"><img
                  src="assets/img/profile/icon_hide.png" alt="hide"></span></dd>
          </dl>
        </div>
        <ul class="action__button">
          <li data-remodal-action="close" class="close__button" aria-label="Close">hủy</li>
          <li class="confirm__button">xác nhận</li>
        </ul>
      </div>
    </div>
    <div class="remodal popup__content" data-remodal-id="updatePhone" role="dialog">
      <div>
        <div class="popup__title">Số điện thoại hiện tại</div>
        <div class="popup__fornm">
          <dl>
            <dt>Email hiện tại</dt>
            <dd><input type="number" placeholder="Nhập lại số điện thoại hiện tại"></dd>
          </dl>
          <dl>
            <dt>Số điện thoại mới</dt>
            <dd><input type="number" placeholder="Không được trùng với số điện thoại hiện tại"></dd>
          </dl>
          <dl>
            <dt>Nhập lại Mật Khẩu</dt>
            <dd><input type="text" placeholder="Nhập lại mật khẩu"><span class="hide"><img
                  src="assets/img/profile/icon_hide.png" alt="hide"></span></dd>
          </dl>
        </div>
        <ul class="action__button">
          <li data-remodal-action="close" class="close__button" aria-label="Close">hủy</li>
          <li class="confirm__button">xác nhận</li>
        </ul>
      </div>
    </div>
    <div class="remodal popup__content" data-remodal-id="updatePassLogin" role="dialog">
      <div>
        <div class="popup__title">cập nhật mật khẩu đăng nhập</div>
        <div class="popup__fornm">
          <dl>
            <dt>Mật khẩu hiện tại</dt>
            <dd><input type="text" placeholder="Nhập lại mật khẩu hiện tại"></dd>
          </dl>
          <dl>
            <dt>Mật khẩu mới</dt>
            <dd><input type="text" placeholder="Không được trùng với mật khẩu hiện tại"></dd>
          </dl>
          <dl>
            <dt>Nhập lại Mật Khẩu</dt>
            <dd><input type="text" placeholder="Nhập lại mật khẩu"><span class="hide"><img
                  src="assets/img/profile/icon_hide.png" alt="hide"></span></dd>
          </dl>
        </div>
        <ul class="action__button">
          <li data-remodal-action="close" class="close__button" aria-label="Close">hủy</li>
          <li class="confirm__button">xác nhận</li>
        </ul>
      </div>
    </div>
    <div class="remodal popup__content" data-remodal-id="createPass" role="dialog">
      <div>
        <div class="popup__title">tạo mật khẩu rút tiền</div>
        <div class="popup__fornm">
          <dl>
            <dt>Mật khẩu rút tiền mới</dt>
            <dd><input type="text" placeholder="Không được trùng với mật khẩu đăng nhập"></dd>
          </dl>
          <dl>
            <dt>Nhập lại Mật Khẩu rút tiền</dt>
            <dd><input type="text" placeholder="Nhập lại mật khẩu"><span class="hide"><img
                  src="assets/img/profile/icon_hide.png" alt="hide"></span></dd>
          </dl>
        </div>
        <ul class="action__button">
          <li data-remodal-action="close" class="close__button" aria-label="Close">hủy</li>
          <li class="confirm__button">xác nhận</li>
        </ul>
      </div>
    </div>
    <div class="remodal popup__content" data-remodal-id="updatePass" role="dialog">
      <div>
        <div class="popup__title">cập nhật mật khẩu rút tiền</div>
        <div class="popup__fornm">
          <dl>
            <dt>Mật khẩu rút tiền hiện tại</dt>
            <dd><input type="text" placeholder="Nhập lại mật khẩu rút tiền hiện tại"></dd>
          </dl>
          <dl>
            <dt>Mật khẩu rút tiền mới</dt>
            <dd><input type="text" placeholder="Không được trùng với mật khẩu rút tiền hiện tại"></dd>
          </dl>
          <dl>
            <dt>Nhập lại Mật Khẩu rút tiền</dt>
            <dd><input type="text" placeholder="Nhập lại mật khẩu"><span class="hide"><img
                  src="assets/img/profile/icon_hide.png" alt="hide"></span></dd>
          </dl>
        </div>
        <ul class="action__button">
          <li data-remodal-action="close" class="close__button" aria-label="Close">hủy</li>
          <li class="confirm__button">xác nhận</li>
        </ul>
      </div>
    </div> -->
  <!-- <div class="profile-promotion">
    <h2 class="profile-promotion__title">kHUYẾN MÃI</h2>
    <ul class="profile-promotion__banner">
      <li><a href="#"><img src="/img/profile/banner.png" alt="banner"></a></li>
      <li><a href="#"><img src="/img/profile/banner.png" alt="banner"></a></li>
      <li><a href="#"><img src="/img/profile/banner.png" alt="banner"></a></li>
      <li><a href="#"><img src="/img/profile/banner.png" alt="banner"></a></li>
    </ul>
    <p class="profile-promotion__btn"><a href="#">Xem Tất Cả</a></p>
  </div> -->
</template>
<script setup lang="ts">
import { useAuthStore } from '~/store/auth';
import { useUserInfo } from '../user-info.model';
const { userInfo } = useUserInfo()
const authStore = useAuthStore()
const { handleOpenChat } = useCommon()
</script>
<style scoped>
@import url('~/assets/cssnew/profile.css');
</style>
