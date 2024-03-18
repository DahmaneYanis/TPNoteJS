<script setup>
import { ref } from 'vue'


import MovieCard from './components/MovieCard.vue'
import ListMovieCard from './components/ListMovieCard.vue'

import Movie from './model/Movie';
import Formulaire from './components/Formulaire.vue';
let movies = ref([new Movie("titre", "description", "htppquelque chose.com"), new Movie("titre2", "description2", "htppquelque chose.com2")])
let link = window.location.href.split("#")
link = link[1]

function update(movie) {
  console.log("update !")
  movies.value.push(movie)
  console.log(movies)
}
</script>

<template>
  <main>
    <H1>{{ link }}</H1>
    <Formulaire @new="(movie) => update(movie)"/>
    <ListMovieCard :list_movies="movies" />
  </main> 
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
