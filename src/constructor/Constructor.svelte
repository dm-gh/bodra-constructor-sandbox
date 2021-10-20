<script lang="ts">
    import { onMount } from 'svelte';

    let text: string = 'CONSTRUCTOR';
    let index = 0;

    onMount(() => {
        window.setInterval(() => {
            text = text.toUpperCase();
            const i = index % text.length;
            text = text.slice(0, i) + text[i].toLowerCase() + text.slice(i + 1)
            index = index + 1;
        }, 100);
    })
</script>

<div class="wrapper">
    <h1>
        {text}
    </h1>
</div>

<style>
    .wrapper {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }
    h1 {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        color: #ff3e00;
        font-size: 4em;
        font-weight: 100;
    }
</style>
