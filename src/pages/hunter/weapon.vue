<template>
  <card>
    <h1>武器介紹</h1>
    <el-tabs
      v-model="activeName"
      type="card"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="大劍"
        name="GreatSword"
      ><img src="img/weapon_icon/GreatSword.jpg"></el-tab-pane>
      <el-tab-pane
        label="太刀"
        name="LongSword"
      ><img src="img/weapon_icon/LongSword.jpg"></el-tab-pane>
      <el-tab-pane
        label="單手劍"
        name="SwordShield"
      ><img src="img/weapon_icon/SwordShield.jpg"></el-tab-pane>
      <el-tab-pane
        label="雙手劍"
        name="DualBlades"
      ><img src="img/weapon_icon/DualBlades.jpg"></el-tab-pane>
      <el-tab-pane
        label="斬擊斧"
        name="SwitchAxe"
      ><img src="img/weapon_icon/SwitchAxe.jpg"></el-tab-pane>
      <el-tab-pane
        label="充能斧"
        name="ChargeBlade"
      ><img src="img/weapon_icon/ChargeBlade.jpg"></el-tab-pane>
      <el-tab-pane
        label="大槌"
        name="Hammer"
      ><img src="img/weapon_icon/Hammer.jpg"></el-tab-pane>
      <el-tab-pane
        label="狩獵笛"
        name="HuntingHorn"
      ><img src="img/weapon_icon/HuntingHorn.jpg"></el-tab-pane>
      <el-tab-pane
        label="弓"
        name="Bow"
      ><img src="img/weapon_icon/Bow.jpg"></el-tab-pane>
      <el-tab-pane
        label="操蟲棍"
        name="InsectGlaive"
      ><img src="img/weapon_icon/InsectGlaive.jpg"></el-tab-pane>
      <el-tab-pane
        label="長槍"
        name="Lance"
      ><img src="img/weapon_icon/Lance.jpg"></el-tab-pane>
      <el-tab-pane
        label="銃槍"
        name="GunLance"
      ><img src="img/weapon_icon/GunLance.jpg"></el-tab-pane>
      <el-tab-pane
        label="輕弩"
        name="LightBowgun"
      ><img src="img/weapon_icon/LightBowgun.jpg"></el-tab-pane>
      <el-tab-pane
        label="重弩"
        name="HeavyBowgun"
      ><img src="img/weapon_icon/HeavyBowgun.jpg"></el-tab-pane>
    </el-tabs>
  </card>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'GreatSword'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
