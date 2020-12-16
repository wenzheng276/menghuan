import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store =new Vuex.Store({
    state:{
        counter:0,
        statepets: [
            {
              // suckblood
    
              id: "1",
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
    
              id: "2",
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
    },
    mutations:{
        incounter(state){
            state.counter++
        },
        decounter(state){
            state.counter--
        }

    }
})
export default store