import LinkService from './src/service/LinkService.js'

export default{

    data: function() {
        const linkSer=new LinkService()
        return {
            otherLinks: linkSer.getLinks(),
            homeLink: "http:localhost:3000"
        };
    },

    template : `
        <section>
        <ul>
            <li v-for = "links in this.otherLinks">
                {{ links.link }}
            </li>
            <li>{{ homeLink }}</li>
        </ul>
        </section>
            `
}