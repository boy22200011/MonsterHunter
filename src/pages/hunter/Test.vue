<template>
  <card>
    <h1>測試撈資料</h1>
  </card>
</template>

<script>
import TestService from 'src/service/testService.js'
export default {
  data() {
    return {
      dataSource: []
    }
  },
  mounted() {
    this.dataBind()
  },
  methods: {
    dataBind() {
      TestService.get().then(response => {
        console.log(...response.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
