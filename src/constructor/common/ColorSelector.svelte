<script lang="ts">
    export let value: string;
    export let options: string[];
</script>

<div class="options">
    {#each options as option}
        <div
            class="option"
            class:selected={option === value}
            style={`background-color: ${option}`}
            on:click={() => value = option}
        ></div>
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
        border-radius: 50%;
        border: 1px solid #dadada;
        width: 2em;
        height: 2em;
        cursor: pointer;
    }
    .option.selected {
        border-color: #df00ff;
    }
</style>
