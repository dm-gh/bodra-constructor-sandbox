<script lang="ts">
    import { accordionContextKey, AccordionContextType } from './context';
    import { getContext, onMount } from 'svelte';
    import { get } from 'svelte/store';

    export let title: string;
    export let key: string;

    const { activeKey } = getContext<AccordionContextType>(accordionContextKey)

    onMount(() => {
        if (get(activeKey) === null) {
            activeKey.set(key);
        }
    })
</script>

<div class="wrapper">
    <div class="title" on:click={() => activeKey.set(key)}>
        <span>{title}</span>

        <svg
            class="title-arrow"
            class:active={$activeKey === key}
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"
            />
        </svg>
    </div>

    {#if $activeKey === key}
        <div class="content">
            <slot></slot>
        </div>
    {/if}
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
    }
    .title {
        padding: 1em 2em;
        display: flex;
        justify-content: space-between;
        color: #333333;
        border-bottom: 1px solid #dadada;
    }
    .title-arrow {
        transform: rotate(0);
        /*transition: transform .2s linear;*/
    }
    .title-arrow.active {
        transform: rotate(180deg);
    }

    .content {
        padding: .5em 1em;
    }
</style>
