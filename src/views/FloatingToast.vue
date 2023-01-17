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

      <div v-for="[key, value] in alertMap" :key="key">
        <v-alert :type="value.type">{{ value.message }}</v-alert>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      alertMap: new Map() // JS Map 은 순서보장
    }
  },
  created() {
    this.alertMap.set(1, {type: 'info', message: 'message1'});
    this.alertMap.set(2, {type: 'info', message: 'message2'});
    this.alertMap.set(3, {type: 'info', message: 'message3'});
  },
  methods: {
    addAlert(type, message) {
      console.log("test")
      let key = new Date().getTime()
      let obj = {key, type, message};
      this.alertMap.set(key, obj);
      console.log(this.alertMap)
      setTimeout(() => {
        this.alertMap.delete(key);
      }, 2000)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
