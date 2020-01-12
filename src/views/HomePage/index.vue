<template>
  <v-layout>
    <v-flex>

      <v-card
        class="mx-auto"
      >

        <video poster="/i/mov/mov_v4_nosound.jpg" autoplay="" loop="" muted="" class="player01">
          <source src="/i/mov/mov_v4.mp4" type="video/mp4">
        </video>

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
                    height="200px"
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
                      height="200px"
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
          <v-card :style="`height: 420px; background-image: url(${backgroundPng})`">

            <v-row dense>

              <v-col cols="9">
                <v-card-text>
                  华新介绍华新介绍华新介绍华新介绍
                </v-card-text>
              </v-col>
              <v-col cols="3">
                <v-row
                  class="d-flex"
                  v-for="card in qrCodeList"
                  :key="card.title"
                  :cols="card.flex"
                  style="padding: 30px;"
                >
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="card.src"
                      class="white--text align-end"
                      width="150px"
                      height="150px"
                      aspect-ratio="1"

                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                        </v-row>
                      </template>
                      <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                  </v-card>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-container>

      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>

  import pic1 from './image.png'
  import background from './background.png'
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
          src: pic1,
          flex: 6,
        },
        {
          title: "花婆婆与多肉的前世今生",
          text: "想不到多肉不仅有花语，花语还那么有诗意。我发现当我们以为我们已经足够了解多肉，但是其实它一直会给我们带来惊喜，这就是多肉独特的魅力，是其他植物没有办法带给我们的。",
          src: pic1,
          flex: 6,
        }
      ],
      baseList: [
        {
          flex: 3,
          title: "文本标签",
          src: pic1
        },
        {
          flex: 3,
          title: "文本标签",
          src: pic1
        },
        {
          flex: 3,
          title: "文本标签",
          src: pic1
        },
        {
          flex: 3,
          title: "文本标签",
          src: pic1
        },
      ],
      qrCodeList: [
        {
          src: qr1
        },
        {
          src: qr1
        }
      ],
      backgroundPng: background
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
