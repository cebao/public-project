<template>
  <v-layout>
    <v-flex>

      <v-card
        class="mx-auto"
      >
        <v-container fluid>
          <v-card>
            <video
              style="width: 100%"
              src="https://ugcydzd.qq.com/uwMROfz2r5zIIaQXGdGnC2dfDmb_xYKxrIGz_bGUg2Lja6ru/b0847839gvd.mp4?sdtfrom=v1010&guid=79bcb473e44435a663a01347cc26dba0&vkey=A68CD5D267E3566CF7AB2AA85A299B851AF09CD89A6632B2EE42D5094321D9D0ADBAA87C1BD651B35D03BA9E2F7A507099F642311C5D28EC13F20113AE8056583092FD3283AB2C6847E9C43565DC8EC7635625AD0ED30ABC2ADFC62AFC497ED40CCD7665E8E64134E0091845AAA4CA9B93AEB69C0D698527AD67DC94CE89F7B7"
              autoplay="true"
              loop="true"
              muted="" class="player01">

            </video>
          </v-card>
        </v-container>

        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="card in beautifulCountryList"
              :key="card.title"
              :cols="card.flex"
            >
              <v-hover
                v-slot:default="{ hover }"
                open-delay="200">
                <v-card
                  :elevation="hover ? 16 : 2"
                >
                  <v-img
                    :src="card.src"
                    class="white--text align-end"
                  >
                    <v-card-title v-text="card.title"></v-card-title>
                  </v-img>
                  <v-card-text>
                    {{card.text}}
                  </v-card-text>

                  <!--<v-card-actions>-->
                  <!--<v-spacer></v-spacer>-->

                  <!--<v-btn icon>-->
                  <!--<v-icon>mdi-heart</v-icon>-->
                  <!--</v-btn>-->

                  <!--<v-btn icon>-->
                  <!--<v-icon>mdi-bookmark</v-icon>-->
                  <!--</v-btn>-->

                  <!--<v-btn icon>-->
                  <!--<v-icon>mdi-share-variant</v-icon>-->
                  <!--</v-btn>-->
                  <!--</v-card-actions>-->

                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>

        <v-container fluid>
          <v-card>
            <v-card-title style="justify-content: center;">
              基地一览
            </v-card-title>
            <v-row dense>

              <v-col
                v-for="card in baseList"
                :key="card.title"
                :cols="card.flex"
              >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200">
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                    <v-img
                      :src="card.src"
                      class="white--text align-end"
                    >
                      <v-card-title v-text="card.title"></v-card-title>
                    </v-img>

                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card>
        </v-container>

        <v-container fluid>
          <v-card>
            <v-img
              :src="companyProfile"
              class="white--text align-end"
            >
            </v-img>
            <!--<v-row dense>-->

            <!--<v-col cols="9">-->
            <!--<v-card-text>-->
            <!--华新介绍华新介绍华新介绍华新介绍-->
            <!--</v-card-text>-->
            <!--</v-col>-->
            <!--<v-col cols="3">-->
            <!--<v-row-->
            <!--class="d-flex"-->
            <!--v-for="card in qrCodeList"-->
            <!--:key="card.title"-->
            <!--:cols="card.flex"-->
            <!--style="padding: 30px;"-->
            <!--&gt;-->
            <!--<v-card flat tile class="d-flex">-->
            <!--<v-img-->
            <!--:src="card.src"-->
            <!--class="white&#45;&#45;text align-end"-->
            <!--width="150px"-->
            <!--height="150px"-->
            <!--aspect-ratio="1"-->

            <!--&gt;-->
            <!--<template v-slot:placeholder>-->
            <!--<v-row-->
            <!--class="fill-height ma-0"-->
            <!--align="center"-->
            <!--justify="center"-->
            <!--&gt;-->
            <!--</v-row>-->
            <!--</template>-->
            <!--<v-card-title v-text="card.title"></v-card-title>-->
            <!--</v-img>-->
            <!--</v-card>-->
            <!--</v-row>-->
            <!--</v-col>-->
            <!--</v-row>-->
          </v-card>
        </v-container>

      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>

    import base1 from './base1.jpg'
    import base2 from './base2.jpg'
    import base3 from './base3.jpg'
    import base4 from './base4.jpg'
    import focus1 from './focus1.jpg'
    import focus2 from './focus2.jpg'
    import companyProfile from './company-profile.jpg'
    import qr1 from './qr1.png'
    //    import {Promise} from 'q';

    const PAGE_SIZE = 2

    export default {

        components: {},

        data: () => ({
            beautifulCountryList: [
                {
                    title: "杨家庄美丽乡村的故事",
                    text: "杨家庄村位于青浦区华新镇西南，在北青公路和嘉松中路的交界处。曾先后被评为“上海市文明村”、“上海市卫生村”、“上海市安全小区”、“上海市五好党组织”、和“上海市先进村民委员会”。",
                    src: focus1,
                    flex: 6,
                },
                {
                    title: "花婆婆与多肉的前世今生",
                    text: "想不到多肉不仅有花语，花语还那么有诗意。我发现当我们以为我们已经足够了解多肉，但是其实它一直会给我们带来惊喜，这就是多肉独特的魅力，是其他植物没有办法带给我们的。",
                    src: focus2,
                    flex: 6,
                }
            ],
            baseList: [
                {
                    flex: 3,
//          title: "文本标签",
                    src: base1
                },
                {
                    flex: 3,
//          title: "文本标签",
                    src: base2
                },
                {
                    flex: 3,
//          title: "文本标签",
                    src: base3
                },
                {
                    flex: 3,
//          title: "文本标签",
                    src: base4
                },
            ],
//            qrCodeList: [
//                {
//                    src: qr1
//                },
//                {
//                    src: qr1
//                }
//            ],
            companyProfile: companyProfile,
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
