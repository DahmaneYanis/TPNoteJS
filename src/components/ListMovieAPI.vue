<script setup>
import { ref } from 'vue';
import MovieCard from './MovieCard.vue';
import ApiService from '@/service/ApiService';
import Movie from '@/model/Movie';
const APIpoint = 'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies'
const data = await ApiService.get(APIpoint)
let listMovieFetched = []
data.forEach(element => {
    let title = ""
    let description = "Description not available"
    let link = "Img not avalaible"
    if (element.Title) {
        title = element.Title
    }
    if (element.Runtime && element.Year) {
        description = `Ce film à été réalisé en ${element.Year} ans et dure ${element.Runtime}`
    }
    if (element.Poster) {
        link = element.Poster
    }
    console.log(description)
    listMovieFetched.push(new Movie(title, description, link))
});

const list_movies = ref(listMovieFetched)
</script>

<template>
    <div>
        <MovieCard v-for="movie in list_movies" :movie="movie" /> 
    </div>
</template>