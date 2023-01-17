<template>
  <v-container fluid>
    <v-card class="mt-5 pa-3">
      <v-row>
        <v-col>
          <v-card class="pa-3" outlined>col</v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>col</v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>col</v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="pa-3" outlined>col</v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>col</v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>col</v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <v-row>
        <v-col v-for="count in 12" :key="count" cols="12" sm="6" md="4" lg="3">
          <v-card class="pa-3" outlined>cols</v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

</style>
