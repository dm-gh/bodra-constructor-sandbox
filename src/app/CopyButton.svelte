<script lang="ts">
    import { copyTextToClipboard } from '../common/helpers';
    import { onDestroy } from 'svelte';

    export let text: string;

    let showCheckIcon: boolean;

    let checkIconTimeout: number;

    async function handleClick() {
        await copyTextToClipboard(text);

        showCheckIcon = true;
        checkIconTimeout = window.setTimeout(() => {
            showCheckIcon = false;
        }, 1000)
    }

    onDestroy(() => {
        clearTimeout(checkIconTimeout);
    })
</script>

<button on:click={handleClick}>
    {#if showCheckIcon}
        <svg fill="currentColor" width="1.2em" height="1.2em"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"/>
        </svg>
    {:else}
        Copy
    {/if}
</button>

<style>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .4em 2em;
        font-weight: 300;
        border-radius: 6px;
        line-height: 1.2;
        border: none;
        background-color: #ff9471;
        color: #fff;
        font-size: 1em;
        cursor: pointer;
    }
</style>
