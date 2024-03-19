export default function updateLink() {
	let currentLink = window.location.href.split("#");
	currentLink = currentLink[1];
	if (currentLink === undefined) {
		currentLink = "Home"
	}
    return currentLink
}