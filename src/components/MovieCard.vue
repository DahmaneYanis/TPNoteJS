<script setup>
import Movie from '../model/Movie'
import descriptionFormate from '../tools/descriptionFormate'

const props = defineProps({
    movie: Movie
})
console.log(props.movie)
// let description = descriptionFormate(props.movie.description)
// component logic
// declare some reactive state here.
</script>

<template>
    <p>Test</p>
    <!-- <div>
        <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
            tag="article" style="max-width: 20rem;" class="mb-2">
            <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div> -->
</template>