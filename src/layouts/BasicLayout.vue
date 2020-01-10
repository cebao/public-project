<template>
    <v-layout id="sandbox" style="max-width: 1920px; width: 100%; margin: 0 auto;display: flex;">


        <!--<div style="width: 980px;"-->

        <!--&gt;-->
        <router-view></router-view>

        <!--</div>-->
        <!-- 侧边导航栏 -->
        <!--<sider-menu @bgColorFromWidget="bgColorFromWidget" style="z-index: 10"-->
        <!--@contentWidthType="contentWidthType"-->
        <!--@curBarMode="curBarMode"-->
        <!--@updateBreadCrumbs="updateBreadCrumbs"-->
        <!--@sideBarMini="sideBarMini"-->
        <!--@topBarFixedFromWidget="topBarFixedFromWidget"-->
        <!--&gt;</sider-menu>-->

        <!--&lt;!&ndash; 页面主视图区 &ndash;&gt;-->
        <!--<v-content :class="`${curBarModeType==`top` ? curWidthType!='full' ? `fix-w1200` : `ml-3` : ``}`"-->
        <!--:style="`${curBarModeType==`side` && sideBarMiniW ? `padding-left:100px;!important` : ``}-->
        <!--${curBarModeType==`side` ? `padding-top:0;` : ``} z-index:0;padding-bottom:0;-->
        <!--${curBarModeType==`top` ? `padding-top:0px;` : ``}`">-->
        <!--<BreadCrumbs ref="breadCrumbs" ></BreadCrumbs>-->
        <!--&lt;!&ndash;      <v-container fluid fill-height>&ndash;&gt;-->
        <!--<v-container fluid>-->
        <!--<basic-content></basic-content>-->
        <!--</v-container>-->
        <!--</v-content>-->

        <!--&lt;!&ndash; 页脚 &ndash;&gt;-->
        <!--<v-footer :inset="footer.inset" :fixed="false" app :dark="bgColor.colorName!='light'" class="bbx_footer"-->
        <!--:style="`height:40px;position:relative;background:${curBarModeType==`top` ? bgColor.colorName!=`light`&&bgColor.colorName!=`dark` ? bgColor.color : `` : ``};`">-->
        <!--<v-layout :class="`${curBarModeType==`top` ? curWidthType!='full' ? `fix-w1200` : `` : ``} footer-text`"-->
        <!--justify-space-between align-center>-->
        <!--<span class=" px-3">Copyright &copy; {{ new Date().getFullYear() }} 喜科（上海）软件系统有限公司 • All Rights Reserved</span>-->
        <!--<span class="pr-3">-->
        <!--<a :class="bgColor.colorName!='light'?'logo-choosit-dark':'logo-choosit'" rel="nofollow" depressed href="http://www.miibeian.gov.cn/">沪ICP备12006929号-3&nbsp;&nbsp;&nbsp;</a>-->
        <!--<a rel="nofollow" href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20120606162952778">-->
        <!--<img class="gongshang" height="30" :src="bgColor.colorName!='light' ? GSImg.GSWhite_img : GSImg.GS_img">-->
        <!--</a>-->
        <!--</span>-->
        <!--</v-layout>-->
        <!--</v-footer>-->


    </v-layout>
</template>

<script>
    //  import SiderMenu from './SiderMenu.vue'
    //  import BasicContent from './BasicContent.vue'
    //  import BreadCrumbs from './BreadCrumbs.vue'//面包屑
    //  import {mapState} from 'vuex'
    //  import GSWhite_img from '@/assets/footer/gongshang_white.png'
    //  import GS_img from '@/assets/footer/gongshang.png'

    window.layout = {
        gridStarkTabTitleHeight: 40,
        gridStarkTabItemHeight: 40,
        gridStarkTabItemMarginLeftRight: 5,
        gridStarkTabItemMarginTopBottom: 5,
    }

    export default {
        components: {
//      SiderMenu,
//      BasicContent,
//      BreadCrumbs,
        },
        data: () => ({
            // 工商局的图片
//      GSImg:{ GSWhite_img,GS_img },
//
//      dark: false,
//      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
//      primaryDrawer: {
//        model: null,
//        type: 'default (no property)',
//        clipped: false,
//        floating: false,
//        mini: false
//      },
//      footer: {
//        inset: true
//      },
//
//      // 从右侧悬浮小组件接收到的 背景颜色
//      bgColor:'dark',
//      // 从右侧悬浮小组件接收到的 内容宽度 流式布局/固定宽度
//      curWidthType:'full',
//      // 当前菜单栏状态 侧边栏/顶部栏
//      curBarModeType:'top',
//      // 侧边栏是否mini
//      sideBarMiniW:false,
//      // 顶部栏是否是fixed
//      topBarFixed:true,

        }),
        methods: {

//      // 从右侧悬浮小组件接收到的 背景颜色
//      bgColorFromWidget(res){
//        this.bgColor = res;
//      },
//      // 从右侧悬浮小组件接收到的 内容宽度 流式布局/固定宽度
//      contentWidthType(res){
//        this.curWidthType = res;
//      },
//      // 切换当前状态 顶部栏/侧边栏
//      curBarMode(res){
//        this.curBarModeType = res;
//        this.$emit('curBarMode',res)
//      },
//      // 侧边栏是否mini
//      sideBarMini(res) {
//        this.sideBarMiniW = res
//      },
//      // 顶部栏是否是fixed
//      topBarFixedFromWidget(res) {
//        this.topBarFixed = res
//      },
//      updateBreadCrumbs() {
//        this.$refs.breadCrumbs.updateBreadCrumbs();
//      },

        },
        mounted() {
        },
    }
</script>
<style>

    /*@import url('./overallFontSize.css');*/

    /*body{overflow: hidden;}*/
    /*.fix-w1200{width: 90vw;margin: 0 auto;}*/
    /*a.logo-choosit{text-decoration:none;color: #333333; }*/
    /*a.logo-choosit-dark{text-decoration:none;color: #fff; }*/

    /*.bbx_footer{position: relative!important;height: 40px;display: block;line-height: 40px;}*/

</style>
