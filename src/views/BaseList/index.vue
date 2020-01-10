<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-img
                        :src="topImage"
                        class="white--text align-end"
                        height="300"
                >

                </v-img>

            </v-card>
            <v-card>
                <v-card-title class="blue white--text text-center" style="display: flex; justify-content: center">
                    <span class="headline" style="">基地一览</span>
                    <!--<v-spacer></v-spacer>-->
                </v-card-title>
                <v-card-text>1231231

                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>

</template>

<script>
    import pic1 from './image.png'

//    import {Promise} from 'q';

    const PAGE_SIZE = 2

    export default {

        components: {},

        data: () => ({
            topImage: pic1
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
