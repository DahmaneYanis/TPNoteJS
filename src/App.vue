<script setup>
import ListMovieCard from './components/ListMovieCard.vue'
import Formulaire from './components/Formulaire.vue'
import NavBar from './components/NavBar.vue'

import DataManager from './model/DataManager'
import Routeur from './model/Routeur'

const dataManager = new DataManager()
const routeur = new Routeur()

function update(movie) {
	dataManager.addMovie(movie)
	routeur.goTo("films")
}

function updateList(filter) {
	dataManager.filterMovies(filter)
}
</script>

<template>
	<main>
		<NavBar @go="(link) => routeur.goTo(link)" />
		<h1>{{ routeur.getCurrentLink() }}</h1>
		<Formulaire v-if="routeur.getCurrentLink() == 'films/add'" @new="(movie) => update(movie)"/>
		<ListMovieCard v-else-if="routeur.getCurrentLink() == 'films'" @filter-updated="(filter) => updateList(filter)" :list_movies="dataManager.getMovies()" />
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
