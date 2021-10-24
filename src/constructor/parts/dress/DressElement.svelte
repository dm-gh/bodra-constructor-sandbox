<script lang="ts">
    import type { DressElement } from './store';
    import assets from '../../assets';
    import { onMount } from 'svelte';
    import { selectedElementOnDisplay } from './store';

    export let element: DressElement;

    $: svgElement = assets[element?.shape] ?? '';

    let wrapperDiv: HTMLDivElement;

    let hovering: boolean = false;

    onMount(() => {
        const clickListener = () => {
            selectedElementOnDisplay.set(element.key);
        };

        const mouseEnterListener = () => {
            hovering = true;
        };
        const mouseLeaveListener = () => {
            hovering = false;
        };

        Array.from(wrapperDiv.querySelectorAll('svg > *')).forEach(element => {
            element.addEventListener('click', clickListener)
            element.addEventListener('mouseenter', mouseEnterListener)
            element.addEventListener('mouseleave', mouseLeaveListener)
        })
    })
</script>

<div
    class="element"
    class:selected={$selectedElementOnDisplay === element.key}
    class:hovering
    bind:this={wrapperDiv}
>
    {@html svgElement}
</div>

<style>
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

    .element.hovering:not(.selected) {
        stroke-width: 2px;
        color: #039be5;
    }
    .element.selected {
        color: #039be5;
    }
</style>
