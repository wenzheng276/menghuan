<template>
  <div>
    <van-row>
      <van-col span="12">
        <van-col span="6"> 攻击资质 </van-col>
        <van-col span="18">
          <van-progress
            :percentage="data[dataindex].skill.attackpercentage"
            stroke-width="8"
          />
        </van-col>
      </van-col>
      <van-col span="12">
        <van-col span="6"> 防御资质 </van-col>
        <van-col span="18">
          <van-progress
            :percentage="data[dataindex].skill.defendpercentage"
            stroke-width="8"
          />
        </van-col>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="12">
        <van-col span="6"> 体力资质 </van-col>
        <van-col span="18">
          <van-progress
            :percentage="data[dataindex].skill.strenpercentage"
            stroke-width="8"
          />
        </van-col>
      </van-col>
      <van-col span="12">
        <van-col span="6"> 法力资质 </van-col>
        <van-col span="18">
          <van-progress
            :percentage="data[dataindex].skill.manapercentage"
            stroke-width="8"
          />
        </van-col>
      </van-col> </van-row
    ><van-row>
      <van-col span="12">
        <van-col span="6"> 速度资质 </van-col>
        <van-col span="18">
          <van-progress
            :percentage="data[dataindex].skill.speedpercentage"
            stroke-width="8"
          />
        </van-col>
      </van-col>
      <van-col span="12">
        <van-col span="6"> 宠物成长 </van-col>
        <van-col span="18">
          {{ data[dataindex].skill.growup }}
        </van-col>
      </van-col>
    </van-row>

    <!-- 12技能栏目 -->
    <!-- <van-grid :column-num="4">
              <van-grid-item
                v-for="value in 12"
                :key="value"
                icon="photo-o"
                text="1"
              /> </van-grid> -->

    <van-grid :column-num="4">
      <van-grid-item
        v-for="(item, index) in data[dataindex].skill.skillname"
        :key="index"
        :icon="require('@/assets/miniskill/magic-arts/' + item + '.png')"
        :text="item"
        @click="showmessage(item)"
      />
      <!-- :icon="require('@/assets/miniskill/magic-arts/' + item + '.png')" -->
    </van-grid>
    <van-popup
      v-model="shownatualtext"
      round
      position="left"
      style="width: 30%; height: 50%"
    >
      <van-row>
        <van-col span="8" offset="2">
          <van-image
            width="100px"
            height="100px"
            fit="contain"
            :src="
              require('@/assets/miniskill/magic-arts/' + defaultsrc + '.png')
            "
            alt="111"
          />
        </van-col>
        <van-col span="6" v-text="natualname"></van-col>
      </van-row>
      <van-row>
        <van-col span="20" offset="2" v-text="decnaturaltext"></van-col>
      </van-row>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shownatualtext: false,
      defaultsrc: "double-hit",
      decnaturaltext: "",
      natualname:"",
    };
  },
  props: {
    data: {},
    dataindex: {
      type: Number,
    },
  },
  methods: {
    showmessage(item) {
      this.shownatualtext = true;
      this.defaultsrc = item;

      if (item == "double-hit") {
        this.decnaturaltext =
          "45%的几率连续两次普通物理攻击，拥有此技能物理伤害结果会降低25%";
          this.natualname="连击"
      } else if (item == "rush") {
        this.decnaturaltext =
          "物理攻击时忽视对方一定的物理防御,目标的物理防御越高，忽视效果越好";
          this.natualname="突进"
      } else if (item == "strength") {
        this.decnaturaltext =
          "提升宠物少量的物理攻击力,如果对方有防御或高级防御技能,物理伤害结果会减少20%";
           this.natualname="强力"
      } else if (item == "suck-blood") {
        this.decnaturaltext = "物理攻击时,5吸收伤害结果*20%的气血。无法吸收鬼魂、高级鬼魂宠物的气血";
        this.natualname="吸血"
      } else if (item == "sure-kill") {
        this.decnaturaltext = "物理攻击时暴击概率增加10%";
        this.natualname="必杀"
      } else if (item == "counterattack") {
        this.decnaturaltext = "受到物理攻击时有10%几率自动反击。不会被宠物连击";
        this.natualname="反击"
      } else if (item == "double-hit-magic") {
        this.decnaturaltext =
          "法术攻击时,有20%概率发动第二次攻击，伤害是第一次的一半";
          this.natualname="法术连击"
      } else if (item == "fall-stone") {
        this.decnaturaltext =
          "土系单体法术，同时最大5%概率晕眩目标使目标无法施法和攻击，当魔力点数大于自身等级*5时所有触发达最大概率,持续2回合资质";
          this.natualname="落岩"
      } else if (item == "understand-heart") {
        this.decnaturaltext = "法术攻击时忽视对方少量的法术防御";
        this.natualname="会心"
      } else if (item == "magic-arts-crit") {
        this.decnaturaltext = "法术攻击时暴击概率增加10%";
        this.natualname="法爆"
      } else if (item == "small-fire") {
        this.decnaturaltext =
          "火系单体法术，同时最大有12%给目标附加灼烧状态,持续扣血，当魔力点数大于自身等级*5时所有触发达最大概率，持续3回合";
          this.natualname="烈火"
      } else if (item == "magic-heart") {
        this.decnaturaltext = "对敌人的法术伤害结果提高10%";
        this.natualname="魔之心"
      }
    },
  },
};
</script>