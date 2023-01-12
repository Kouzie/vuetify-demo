<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" :src="require('@/assets/sitebar.jpg')" dark>
      <template v-slot:img="props">
        <v-img :gradient="gradient" v-bind="props">
        </v-img>
      </template>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          active-class="primary"
          class="py-1"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      gradient: 'rgba(0,0,0,.7), rgba(0,0,0,.7)',
      drawer: true,
      items: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard', to: "/"},
        {title: 'GridSystem', icon: 'mdi-view-dashboard', to: "/grid-system"},
        {title: 'Breakpoints', icon: 'mdi-view-dashboard', to: "/breakpoints"},
        {title: 'GridListPage', icon: 'mdi-view-dashboard', to: "/grid-list-page"},
        {title: 'Typography', icon: 'mdi-view-dashboard', to: "/typography"},
        {title: 'Tables', icon: 'mdi-view-dashboard', to: "/tables"},
        {title: 'Forms', icon: 'mdi-view-dashboard', to: "/forms"},
        {title: 'Buttons', icon: 'mdi-view-dashboard', to: "/buttons"},
        {title: 'Icons', icon: 'mdi-view-dashboard', to: "/icons"},
      ],
      right: null,
    }
  },
}
</script>
