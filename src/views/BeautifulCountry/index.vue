<template>
    <v-layout row wrap>
        <v-flex xs12>
            <!--:controls ="gridStackLayout"-->
            <!--shanliang-->

            <v-card>
                <v-img
                        :src="card.src"
                        class="white--text align-end"
                        height="200px"
                >

                </v-img>

            </v-card>

            <v-card height="200px">
                <v-card-title class="blue white--text text-center" style="display: flex; justify-content: center">
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

    //    import {Promise} from 'q';

    const PAGE_SIZE = 2

    export default {

        components: {},

        data: () => ({}),

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
