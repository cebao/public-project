<template>
    
    <notifications 
    :max='6'
    animation-name="v-fade-left">

      <template v-slot:body="props">

        <v-alert
        :value="true"
        dismissible
        :type="props.item.type"
        transition="scale-transition"
        
        >
          <div class="subheading">{{props.item.title}}</div>
          <div class="body-2">{{props.item.text}}</div>
        </v-alert>

      </template>


    </notifications>

</template>

<script>
export default {
    

}
</script>

<!--<style lang="less">-->

<!--/* notifications */-->

<!--.notifications{-->
  <!--top:50px !important;-->
  <!---->
<!--}-->

<!--.v-fade-left-enter-active,-->
<!--.v-fade-left-leave-active,-->
<!--.v-fade-left-move {-->
  <!--transition: all .2s;-->
<!--}-->
<!--.v-fade-left-enter,-->
<!--.v-fade-left-leave-to {-->
  <!--opacity: 0;-->
  <!--transform: translateX(200px) scale(0.2);-->
<!--}-->
<!--</style>-->
