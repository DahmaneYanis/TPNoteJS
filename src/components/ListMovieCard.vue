<script setup>
import { ListFormat } from 'typescript';
import Movie from '../model/Movie'
import MovieCard from './MovieCard.vue';
import descriptionFormate from '../tools/descriptionFormate'

const props = defineProps({
    list_movies : Array
})
</script>

<template>
    <div>
        <MovieCard v-for="movie in list_movies" :movie="movie" />
    </div>
</template>