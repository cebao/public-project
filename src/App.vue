<template>
  <v-app>
    <v-toolbar
      style="display:flex; justify-content: center; align-items: flex-end"
      :extended="true"
      :extension-height="200"
      :src="toolbarPng"
      class="light-green darken-1"
    >
      <div class="d-flex align-center ml-10 mr-2 mb-8">
        <img :src="logo" height="100">
        <!--                <span class="pl-2" style="color: white; font-size: 14px">华新</span>-->
      </div>

      <v-toolbar-items>

        <!--<v-menu v-if="" offset-y>-->
        <!--<template v-slot:activator="{ on }">-->
        <v-btn text x-large @click="onHomePage"
               class="display-1"
               color="light-green darken-1"
        >
          首页
        </v-btn>
        <v-btn text x-large @click="onBeautifulCountry"
               class="display-1"
               color="light-green darken-1"
        >
          美丽乡村
        </v-btn>
        <v-btn text x-large @click="onBaseList"
               class="display-1"
               color="light-green darken-1"
        >
          青浦新闻
        </v-btn>
        <v-btn text x-large @click="onAboutUs"
               class="display-1"
               color="light-green darken-1"
        >
          关于我们
        </v-btn>
        <!--</template>-->
        <!--<v-list class="dash_menu pa-0 primary">-->
        <!--<v-list-tile v-for="(item, index) in dashBoardList.children" :key="index"-->
        <!--:to="`/dashDisplay/`+item.id"-->
        <!--:class="{ bh_dash_menu:true,-->
        <!--cur_is_dashboard:curDashBardId==item.id&&themeColor.colorName!='light',-->
        <!--cur_is_dashboard_white:curDashBardId==item.id&&themeColor.colorName=='light',}">-->
        <!--<v-list-tile-title style="text-align: center;">-->
        <!--<span>{{ item.text }}</span>-->
        <!--</v-list-tile-title>-->
        <!--</v-list-tile>-->
        <!--</v-list>-->
        <!--</v-menu>-->
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items right>
        <v-btn class="headline"
               text color="light-green darken-1">联系我们
        </v-btn>
      </v-toolbar-items>

      <!--<template v-if="$vuetify.breakpoint.smAndUp">-->
      <!--<v-btn icon>-->
      <!--<v-icon>mdi-export-variant</v-icon>-->
      <!--</v-btn>-->
      <!--<v-btn icon>-->
      <!--<v-icon>mdi-delete-circle</v-icon>-->
      <!--</v-btn>-->
      <!--<v-btn icon>-->
      <!--<v-icon>mdi-plus-circle</v-icon>-->
      <!--</v-btn>-->
      <!--</template>-->
    </v-toolbar>

    <!--<v-btn-->
    <!--href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
    <!--target="_blank"-->
    <!--text-->
    <!--&gt;-->
    <!--<span class="mr-2">Latest Release</span>-->
    <!--<v-icon>mdi-open-in-new</v-icon>-->
    <!--</v-btn>-->

    <v-content>
      <BasicLayout/>
    </v-content>

    <v-footer :fixed="true" app class="light-green darken-1 bbx_footer"
              :style="`position:relative;`">
      <v-layout row wrap class=""
                style="width: 1920px; display:flex; justify-content: center; align-items: center;">
        <v-flex xs2 style="color: white;">
          <img :src="logo" height="80">
        </v-flex>
        <v-flex xs3 style="color: white;">
          <div>上海华新苗木花卉基地</div>
          <div>【沪ICP备0800。。。。】</div>
        </v-flex>
        <v-flex xs3 style="color: white;">
          <div>地址：上海市青浦区嘉松中路4188弄566号</div>
          <div>沪公网安备3101060200。。。。号</div>
        </v-flex>
      </v-layout>
      <!--<div class="d-flex align-center ml-10 mr-2">-->
      <!--<img src="./assets/logo.png" height="40">-->
      <!--<span class="pl-2" style="color: white; font-size: 14px">华新</span>-->
      <!--</div>-->
      <!--<div class="d-flex align-center ml-10 mr-2">-->
      <!--<img src="./assets/logo.png" height="40">-->
      <!--<span class="pl-2" style="color: white; font-size: 14px">华新</span>-->
      <!--</div>-->
      <!--<div class="d-flex align-center ml-10 mr-2">-->
      <!--<img src="./assets/logo.png" height="40">-->
      <!--<span class="pl-2" style="color: white; font-size: 14px">华新</span>-->
      <!--</div>-->
    </v-footer>
  </v-app>
</template>

<script>
    import BasicLayout from '@/layouts/BasicLayout.vue';
    import toolbarBackground from '@/assets/toolbar-bg.jpg'
    import logo from '@/assets/logo.png'
    //  import toolbarBackground1 from '@/assets/timg.jpg'
    //    import logo from './assets/logo.png'
    export default {
        name: 'App',

        components: {
            BasicLayout,
        },

        data: () => ({
            logo: logo,
            toolbarPng: toolbarBackground
        }),
        mounted: function () {

        },
        methods: {
            onHomePage() {
                this.$router.push({
                    path: '/',
                })
            },
            onBeautifulCountry() {
                this.$router.push({
                    path: '/beautifulCountry',
                })
            },
            onBaseList() {
                this.$router.push({
                    path: '/baseList',
                })
            },
            onAboutUs() {
                this.$router.push({
                    path: '/aboutUs',
                })
            }
        }
    };
</script>
<style>
  .v-toolbar__content {
    width: 1920px;
  }

  .v-toolbar {
    flex: none !important;
  }
</style>