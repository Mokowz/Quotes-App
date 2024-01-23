<template>
  <div class="bg-blue-400 min-h-screen">
    <!-- FLex Container -->
    <div class="flex mx-auto container space-y-8 flex-col py-10 px-6 md:px-0">
      <!-- Nav -->
      <Navbar />

      <QuoteContainer :quotes="quotes" :newQuote="fetchRandomQuote" />

      <!-- Categories -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import QuoteContainer from '@/components/QuoteContainer.vue';

export default {
  name: 'HomeView',
  components: { Navbar, QuoteContainer },
  data() {
    return {
      quotes: null,
      category: null,
      author: null,
      word: null,
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
