<template>
  <div v-if="galleryObject.show" class="front_gallery_mask">

    <div style="position: relative;">
      <img :src="galleryObject.iArr[curIndex].url" alt="" style="max-height: 80vh;max-width: 80vw;">
      <v-icon @click="galleryObject.show=false" class="gallery_close">close</v-icon>
    </div>

    <div style="position: absolute;bottom: 50px;color: #eee;">{{galleryObject.iArr[curIndex].name}}</div>

    <div class="desktop_gallery_switch">

      <div class="dgs desktop_gallery_prev" v-if="curIndex>0" @click="switchPhoto('prev')">
        <div class="dgp_inner prev"> <div class="mr-4">上一个</div> <v-icon style="font-size: 60px;">keyboard_arrow_left</v-icon> </div>
      </div>
      <div class="dgs desktop_gallery_next" v-if="curIndex<galleryObject.iArr.length-1" @click="switchPhoto('next')">
        <div class="dgp_inner next"> <v-icon style="font-size: 60px;">keyboard_arrow_right</v-icon> <div class="ml-4">下一个</div>  </div>
      </div>
    </div>

  </div>
</template>
<script>

  /*
  *   显示外层图片库浏览的方法
  *
  *    // 显示
  *    this.$store.commit('menudata/modShowGallery',{ show:true, iArr:[], curI:0 });
  *    // 隐藏
  *    this.$store.commit('menudata/modShowGallery',{ show:false, iArr:[], curI:0 });
  *
  * */
  export default {
    name: 'Loading',
    props: {
      galleryObject:{ type:Object, default(){return { show:false, iArr:[], curI:0 }} }
    },
    data() {
      return {
        curIndex:0,
        showI:false
      }
    },
    watch:{
      'galleryObject.curI':{
        handler(nv){
          // console.log(nv)
          this.curIndex = nv;
        },
        immediate:true
      }
    },
    mounted() {
      this.showI = this.galleryObject.show;
      // console.log(this.galleryObject)
    },
    methods:{
      switchPhoto(v){
        v=='next' ? this.curIndex++ :  this.curIndex--;
      }
    }

  }
</script>
<style>

  /****** LOADER ******/
  .front_gallery_mask { position: fixed; left: 0; top: 0; right: 0; bottom: 0; width: 100%; height: 100%; background: rgba(0,0,0,.6); z-index: 100500;display: flex;align-items: center;justify-content: center; }

  .front_gallery_mask .dgs{ position: absolute;width: 50%; height: 100%; top: 0; cursor: pointer;}
  .front_gallery_mask .desktop_gallery_prev{ left: 0;}
  .front_gallery_mask .desktop_gallery_next{ right: 0;}
  .front_gallery_mask .dgp_inner{position: absolute; left: 50px; width: 170px; top: 50%; transform: translateY(-50%); cursor: pointer; display: flex; justify-content: flex-end; align-items: center; font-size: 14px; color: rgba(255, 255, 255, 0.6);}
  .front_gallery_mask .dgp_inner.next{position: absolute; right: 50px; left:auto;justify-content: flex-start;}
  .front_gallery_mask .dgp_inner .v-icon{color: rgba(255, 255, 255, 0.6);}
  .front_gallery_mask .dgp_inner .v-icon{color: rgba(255, 255, 255, 0.6);}

  .front_gallery_mask .dgs:hover .dgp_inner{ color: #fff; }
  .front_gallery_mask .dgs:hover .dgp_inner .v-icon{ color: #fff; }

  .gallery_close{position: absolute; top: -40px; right: -65px; cursor: pointer; font-size: 40px;color: #fff!important;z-index: 10}
</style>
