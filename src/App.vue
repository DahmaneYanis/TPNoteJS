<script setup>
import ListMovieCard from './components/ListMovieCard.vue'
import Formulaire from './components/Formulaire.vue'
import NavBar from './components/NavBar.vue'

import DataManager from './model/DataManager'
import Routeur from './model/Routeur'
import ListMovieAPI from './components/ListMovieAPI.vue'

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
		<h1>TP Noté - {{ routeur.getCurrentLink() }}</h1>
		<NavBar @go="(link) => routeur.goTo(link)" />
		<div v-if="routeur.getCurrentLink() == 'films/add'">
			<h2>Ajouter un nouveau film</h2>
			<Formulaire @new="(movie) => update(movie)" />
		</div>
		<div v-else-if="routeur.getCurrentLink() == 'films'">
			<h2>Liste des films</h2>
			<h3>Films provenant de l'API</h3>
			<Suspense>
				<ListMovieAPI />
			</Suspense>
			<h3>Films provenant du stub</h3>
			<ListMovieCard @filter-updated="(filter) => updateList(filter)" :list_movies="dataManager.getMovies()" />
		</div>
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
