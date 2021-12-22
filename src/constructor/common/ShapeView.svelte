<script lang="ts">
    import { ShapeFromDb } from '../store/types';
    import SvgFromFirebase from './SvgFromFirebase.svelte';

    export let shape: ShapeFromDb;
</script>

<SvgFromFirebase on:load svgPath={shape.svgPath} />
