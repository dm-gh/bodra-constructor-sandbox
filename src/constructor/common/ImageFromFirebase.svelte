<script lang="ts">
    import { createEventDispatcher, onMount, tick } from 'svelte';
    import { getDownloadURLWithCache } from '../../common/downloadCache';

    export let imagePath: string;
    export let alt: string;

    let downloadUrl = '';

    const dispatch = createEventDispatcher<{load: void}>();

    onMount(async () => {
        try {
            downloadUrl = await getDownloadURLWithCache(imagePath);
            await tick();
            dispatch('load');
        } catch (e) {
            console.error(e);
        }
    });
</script>

<div
    style={`background-image: url(${downloadUrl})`}
    role="img"
    aria-label={alt}
></div>
