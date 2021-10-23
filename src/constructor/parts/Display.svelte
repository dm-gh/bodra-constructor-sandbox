<script lang="ts">
    import Collar from '../assets/collar.svelte';
    import Skirt from '../assets/skirt.svelte';
    import Sleeves from '../assets/sleeves.svelte';
    import Torso from '../assets/torso.svelte';
    import { selectedElementOnDisplay } from '../stores';
</script>

<div class="wrapper">

    <div class="element" class:selected={$selectedElementOnDisplay === 'Collar'}>
        <Collar on:click={() => selectedElementOnDisplay.set('Collar')}/>
    </div>
    <div class="element" class:selected={$selectedElementOnDisplay === 'Skirt'}>
        <Skirt on:click={() => selectedElementOnDisplay.set('Skirt')}/>
    </div>
    <div class="element" class:selected={$selectedElementOnDisplay === 'Sleeves'}>
        <Sleeves on:click={() => selectedElementOnDisplay.set('Sleeves')}/>
    </div>
    <div class="element" class:selected={$selectedElementOnDisplay === 'Torso'}>
        <Torso on:click={() => selectedElementOnDisplay.set('Torso')}/>
    </div>

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

    .element {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        pointer-events: none;
    }
    .element > :global(svg) {
        height: 500px;
        width: 300px;
        pointer-events: none;
    }
    .element > :global(svg) > :global(*) {
        pointer-events: initial;
    }

    .element.selected {
        color: #039be5;
    }
</style>
