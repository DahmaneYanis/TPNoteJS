export default class LinkService {
    static nbLinks = 0
    static links = [
        LinkService.newLink("Ajouter un film", "films/add"),
        LinkService.newLink("Tout les films", "films")
    ]

    static newLink(label, link) {
        LinkService.nbLinks += 1
        return { id: LinkService.nbLinks, label: label, link: link }
    }

    getLinks() {
        return LinkService.links
    }

    getLink(url) {
        let res = null
        LinkService.links.forEach(link => {
            console.log(link.link)
            if (link.link === url) {
                res = link
            }
        })
        return res
    }
}