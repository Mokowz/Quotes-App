<template>
  <div>
    <!-- Flex Container -->
    <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center justify-center p-0 w-12 h-12 bg-white rounded-full">
            <img :src="user" class="w-8 h-8">
        </div>

        <!-- Search Btn -->
        <form @submit.prevent="handleSearch">
            <div>
                <input type="search" placeholder="Search quote" 
                v-model="search"
                class="px-2 py-1 w-64 rounded-md focus:border-transparent focus:outline-none md:w-72">
            </div>
        </form>
        

        <!-- Dark Mode -->
        <div class="flex items-center justify-center p-0 w-12 h-12 bg-white rounded-full">
            <img :src="darkMode" alt="" class="w-8 h-8">
        </div>
    </div>
  </div>
</template>

<script>
import user from '/src/assets/imgs/user.png'
import darkMode from '/src/assets/imgs/darkMode.png'

export default {
    data() {
        return {
            user,
            darkMode,
            search: null,
        }
    },

    methods: {
        handleSearch() {
            console.log(this.search)
        }
    }
}
</script>

<style>

</style>