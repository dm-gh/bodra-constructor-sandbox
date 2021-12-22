<script lang="ts">
    import { MaterialFromDb } from '../store/types';
    import ImageFromFirebase from './ImageFromFirebase.svelte';

    export let material: MaterialFromDb;
</script>

<div class="material">
    <ImageFromFirebase on:load imagePath={material.imagePath} alt={material.description} />
</div>

<style>
    .material {
        width: 100%;
        height: 100%;
    }
    .material :global(div) {
        background-position: left top;
        background-repeat: repeat;
        background-size: 3em;
        width: 100%;
        height: 100%;
    }
</style>
