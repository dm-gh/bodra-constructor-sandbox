<script lang="ts">
    import { materialsNormalized } from './store';
    import { createEventDispatcher } from 'svelte';
    import MaterialView from '../../common/MaterialView.svelte';

    // material Ids
    export let options: string[] = [];
    // selected material id
    export let value: string;

    const dispatch = createEventDispatcher();

    function handleOptionChange(option: string) {
        dispatch('change', option);
    }
</script>

<div class="options">
    {#each options as option}
        <div class="option">
            <div
                class="option-image"
                class:selected={option === value}
                on:click={() => handleOptionChange(option)}
            >
                <MaterialView
                    url={$materialsNormalized[option].imageUrl}
                />
            </div>
            <span class="option-title">{$materialsNormalized[option].title}</span>
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
    .option-image.selected {
        border-color: #0077ff;
        border-width: 2px;
    }
    .option-title {
        color: #333333;
        font-size: 0.75em;
    }
</style>
