<script setup>
import Movie from '../model/Movie'

//TODO
function descriptionFormate(description) {
    console.log("description -> ", description)
    if (description.length > 20) {
        return description.substring(1, 20) + "..."
    }
    return description
}

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