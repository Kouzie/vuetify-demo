<template>
  <v-container>
    <v-card className="pa-3">
      <v-row>
        <v-col cols="auto">
          <v-btn color="blue" @click="addAlert('info', 'test info message')">Info</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="orange" @click="addAlert('warning', 'test info message')">Warning</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="success" @click="addAlert('success', 'test info message')">Success</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="error" @click="addAlert('error', 'test info message')">Error</v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card className="pa-3">
      <v-alert type="info">info</v-alert>
      <v-alert type="warning">warning</v-alert>
      <v-alert type="success">success</v-alert>
      <v-alert type="error">error</v-alert>
    </v-card>
    <v-card>

      <div v-for="alert in alertList" :key="alert.key">
        <v-alert :type="alert.type">{{ alert.message }}</v-alert>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      alertList: [] // JS Map 은 순서보장
    }
  },
  created() {
    this.alertList.push({key: 1, type: 'info', message: 'message1'});
    this.alertList.push({key: 2, type: 'info', message: 'message2'});
    this.alertList.push({key: 3, type: 'info', message: 'message3'});
  },
  methods: {
    addAlert(type, message) {
      let key = new Date().getTime()
      let obj = {key, type, message};
      Vue.set(this.alertList, this.alertList.length, obj);
      console.log(this.alertList)
      setTimeout(() => {
        let index = -1;
        for (let i = 0; i < this.alertList.length; i++) {
          console.log(this.alertList[i].key, key)
          if (this.alertList[i].key === key) {
            index = i;
          }
        }
        if (index > 0) {
          Vue.delete(this.alertList, index)
        }
      }, 2000)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
