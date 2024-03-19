<script setup>
import { ref } from 'vue';
import ListMovieCard from './components/ListMovieCard.vue'
import Movie from './model/Movie';
import Formulaire from './components/Formulaire.vue';
import NavBar from './components/NavBar.vue';

import getStubMovies from './stub/stub.js'
import updateLink from './tools/updateLink';


function goTo(link) {
    console.log(link)
    location.href = "#" + link
	currentLink.value = updateLink()
}

function parseJsonToMovies(data) {
	let movies = []
	let jsonObject = JSON.parse(data)
	jsonObject.forEach(element => {
		movies.push(new Movie(element.title, element.description, element.link))
	})
	return movies
}
let movies = ref(parseJsonToMovies(getStubMovies()))

const currentLink = ref(updateLink())


function update(movie) {
	movies.value.push(movie);
	goTo("films")
}

</script>

<template>
	<main>
		<NavBar @go="(link) => goTo(link)" />
		<h1>{{ currentLink }}</h1>
		<Formulaire v-if="currentLink == 'films/add'" @new="(movie) => update(movie)" />
		<ListMovieCard v-else-if="currentLink == 'films'" :list_movies="movies" />
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
