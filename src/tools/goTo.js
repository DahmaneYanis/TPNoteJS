import updateLink from "./updateLink"

export default function goTo(link) {
    console.log(link)
    location.href = "#" + link
    return updateLink()
}