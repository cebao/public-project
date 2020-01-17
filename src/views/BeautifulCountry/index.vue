<template>
  <v-layout>
    <v-flex xs12>
      <!--:controls ="gridStackLayout"-->
      <!--shanliang-->



      <v-card>
        <v-card-title class="light-green lighten-1 white--text text-center"
                      style="display: flex; justify-content: center">
          <span class="headline" style="">美丽乡村</span>
          <!--<v-spacer></v-spacer>-->
        </v-card-title>

        <v-card>
        <v-img
          :src="topImage"
          class="white--text align-end"
        >

        </v-img>

      </v-card>

        <v-card-text class="subtitle-1">
          【华新花卉苗木种植基地】（以下简称“华新苗木基地”）2007年3月，上海瑞丰园林绿化工程有限公司向杨家庄村委会提出，将建设一个集花卉苗木养殖、展示、游历等多方向综合性基地。双方达成协议，本公司于同年6月开始，对此地块环境着手改造。
距今十余年间我司努力改造基地环境，共计平整垦复出土地面积约350亩，同时覆盖了高约80米，占地150亩山坡一座。
“华新苗木基地”目前已是上海市占地最大，品类最全，种类繁多综合大型苗木花卉基地，是客户合作的最佳选择。
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
  import topImage from './focus1.jpg'

  //    import {Promise} from 'q';

  export default {

    components: {},

    data: () => ({
      topImage: topImage
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
