<template>
  <v-layout>
    <v-flex xs12>
      <!--:controls ="gridStackLayout"-->
      <!--shanliang-->

      <v-card>
        <v-img
          :src="topImage"
          class="white--text align-end"
        >

        </v-img>

      </v-card>

      <v-card>
        <v-card-title class="light-green lighten-1 white--text text-center"
                      style="display: flex; justify-content: center">
          <span class="headline" style="">美丽乡村</span>
          <!--<v-spacer></v-spacer>-->
        </v-card-title>
        <v-card-text>
          1231231

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
