import { ref } from "vue";

export default class Routeur {
    constructor() {
        this.currentLink = ref("")
        this.updateLink()
    }

    /**
     * Met à jour le chemin (l'action)
     */
    updateLink() {
        let tabLink = window.location.href.split("#");
        let value = tabLink[1];
        if (value === "") {
            value = "Home"
        }
        this.setCurrentLink(value)
    }

    /**
     * Change le lien de la page dynamiquement
     */
    goTo(link) {
        location.href = "#" + link
        this.updateLink()
    }

    /**
     * 
     * @param {*} link 
     */
    setCurrentLink(link) {
        this.currentLink.value = link
    }

    getCurrentLink() {
        return this.currentLink.value
    }  
}