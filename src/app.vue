<template>
  <div>
    <NuxtLayout>
      <v-app>
        <NuxtPage :page-key="route => route.fullPath" />
      </v-app>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
  useHead({
    script: [
      {
        children: `
        window.__lc = window.__lc || {};
        window.__lc.license = 18433041;
        window.__lc.integration_name = "manual_restart_trial";
        window.__lc.product_name = "livechat";
        ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
      `,
        type: 'text/javascript'
      }
    ],
    noscript: [
      {
        children: `<a href="https://www.livechat.com/chat-with/18433041/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com">LiveChat</a>`
      }
    ]
  })
</script>
<style>
  #chat-widget-minimized {
    display: none !important;
  }
</style>