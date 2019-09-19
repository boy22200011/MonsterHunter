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
      ><img src="img/weapon_icon/GreatSword.jpg">
        <p>要說Monster Hunter最為標誌性的武器，當然立刻想到大劍。</p>

        <p>大劍能斬擊高點、亦能橫掃作大範圍攻擊，但因為笨重、起手慢、空隙大，對於新手來說可能比較難用。</p>

        <p>但其儲氣一擊斬下去的快感，往往令不少大劍士愛不釋手。使用大劍能磨練你對魔物動作的「先讀」能力，因落刀斬錯部位都會令傷害大減。</p>

        <p>大劍擁有相當不俗的防禦能力，嘗試挑戰新魔物或者高難度關卡時，大劍也能讓你安心地摸索。</p>

      </el-tab-pane>
      <el-tab-pane
        label="太刀"
        name="LongSword"
      ><img src="img/weapon_icon/LongSword.jpg">
        <p>太刀集機動性、攻撃力、攻擊範圍於一身，是一非常均衡且「有型」的武器，其連招系統互相貫通，可以在華麗流暢的動作之間作出大量輸出。擁有獨有的「練氣」系統，</p>

        <p>在使出整套氣刃斬時可以提升攻擊力等級，消耗一整槽練氣更加可以使出新招「氣刃兜割」，一口氣作出巨大傷害。</p>

        <p>雖然太刀沒有任何防禦手段，但在《Monster Hunter: World》中就加入了一招「看破斬」，</p>

        <p>可於一瞬間抵受魔物攻擊並同時儲集練氣，兩招新招都使原本已經十分平衡的太刀在攻、防方面都有所提升。</p>
      </el-tab-pane>
      <el-tab-pane
        label="單手劍"
        name="SwordShield"
      ><img src="img/weapon_icon/SwordShield.jpg">
        <p>非常適合新手使用的近戰武器，每招之間都可以隨意滾動，走位相當靈活；備有一個小盾，雖然防禦力一般，但在必要時仍然可以當作保命工具。</p>

        <p>另外，盾撃亦是單手劍動作系統中的重要一環，以斬撃結合盾撃的戰法，不單使輸出手段變得更多，盾撃更可以撃暈魔物，</p>

        <p>製造輸出空檔。雖然單手劍的輸出力比較低，但由於攻擊頻率高、能快速為魔物附加麻痺、毒、睡眠等不良屬性，</p>

        <p>又可以在不收刀的情況下使用道具，所以不少單手劍獵人會在出團時擔任輔助角色。</p>
      </el-tab-pane>
      <el-tab-pane
        label="雙手劍"
        name="DualBlades"
      ><img src="img/weapon_icon/DualBlades.jpg">
        <p>雙劍的由來，大概就是來自將單手劍的盾同樣換成劍，放棄防禦、使之成為全攻型的武器。</p>

        <p>由於是以雙手同時作輸出的關係，雙劍在一般情況下，傷害輸出已比單手劍高出一倍，再加上其獨有的「鬼人化」系統，使其攻擊能力更上一層樓。</p>
      </el-tab-pane>
      <el-tab-pane
        label="斬擊斧"
        name="SwitchAxe"
      ><img src="img/weapon_icon/SwitchAxe.jpg">
        <p>斬撃斧，是《Monster Hunter》系列中首件可以「變形」的武器，擁有「斧」及「劍」兩個形態，</p>

        <p>外觀看上去與大劍不相伯仲，然而看似笨重的背後，斬撃斧擁有相當豐富的連技系統，尤其喜歡打撃特效的獵人必然會一試愛上。</p>
      </el-tab-pane>
      <el-tab-pane
        label="充能斧"
        name="ChargeBlade"
      ><img src="img/weapon_icon/ChargeBlade.jpg">
        <p>繼斬撃斧之外的另一款變形武器，不過對比起斬撃斧，充能斧由單手劍變成大斧頭，變化就更為極端。</p>

        <p>充能斧的玩法，是以單手劍模式，以攻擊魔物的方式為斧頭模式充能，</p>

        <p>再由斧頭引出高攻撃力與及各式屬性，是另一款截然不同的斧頭。</p>
      </el-tab-pane>
      <el-tab-pane
        label="大槌"
        name="Hammer"
      ><img src="img/weapon_icon/Hammer.jpg">
        <p>魔物的頭部多數都是最脆弱，但攻擊風險也是最高的地方。而大錘士就是勇敢走去打頭的獵人，</p>

        <p>其攻擊距離短、硬直大、無法擋格且要承受高風險，但成功的話卻能得到打暈魔物的甘美回報，</p>

        <p>為團隊提供總攻擊的機會，可就是另一浪漫武器。</p>
      </el-tab-pane>
      <el-tab-pane
        label="狩獵笛"
        name="HuntingHorn"
      ><img src="img/weapon_icon/HuntingHorn.jpg">
        <p>在眾多武器當中，只有一種可以直接為隊友加血或其他增益效果（Buff），那就是狩獵笛。</p>

        <p>今作的狩獵笛在攻擊手段上與前作分別不大，然而吹奏樂曲上就比從前更為方便，</p>

        <p>如果你或你的團隊需要一個「奶媽」的話，狩獵笛絕對是你的必然之選。</p>
      </el-tab-pane>
      <el-tab-pane
        label="弓"
        name="Bow"
      ><img src="img/weapon_icon/Bow.jpg">
        <p>遠距離武器在《Monster Hunter》系列之中有一定歷史，而最為人所熟知的，就是弓箭，</p>

        <p>表面上弓的攻擊力似乎不及各種近戰兵器，但由歷代的高手表現所知，弓要爆發起來絕對比近戰武器更為恐怖。</p>

        <p>今集《Monster Hunter World》中的弓，威力更加比前作有過之而無不及，新增了「蓄力墊步」、「快速射撃」以及「龍之箭」等等新動作，</p>

        <p>使弓手不再是一味「蓄力>射撃>蓄力>射撃>」地無限循環，反而可以極為機動性地在魔物身旁遊走輸出。</p>
      </el-tab-pane>
      <el-tab-pane
        label="操蟲棍"
        name="InsectGlaive"
      ><img src="img/weapon_icon/InsectGlaive.jpg">
        <p>昆蟲對於《Monster Hunter》世界的獵人相信絕不陌生，然而操控一隻大甲蟲在狩獵時並肩作戰，</p>

        <p>就只有操蟲棍可以做到。操蟲棍擁有自成一格的強化系統，需要操控飛蟲從對方魔物身上採集精華，</p>

        <p>以提升自己的攻撃力、防禦力。操蟲棍獨有的起跳攻擊有機會發動騎乘攻擊，令操蟲棍變成魔物界的「騎乘之王」。</p>
      </el-tab-pane>
      <el-tab-pane
        label="長槍"
        name="Lance"
      ><img src="img/weapon_icon/Lance.jpg">
        <p>長槍乃一支巨形長槍及一巨盾組成，雖然攻擊頻率一般，但極長的槍身讓獵人得以享有頗大的攻擊範圍。</p>

        <p>在眾多《Monster Hunter》系列的武器當中，長槍都算是最不花巧的一員，連技欠奉而且極為沉重，</p>

        <p>然而長槍的防禦力屬全遊戲的最高水平，加上近兩代開始加入的防守反撃招數，叫不少老手獵人都愛不釋手。</p>
      </el-tab-pane>
      <el-tab-pane
        label="銃槍"
        name="GunLance"
      ><img src="img/weapon_icon/GunLance.jpg">
        <p>如果喜愛埋身轟炸魔物，那就不得不試Gunlance銃槍了。銃槍能進行斬擊及砲擊，而且後者有無視肉質的特性，</p>

        <p>面對堅硬的部位都能打出固定傷害。其華麗的龍擊砲、龍杭砲與Full Burst全彈發射，令浪漫主義者愛不釋手。</p>
      </el-tab-pane>
      <el-tab-pane
        label="輕弩"
        name="LightBowgun"
      ><img src="img/weapon_icon/LightBowgun.jpg">
        <p>一直以輕便、操作簡單見稱的輕弩，來到《MHW》更受新手歡迎，除了保有招牌的「速射」系統之外，</p>

        <p>今代在上彈時不再需要「企定定」，可以邊走位邊輸出，對遠程獵人而言當然是天大福音。雖然輕弩單兵火力一般，</p>

        <p>但就加入了新的「起爆龍彈」，使用得宜的話，火力輸出絕不比弓、重弩低！</p>
      </el-tab-pane>
      <el-tab-pane
        label="重弩"
        name="HeavyBowgun"
      ><img src="img/weapon_icon/HeavyBowgun.jpg">
        <p>比起招招見血的近戰武器，遠程武器在不少人的印象中都較為弱勢，但重弩就完全癲覆了這個印象。</p>

        <p>重弩過往憑著強大的火力於《Monster Hunter》系列中建立了不少威望，而在今作中，</p>

        <p>所有遠程武器的機動性都有所提升，以笨重見稱的重弩更加入了「特殊彈」的新輸出系統，繼續保有火力優勢。</p>
      </el-tab-pane>
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
