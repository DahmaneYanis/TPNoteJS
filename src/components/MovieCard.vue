<script setup>
import Movie from '../model/Movie'
import { ref } from 'vue';

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

const more = ref(false)

</script>

<template>
    <div class="movie-card">
        <div class="img-div">
            <img :src="movie.link">
        </div>
        <li v-if="movie.seen">Titre : <span class="seen">{{ movie.title }}</span></li>
        <li v-else>Titre : {{ movie.title }}</li>
        <li v-if="!more">Description : {{ descriptionFormate(movie.description) }} <a @click="() => more = true">Voir plus...</a></li>
        <li v-else>Description : {{ movie.description }} <a @click="() => more = false">Voir moins.</a></li>
        <div class="btn">
            <button @click="movie.seen = true">Seen</button>
            <button @click="movie.seen = false">Not seen</button>
        </div>

    </div>
</template>

<style>
.seen {
    color: #00bd7e;
}

.img-div {
    display: flex;
    justify-content: center;
    padding-bottom: 3%;
}

.movie-card {
    border: 1px solid #9f9f9f;
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 5%;
}

.btn button {
    margin : 2%;
}

img {
    width: 200px;
}
</style>