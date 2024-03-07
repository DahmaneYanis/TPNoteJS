export default class LinkService {
    static nbLinks = 0

    getLinks() {
        return [
            this.newLink("Ajouter un film", "film/add"),
            this.newLink("Tout les fims", "films")
        ]
    }

    newLink(label, link) {
        nbLinks += 1
        return { id: nbLinks, label: label, link: link }
    }
}