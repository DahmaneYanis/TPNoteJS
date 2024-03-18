<script setup>
import LinkService from '@/service/LinkService';

const linkSer = new LinkService();
let otherLinks = linkSer.getLinks()
let homeLink = "http://localhost:5173"

function goTo(link) {
    location.href = "#" + link
    location.reload()
    console.log(link)
}
</script>

<template>
    <div id="nav-bar">
        <li><a :href="homeLink">Home</a></li>
        <li v-for="links in otherLinks"><a @click="() => goTo(links.link)"> {{ links.link }}</a> </li>
    </div>
</template>

<style>
#nav-bar {
    border : 1px solid aqua;
}
</style>
