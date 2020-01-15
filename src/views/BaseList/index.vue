<template>
  <v-layout>
    <v-flex>
      <!--<v-card>-->
      <!--<v-img-->
      <!--:src="topImage"-->
      <!--class="white&#45;&#45;text align-end"-->
      <!--height="300"-->
      <!--&gt;-->

      <!--</v-img>-->

      <!--</v-card>-->
      <v-card>
        <v-card-title class="light-green lighten-1 white--text text-center"
                      style="display: flex; justify-content: center">
          <span class="headline" style="">青浦新闻</span>
          <!--<v-spacer></v-spacer>-->
        </v-card-title>
        <!--<v-card-text>-->
        <!---->
        <!--</v-card-text>-->
      </v-card>


      <v-card
        style="padding-left: 20px; padding-right: 20px;"
        v-for="(item, index) in news"
        :key="index"
      >
        <div v-if="index % 2 == 0">
          <v-row>
            <v-col :cols="3">

            </v-col>
            <v-col :cols="3" style="display: flex; justify-content: center; align-items: center">
              <v-img
                :src="item.picture"
                class="white--text align-end"
                width="200"
              >

              </v-img>
            </v-col>

            <v-col :cols="3">
              <v-card-title style="margin-top: 60px;">
                {{item.title}}
              </v-card-title>
              <v-btn class="float-right" x-large color="success" @click="moreDetail(item.url)">
                更多详情
              </v-btn>
            </v-col>

            <v-col :cols="3">

            </v-col>
          </v-row>

        </div>

        <div v-if="index % 2 == 1">
          <v-row>

            <v-col :cols="3">

            </v-col>

            <v-col :cols="3">
              <v-card-title style="margin-top: 60px;">
                {{item.title}}
              </v-card-title>
              <v-btn x-large color="success" @click="moreDetail(item.url)">
                更多详情
              </v-btn>
            </v-col>

            <v-col :cols="3">
              <v-img
                :src="item.picture"
                class="white--text align-end"
                width="800"
                height="450"
              >

              </v-img>
            </v-col>

            <v-col :cols="3">

            </v-col>

          </v-row>
        </div>

      </v-card>

    </v-flex>
  </v-layout>

</template>

<script>
    import pic1 from './image.png'
    import news1 from './news1.jpg'
    import news2 from './news2.jpg'
    import news3 from './news3.jpg'
    import news4 from './news4.jpg'
    //    import news5 from './image.png'
    import news6 from './news6.jpg'
    import news7 from './news7.jpg'

    //    import {Promise} from 'q';

    const PAGE_SIZE = 2

    export default {

        components: {},

        data: () => ({
            topImage: pic1,
            news: [
                {
                    title: "青浦区百强企业去年纳税额148亿元，“中通”获百强之冠",
                    picture: news1,
                    url: "https://new.qq.com/omn/20200113/20200113A0DMZR00.html"
                },
                {
                    title: "青浦区百强企业去年纳税额148亿元，较上年增长11.8%",
                    picture: news2,
                    url: "https://www.jfdaily.com/news/detail?id=200377"
                },
                {
                    title: "青浦区开展防汛应急抢险物资仓库检查",
                    picture: news3,
                    url: "https://www.thepaper.cn/newsDetail_forward_5501542"
                },
                {
                    title: "观潮｜上海这个区提出打造长三角最具制度竞争力的地区，底气在哪里？",
                    picture: news4,
                    url: "https://baijiahao.baidu.com/s?id=1655497921242236786&wfr=spider&for=pc"
                },
                {
                    title: "青浦：加快进度，确保重大项目“落地生根”",
                    picture: news4,
                    url: "http://www.sh.chinanews.com/qxdt/2020-01-07/69361.shtml"
                },
                {
                    title: "青浦区打出28项“组合拳”，优化营商环境促进投资",
                    picture: news6,
                    url: "https://baijiahao.baidu.com/s?id=1654977015195599060&wfr=spider&for=pc"
                },
                {
                    title: "青浦区“三大整治”映初心 久久为功结硕果",
                    picture: news7,
                    url: "http://city.eastday.com/gk/20191008/u1ai20048372.html"
                },
            ]
        }),

        watch: {},

        async created() {
//            await this.init();
        },

        async mounted() {

        },

        computed: {},

        methods: {
            moreDetail(url) {
                window.open(url, "_blank");
            }
        },


        destroyed() {

        }
    }
</script>
