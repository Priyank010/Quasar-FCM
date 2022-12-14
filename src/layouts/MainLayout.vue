<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      {{token}}
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { getMessaging, getToken } from "firebase/messaging";
const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      token:null
    }
  },
  created(){
    if(this.$q.platform.is.desktop) {
        this.webToken();
    } else {
        if(this.$q.platform.is.cordova) {
            if(this.$q.platform.is.android) {
                this.androidToken();
            } else if(this.$q.platform.is.ios) {
                // this.androidToken();
            }
        } else {
            this.webToken();
        }
    }
  },
  methods : {
    webToken: async function() {
      const messaging = getMessaging();
      getToken(messaging, { vapidKey: 'BNaO9Gqd-i7Z9Rj_cVMsEPYSfctZWLgIJG4PXeXLyzOBH0_JBLsQV5zKGKmwmL0yU8km7LDU4v_yqMtwIJd6SP4' }).then((currentToken) => {
        if (currentToken) {
          this.token = currentToken
          console.log(currentToken);
          // this.postFcmToken(currentToken)
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
    },
    androidToken: async function() {
      var fcmToken = await FCM.getToken()
      this.token = fcmToken
      console.log(fcmToken)
      // this.postFcmToken(fcmToken)
    },
  }
}
</script>
