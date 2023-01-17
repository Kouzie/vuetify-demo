import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import {colors} from "vuetify/lib";

Vue.use(Vuetify);


export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: 'xs'
  },
  theme: {
    themes: {
      light: {
        primary: colors.cyan,
      },
      dark: {
        primary: '#2196F3',
      },
    },
  }
});
