export default class Movie {
    static nbMovie = 0
    id
    title
    description
    link

    constructor(title, description, link) {
        Movie.nbMovie++
        this.id = Movie.nbMovie
        this.title = title
        this.description = description
        this.link = link
        this.seen = false
    }
}