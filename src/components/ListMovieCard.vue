<script setup>
import { ref } from 'vue';
import MovieCard from './MovieCard.vue';
const emit = defineEmits(['filterUpdated'])

const props = defineProps({
    list_movies: Array
})
const filter = ref("")
</script>

<template>
    <div>
        <label>Research</label>
        <input type="search" v-model="filter" @input="emit('filterUpdated', filter)" placeholder="Type your filter here"/>
        <MovieCard v-for="movie in list_movies" :movie="movie" />
    </div>
</template>