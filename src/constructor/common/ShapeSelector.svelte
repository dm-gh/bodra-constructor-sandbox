<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { ShapeFromDb } from '../store/types';
    import ShapeView from './ShapeView.svelte';

    export let value: ShapeFromDb;
    export let options: ShapeFromDb[];

    const dispatch = createEventDispatcher<{change: ShapeFromDb}>();

    function handleOptionChange(option: ShapeFromDb) {
        dispatch('change', option);
    }

</script>

<div class="options">
    {#each options as option}
        <div class="option">
            <div
                class="option-image"
                class:selected={option.id === value.id}
                on:click={() => handleOptionChange(option)}
            >
                <ShapeView shape={option}/>
            </div>
            <span class="option-title">{option.title}</span>
        </div>
    {/each}
</div>

<style>
    .options {
        display: flex;
        flex-wrap: wrap;
        padding: -6px;
    }
    .option {
        margin: 6px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
    }
    .option-image {
        border: 1px solid #dadada;
        width: 5em;
        height: 3em;
    }
    .option-image > :global(svg) {
        width: 100%;
        height: 100%;
    }
    .option-image.selected {
        border-color: #0077ff;
        border-width: 2px;
    }
    .option-title {
        color: #333333;
        font-size: 0.75em;
    }
</style>

