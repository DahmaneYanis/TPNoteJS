<script setup>
import Movie from '../model/Movie'
import descriptionFormate from '../tools/descriptionFormate'

const props = defineProps({
    movie: Movie
})
</script>

<template>
    <div style="border : 1px solid red;">
      <li>Titre : {{movie.title}}</li>
      <li>Description : {{movie.description}}</li>
      <li>Lien : {{ movie.link }}</li>
    </div>
</template>