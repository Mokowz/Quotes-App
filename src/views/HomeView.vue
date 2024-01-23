<template>
  <div class="bg-blue-400 h-screen">
    <!-- FLex Container -->
    <div class="flex mx-auto container flex-col py-10 px-6 md:px-0">
      <!-- Nav -->

      <!-- Quote Container -->
      <h1 class="text-3xl font-medium" v-for="quote in quotes" :key="quote.quote">{{ quote.quote }}</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  components: { },
  data() {
    return {
      quotes: null,
      category: null
    }
  },
  beforeMount() {
    this.fetchRandomQuote()
  },
  methods: {
    async fetchRandomQuote() {
      const API_KEY = 'MB1uM1dT9DRh09Syv29+3g==HdhrmcROxUekrBRY'

      try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/quotes/`,
        {
          headers: {
            'X-Api-Key': API_KEY
          },
        });

        this.quotes = response.data
        console.log(response.data);
      } catch(error) {
        console.log(error)
      }
    }
  }
}
</script>
