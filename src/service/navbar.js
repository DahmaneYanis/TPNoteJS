import LinkService from './LinkService.js'

export default{

    data: function() {
        const linkSer=new LinkService()
        return {
            otherLinks: linkSer.getLinks(),
            homeLink: "http:localhost:3000"
        };
    },

    methods: {
        affiche_libelle: function(link) {
        	return link
        }
    },

    template : `
        <section>
        <ul>
            <li @click="affiche_libelle(links.link)" v-for = "links in this.otherLinks">
                {{ links.link }}
            </li>
            <li>{{ homeLink }}</li>
        </ul>
        </section>
            `
}