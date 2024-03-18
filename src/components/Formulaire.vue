<script setup>
import { ref } from 'vue'
import Movie from '../model/Movie'
import MovieCard from './MovieCard.vue';
const emit = defineEmits(['new'])

const valid = ref(true)

const title = ref("")
const description = ref("")
const link = ref("")

function isValid(title, description, link) {
    console.log(toString(title).length, description, link)
    if (title.length > 0 && description.length > 0 && link.length > 0) {
        emit('new', new Movie(title, description, link))
        valid.value = true;
    }
    else {
        valid.value = false
    }
}
</script>

<template>
    <div>
        <p v-if="!valid">Entrée invalide, entrez au moins un caractère</p>
        <input v-model="title" placeholder="Enter a title">
        <input v-model="description" placeholder="Enter a description">
        <input v-model="link" placeholder="Enter a link">
        <button @click="() => isValid(title, description, link)">Nouveau Movie</button>
    </div>
</template>