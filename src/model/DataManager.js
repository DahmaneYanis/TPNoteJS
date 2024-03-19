import { ref } from 'vue'
import StubManager from './StubManager'
import Movie from './Movie'

export default class DataManager {
    constructor() {
        this.moviesSaved = ref(this.getMoviesFromJson(StubManager.getStubMovies()))
        this.movies = ref(this.moviesSaved.value)
    }

    /**
     * Parse un fichier JSON et renvoi la liste de Movie correspondant
     */
    getMoviesFromJson(data) {
        let movies = []
        let jsonObject = JSON.parse(data)
        jsonObject.forEach(element => {
            movies.push(new Movie(element.title, element.description, element.link))
        })
        return movies
    }

    /**
     * Ajoute un Movie à la liste de Movie
     */
    addMovie(movie) {
        this.moviesSaved.value.push(movie)
    }

    getMovies() {
        return this.movies.value
    }

    filterMovies(filter) {
        if (filter === "") {
            this.movies.value = this.moviesSaved.value
        } else {
            this.movies.value = this.moviesSaved.value.filter(movie => {
                let title = movie.title.toLowerCase()
                let search = filter.toLowerCase()
                return title.includes(search)
            })
       }
    }
}