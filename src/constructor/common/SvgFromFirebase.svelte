<script lang="ts">
    import { createEventDispatcher, onMount, tick } from 'svelte';
    import {
        getBlobStringFromStorageWithCache,
    } from '../../common/downloadCache';

    export let svgPath: string;

    let svgContents: string = '';

    const dispatch = createEventDispatcher<{load: void}>();

    onMount(async () => {
        try {
            svgContents = await getBlobStringFromStorageWithCache(svgPath);
            await tick();
            dispatch('load');
        } catch (e) {
            console.error(e);
        }
    });
</script>

{@html svgContents}

