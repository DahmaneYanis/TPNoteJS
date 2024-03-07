<script setup>

const props = defineProps({
    movie: Movie
})

let description = descriptionFormate(props.movie.description)
// component logic
// declare some reactive state here.
</script>

<template>
    <p>{{ movie.description }}</p>
</template>