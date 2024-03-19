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
        <div class="search">
            <label for="search">Research</label>
            <input name="search" type="search" v-model="filter" @input="emit('filterUpdated', filter)" placeholder="Type your filter here" />
        </div>
        <MovieCard v-for="movie in list_movies" :movie="movie" />
    </div>
</template>

<style>
.search {
    display: flex;
    flex-direction: column;
}
</style>