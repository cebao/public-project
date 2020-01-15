<template>
  <v-layout>
    <v-flex>
      <!--<v-card>-->
      <!---->

      <v-card
        class="mx-auto"
      >

        <v-card-title class="light-green lighten-1 white--text text-center"
                      style="display: flex; justify-content: center">
          <span class="headline" style="">关于我们</span>
        </v-card-title>
        <!--</v-card>-->
        <v-container fluid>


          <v-row dense>
            <v-col
              :cols="6"
            >
              <v-card>
                <v-img
                  :src="aboutUs1"
                  class="white--text align-end"
                  height=""
                >

                </v-img>
              </v-card>
              <!--<v-img-->
              <!--:src="aboutUs2"-->
              <!--class="white&#45;&#45;text align-end"-->
              <!--height=""-->
              <!--&gt;-->

              <!--</v-img>-->
              <!--<v-spacer></v-spacer>-->

            </v-col>

            <v-col
              :cols="6"
            >
              <v-card>
                <v-img
                  :src="aboutUs2"
                  class="white--text align-end"
                  height=""
                >

                </v-img>
              </v-card>

            </v-col>
          </v-row>

          <v-card-text class="subtitle-1" style="display: flex">
            【华新花卉苗木种植基地】（以下简称“华新苗木基地”）2007年3月，上海瑞丰园林绿化工程有限公司向杨家庄村委会提出，将建设一个集花卉苗木养殖、展示、游历等多方向综合性基地。双方达成协议，本公司于同年6月开始，对此地块环境着手改造。
            距今十余年间我司努力改造基地环境，共计平整垦复出土地面积约350亩，同时覆盖了高约80米，占地150亩山坡一座。
            “华新苗木基地”目前已是上海市占地最大，品类最全，种类繁多综合大型苗木花卉基地，是客户合作的最佳选择。
          </v-card-text>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
    import aboutUs1 from './about-us1.jpg'
    import aboutUs2 from './about-us2.jpg'

    //    import {Promise} from 'q';

    const PAGE_SIZE = 2

    export default {

        components: {},

        data: () => ({
            aboutUs1: aboutUs1,
            aboutUs2: aboutUs2
        }),

        watch: {},

        async created() {
//            await this.init();
        },

        async mounted() {

        },

        computed: {},

        methods: {},


        destroyed() {

        }
    }
</script>
