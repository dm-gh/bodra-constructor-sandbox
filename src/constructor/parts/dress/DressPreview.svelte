<script lang="ts">
    import { selectedDressModified, visibleDressSide } from '../../store/runtime';
    import DressPart from './DressPart.svelte';

    // export let side: 'front' | 'back' = 'front';
    // export let dress = $selectedDressInDefaultSetup;
</script>

<div class="wrapper">
    {#await $selectedDressModified}
        <p>...waiting</p>
    {:then dress}
        {#each dress.parts as part}
            <DressPart side={$visibleDressSide} {part}/>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
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

