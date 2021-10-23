<script>
    import Display from './parts/Display.svelte';
    import PropsPanel from './parts/PropsPanel.svelte';
</script>

<div class="wrapper">
    <div class="display">
        <Display/>
    </div>

    <div class="props-panel">
        <PropsPanel/>
    </div>
</div>

<style>
    .wrapper {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        display: flex;
        width: 900px; /* temporary */
    }

    .display {
        flex: 0 0 600px;
        aspect-ratio: 1;
    }

    .props-panel {
        flex: 0 0 300px;
    }
</style>
