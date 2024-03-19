<script setup>
import Movie from '../model/Movie'

//TODO
function descriptionFormate(description) {
    if (description.length > 20) {
        return description.substring(0, 20) + "..."
    }
    return description
}

const emit = defineEmits([''])
const props = defineProps({
    movie: Movie
})

</script>

<template>
    <div class="movie-card">
        <img :src="movie.link">
        <li class="seen" v-if="movie.seen">Titre : {{ movie.title }}</li>
        <li v-else>Titre : {{ movie.title }}</li>
        <li>Description : {{ descriptionFormate(movie.description) }}</li>
        <button @click="movie.seen = true">Seen</button>
        <button @click="movie.seen = false">Not seen</button>

    </div>
</template>

<style>
.seen {
    color: green;
}

.movie-card {
    border : 1px solid red;
    margin-top : 1em;
    margin-bottom: 1em;
}

img {
    width: 200px;
}
</style>