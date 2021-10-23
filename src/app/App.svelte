<script lang="ts">
	import Constructor from '../constructor/Constructor.svelte';
    import EmbedConstructor from './EmbedConstructor.svelte';
</script>

<main>
    <div class="constructor-wrapper">
        <Constructor/>
    </div>
    <EmbedConstructor/>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2em 1em;
    }

    .constructor-wrapper {
        box-shadow: 0px 0px 4px rgba(0, 0, 0, .4);
    }
</style>

