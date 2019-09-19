<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="items"
            label="Standard"
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="items"
            filled
            label="Filled style"
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="items"
            label="Outlined style"
            outlined
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="items"
            label="Solo field"
            solo
          ></v-select>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import Profile from './components/Profile'

export default {
  name: 'App',
  components: {
    Profile,
  },
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz']
  }),
}
</script>
