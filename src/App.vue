<script setup>
import MovieCard from './components/MovieCard.vue'
import Movie from './model/Movie';
let movie = new Movie("titre", "description", "htppquelque chose.com")
let link = window.location.href.split("#")
link = link[1]
</script>

<template>
  <main>
    <H1>{{ link }}</H1>
    <MovieCard :movie="movie" />
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
