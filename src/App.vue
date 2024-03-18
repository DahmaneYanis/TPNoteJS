<script setup>
import { ref } from 'vue';
import ListMovieCard from './components/ListMovieCard.vue'

import Movie from './model/Movie';
import Formulaire from './components/Formulaire.vue';
import NavBar from './components/NavBar.vue';
let movies = ref([new Movie("titre", "description", "htppquelque chose.com"), new Movie("titre2", "description2", "htppquelque chose.com2")]);
let currentLink = window.location.href.split("#");
currentLink = currentLink[1];
if (currentLink === undefined) {
	currentLink = "Home"
}
function update(movie) {
	movies.value.push(movie);
}

</script>

<template>
	<main>
		<NavBar />
		<h1>{{ currentLink }}</h1>
		<Formulaire v-if="currentLink == 'films/add'" @new="(movie) => update(movie)" />
		<ListMovieCard  v-else-if="currentLink == 'films'" :list_movies="movies" />
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
