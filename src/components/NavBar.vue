<script setup>
import LinkService from '@/service/LinkService'

const emit = defineEmits(["go"])
const linkSer = new LinkService();

let otherLinks = linkSer.getLinks()
let homeLink = ""

</script>

<template>
    <div id="nav-bar">
        <li><a @click="() => emit('go', homeLink)">Home</a></li>
        <li v-for="links in otherLinks"><a @click="() => emit('go', links.link)"> {{ links.link }}</a> </li>
    </div>
</template>

<style>
#nav-bar {
    border : 1px solid aqua;
}

a:hover {
    cursor: pointer;
}
</style>
