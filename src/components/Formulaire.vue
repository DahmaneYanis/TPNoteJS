<script setup>
import { ref } from 'vue'
import Movie from '../model/Movie'
import MovieCard from './MovieCard.vue';
const emit = defineEmits(['new'])

// Ref err title
const titleTooShort = ref(false)
const titleTooLong = ref(false)
const noTitle = ref(false)
const titleValid = ref(true)

// Ref err description
const descriptionValid = ref(true)
const descriptionTooShort = ref(false)
const noDescription = ref(false)


// Ref value Movie
const title = ref("")
const description = ref("")
const link = ref("")

function isTitleValid(title) {
    if (title.length === 0) {
        noTitle.value = true;
    } 
    if (title.length < 5) {
        titleTooShort.value = true;
    } else if (title.length > 30) {
        titleTooLong.value = true;
    } else {
        titleTooShort.value = false;
        noTitle.value = false;
        titleTooLong.value = false;
        titleValid.value = true;
        return true;
    }

    titleValid.value = false;
    return false;
}

function isDescriptionValid(description) {
    if (description.length === 0) {
        noDescription.value = true;
    }
    if (description.length < 30) {
        descriptionTooShort.value = true;
    } else {
        descriptionValid.value = true;
        descriptionTooShort.value = false;
        noDescription.value = false;


        return true;
    }
    descriptionValid.value = false;
    return false;
   
}
function isValid(title, description, link) {
    let titleValid = isTitleValid(title);
    let descriptionValid = isDescriptionValid(description);

    if (titleValid && descriptionValid) {
        emit('new', new Movie(title, description, link))
    }
}
</script>

<template>
    <div>
        <li v-if="titleTooShort">Erreur : Titre trop court, doit être supérieur à 5 caractères</li>
        <li v-if="titleTooLong">Erreur : Titre trop long, doit être inférieur à 30 caractères</li>
        <li v-if="noTitle">Erreur : Titre nécessaire</li>
        
        <li v-if="descriptionTooShort">Erreur : Description invalide - Nécessite plus de 30 caractères</li>
        <li v-if="noDescription">Erreur : Description nécessaire</li>

        <input v-if="titleValid" v-model="title" placeholder="Enter a title">
        <input class="wrong" v-else v-model="title" placeholder="Enter a title false">

        <textarea v-if="descriptionValid" v-model="description" placeholder="Enter a description"/>
        <textarea class="wrong" v-else v-model="description" placeholder="Enter a description false"/>

        <input type="url" v-model="link" style="background-color " placeholder="Enter a link">
        <button @click="() => isValid(title, description, link)">Nouveau Movie</button>
    </div>
</template>

<style>
.wrong {
    border-color: red;
}

</style>