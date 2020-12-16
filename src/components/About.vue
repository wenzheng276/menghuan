<template>
  <div>
    <h1>梦开始的地方</h1>

    <van-tabbar v-model="active" :fixed="false">
      <van-tabbar-item icon="home-o">地图</van-tabbar-item>
      <van-tabbar-item icon="search">活动</van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="showPet">宠物 </van-tabbar-item>

      <van-tabbar-item icon="friends-o">人物</van-tabbar-item>
    </van-tabbar>

    <van-popup
      v-model="show"
      round
      position="center"
      style="width: 95%; height: 95%"
    >
      <div
        style="float: left; width: 49%; height: 100%; border: 1px solid black"
      >
        <!-- 1 -->
        <div style="text-align：center" @click="add()">
          宠物属性{{ $store.state.counter }}
        </div>
        <van-row>
          <van-cell title="宝宝" is-link arrow-direction="down" value="110级" />
        </van-row>
        <div
          style="
            width: 2%;
            height: 8%;
            margin-top: 20px;
            border: 1px solid black;
          "
        >
          图鉴
        </div>

        <div
          style="
            width: 2%;
            height: 16%;
            margin-top: 40px;
            border: 1px solid black;
          "
        >
          凤凰记忆
        </div>
        <div style="margin-top: -120px">
          <van-image
            width="100px"
            height="100px"
            fit="contain"
            :src="require('@/assets/miniskill/magic-arts/fall-stone.png')"
            alt="111"
          />
        </div>
        <div style="margin-top: 20px; text-align: center">评分 1？？？</div>
        <div>
          <van-grid :column-num="4">
            <van-grid-item
              v-for="(item, index) in pets"
              :key="index"
              icon="photo-o"
              :text="item.name"
              @click="petschange(index)"
            />
          </van-grid>
        </div>
      </div>

      <div
        style="float: right; width: 49%; height: 100%; border: 1px solid red"
      >
        <!-- 2 -->

        <van-tabs v-model="actives">
          <van-tab title="标签 1">内容 1 </van-tab>
          <van-tab title="标签 2">
            <natural-endowments
              :data="pets"
              :dataindex="petsindex"
            ></natural-endowments>
          </van-tab>
          <van-tab title="资质技能">
            <!-- 资质栏目 -->
            <van-row>
              <van-col span="12">
                <van-col span="6"> 攻击资质 </van-col>
                <van-col span="18">
                  <van-progress :percentage="50" stroke-width="8" />
                </van-col>
              </van-col>
              <van-col span="12">
                <van-col span="6"> 防御资质 </van-col>
                <van-col span="18">
                  <van-progress :percentage="50" stroke-width="8" />
                </van-col>
              </van-col>
            </van-row>
            <van-row>
              <van-col span="12">
                <van-col span="6"> 体力资质 </van-col>
                <van-col span="18">
                  <van-progress :percentage="50" stroke-width="8" />
                </van-col>
              </van-col>
              <van-col span="12">
                <van-col span="6"> 法力资质 </van-col>
                <van-col span="18">
                  <van-progress :percentage="50" stroke-width="8" />
                </van-col>
              </van-col> </van-row
            ><van-row>
              <van-col span="12">
                <van-col span="6"> 速度资质 </van-col>
                <van-col span="18">
                  <van-progress :percentage="50" stroke-width="8" />
                </van-col>
              </van-col>
              <van-col span="12">
                <van-col span="6"> 宠物成长 </van-col>
                <van-col span="18"> 1.238 </van-col>
              </van-col>
            </van-row>

            <!-- 12技能栏目 -->

            <van-grid :column-num="4">
              <van-grid-item
                v-for="value in 12"
                :key="value"
                icon="photo-o"
                text="1"
              />
            </van-grid>
          </van-tab>
        </van-tabs>

        <div style="height: 100px"></div>
        <div>
          <van-button type="primary">主要按钮</van-button>
          <van-button type="info">信息按钮</van-button>
          <van-button type="default" is-link @click="showMergtPet"
            >合宠</van-button
          >
          <van-button type="warning">警告按钮</van-button>

          <van-popup
            @closed="closepop()"
            closeable
            v-model="showMerg"
            round
            position="center"
            style="width: 95%; height: 95%"
          >
            <van-row type="flex" justify="space-around">
              <van-col span="8" offset="4" v-show="addleft">
                <div style="height: 200px"></div>
                <van-field
                  readonly
                  clickable
                  label="点击添加宠物"
                  :value="value"
                  placeholder="选择宠物"
                  @click="showPicker = true"
                  style="width: 40%"
                />
              </van-col>
              <!-- 选中宠物时显示宠物natural组件index的值 -->
              <van-col v-show="addleftchoose" span="8">
                <natural-endowments
                  :data="pets"
                  :dataindex="petsindex"
                ></natural-endowments>
                <van-row> 111 </van-row>
              </van-col>
              <van-popup
                v-model="showPicker"
                round
                closeable
                close-icon="close"
                position="left"
                style="width: 40%; height: 100%"
              >
                1111
                <natural-endowments
                  :data="pets"
                  :dataindex="petsindex"
                ></natural-endowments>
                <van-grid :column-num="4">
                  <van-grid-item
                    v-for="(item, index) in pets"
                    :key="index"
                    icon="photo-o"
                    :text="item.name"
                    @click="petschange(index)"
                  />
                </van-grid>
                <van-button type="warning" @click="petschooseleft(index)"
                  >选择</van-button
                >
                <!-- <van-picker
                    show-toolbar
                    :columns="pets"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
                  />  -->
              </van-popup>

              <van-col span="8" offset="4" v-show="addright">
                <div style="height: 200px"></div>
                <van-field
                  readonly
                  clickable
                  label="点击添加宠物"
                  :value="value2"
                  placeholder="选择宠物"
                  @click="showPicker2 = true"
                  style="width: 40%"
                />
                <!-- 选中宠物时显示宠物natural组件index的值 -->
                <van-col v-show="addrightchoose">
                  <natural-endowments
                    :data="pets"
                    :dataindex="petsindex"
                  ></natural-endowments>
                  <van-row> 111 </van-row>
                </van-col>
                <van-popup
                  v-model="showPicker2"
                  round
                  position="right"
                  style="width: 40%; height: 100%"
                >
                  1111
                  <natural-endowments
                    :data="petschoosethen"
                    :dataindex="petsindex"
                  ></natural-endowments>
                  <van-grid :column-num="4">
                    <van-grid-item
                      v-for="(item, index) in petschoosethen"
                      :key="index"
                      icon="photo-o"
                      :text="item.name"
                      @click="petschange2(index)"
                    />
                  </van-grid>
                  <van-button type="warning" @click="petschooseright(index)"
                    >选择</van-button
                  >
                  <!-- <van-picker
                    show-toolbar
                    :columns="pets"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
                  />  -->
                </van-popup></van-col
              >
            </van-row>
          </van-popup>
        </div>
      </div>
    </van-popup>
    <!-- 宠物页面展示 -->
  </div>
