<script lang="ts">
    import { defaultDress } from './store';
    import DressElement from './DressElement.svelte';

</script>

<div class="wrapper">
    {#each defaultDress as dressElement}
        <DressElement element={dressElement}/>
    {/each}
</div>

<style>
    .wrapper {
        width: 100%;
        height: 100%;
        background: #fff;
        color: #000;

        display: flex;
        position: relative;
    }
</style>

