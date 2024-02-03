<template>
  <!-- Quote Container -->
    <div class="flex flex-col space-y-4  bg-white items-center mx-auto rounded-lg px-10 py-9">
        <!-- Heading -->
        <h1 class="text-3xl font-medium">Quote of The Day</h1>

        <div class="relative pb-8 border-b border-b-slate-400">
            <p class="max-w-lg" v-for="quote in quotes" :key="quote.quote">{{ quote.quote }}</p>

            <i v-for="quote in quotes" :key="quote.quote" class="block mt-2 md:absolute md:right-0"> -{{ quote.author }} </i>
        </div>

        <!-- Btns and New Quote-->
        <div class="flex flex-col space-y-4 w-full justify-between items-center md:flex-row md:space-y-0">
            <!-- Btns -->
            <div class="flex space-x-2">
                <div class="flex cursor-pointer rounded-full w-10 h-10 items-center border border-blue-500 justify-center">
                    <img :src="voice" alt="" class="w-5 h-5 md:w-6 md:h-6">
                </div>

                <div class="flex cursor-pointer rounded-full w-10 h-10 items-center border border-blue-500 justify-center">
                    <img :src="copy" alt="" class="w-5 h-5 md:w-6 md:h-6">
                </div>

                <btn @click="shareQuote" class="flex cursor-pointer rounded-full w-10 h-10 items-center border border-blue-500 justify-center">
                    <img :src="share" alt="" class="w-5 h-5 md:w-6 md:h-6">
                </btn>
            </div>

            <!-- New Quote Btn -->
            <div>
                <button type="button" class="bg-blue-500 text-white px-4 py-2 rounded-full" @click="newQuote()">New Quote</button>
            </div>
        </div>
        
    </div>
    
</template>

<script>
import copy from '/src/assets/imgs/copy.png'
import share from '/src/assets/imgs/share.png'
import voice from '/src/assets/imgs/voice.png'

export default {
    props: {
        quotes: {
            type: Array,
            required: true
        },
        newQuote: {
            type: Function,
            required: true
        },
    },

    data() {
        return {
            copy,
            share,
            voice,
        }
    },
    methods: {
        shareQuote() {
            navigator.share({
                text: "Hey There",
                url: "https://github.com/Mokowz?tab=overview&from=2023-12-01&to=2023-12-31"
            })
        },
    }

}
</script>

<style>

</style>