</template>
<script>
// import { component } from "vue/types/umd";
import NaturalEndowments from "./NaturalEndowments.vue";
import {request} from "@/network/request"
export default {
  components: {
    NaturalEndowments,
  },
  name: "about",
  data() {
    return {
      active: 0,
      value: "",
      value2: "",
      showPicker: false,
      showPicker2: false,
      show: false,
      actives: 2,
      actives2: 1,
      showMerg: false,
      checked: true,
      petsindex: 0,
      addleft: true,
      addleftchoose: false,
      addright: true,
      addrightchoose: false,

      petschoosethen: [],

      pets: [
        {
          // suckblood

          id: "0",
          name: "吸血鬼",
          skill: {
            num: "7",
            attacknatural: "1504",
            attackmax: "1560",
            attackpercentage: parseInt((1504 * 100) / 1560),
            defendnatural: "945",
            defendmax: "900",
            defendpercentage: parseInt((945 * 100) / 900),
            strengthnatural: "4034",
            strengmax: "4950",
            strenpercentage: parseInt((4034 * 100) / 4950),
            mananatural: "1829",
            manamax: "2160",
            manapercentage: parseInt((1829 * 100) / 2160),
            speednatural: "1070",
            speedmax: "1320",
            speedpercentage: parseInt((1070 * 100) / 1320),
            growup: "1.170",
            skillname: [
              "double-hit",
              "rush",
              "strength",
              "suck-blood",
              "sure-kill",
              "counterattack",
            ],
          },
        },
        {
          //    Letheson

          id: "1",
          name: "忘川童子",
          skill: {
            num: "6",
            attacknatural: "1008",
            attackmax: "960",
            attackpercentage: parseInt((1008 * 100) / 960),
            defendnatural: "1212",
            defendmax: "1200",
            defendpercentage: parseInt((1212 * 100) / 1200),
            strengthnatural: "4715",
            strengmax: "4950",
            strenpercentage: parseInt((4715 * 100) / 4950),
            mananatural: "2673",
            manamax: "2760",
            manapercentage: parseInt((2673 * 100) / 2760),
            speednatural: "1068",
            speedmax: "1200",
            speedpercentage: parseInt((1068 * 100) / 1200),
            growup: "1.25",
            skillname: [
              "double-hit-magic",
              "fall-stone",
              "understand-heart",
              "magic-arts-crit",
              "magic-heart",
              "small-fire",
            ],
          },
        },
      ],
    };
  },
  methods: {
    add() {
      this.$store.commit("incounter");
      request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res)})
    },
    showPet() {
      this.show = true;
    },
    showMergtPet() {
      this.showMerg = true;
    },
    petschange(index) {
      console.log("111");
      console.log(index);
      this.petsindex = index;

      this.petschoosethen = this.pets.filter(function (pets) {
        return pets.id!=index;
      });
    
    },
    petschange2(index){
        this.petsindex = index;
    },
    petschooseleft(index) {
      this.petsindex = index;
      this.addleft = false;
      this.addleftchoose = true;
      this.showPicker = false;
    },
    petschooseright(index) {
      this.petsindex = index;
      this.addright = false;
      this.addrightchoose = true;
      this.showPicker2 = false;
    },
    closepop() {
      this.addleft = true;
      this.addleftchoose = false;
      this.addright = true;
      this.addrightchoose = false;
    },
  },

  computed: {
    percent(a, b) {
      if (a >= b) {
        return 100;
      } else {
        return parseInt((a * 100) / b);
      }
    },
  },
};
</script>
<style scoped>
</style>