<script lang="ts">
    import type { DressElement } from './store';
    import assets from '../../assets/shapes';
    import { onMount } from 'svelte';
    import { selectedDressElementKey, visibleDressSide } from './store';

    export let element: DressElement;

    $: svgElement = assets[element?.shape] ?? '';

    let wrapperDiv: HTMLDivElement;

    let hovering: boolean = false;

    onMount(() => {
        const clickListener = () => {
            selectedDressElementKey.set(element.key);
        };

        const mouseEnterListener = () => {
            hovering = true;
        };
        const mouseLeaveListener = () => {
            hovering = false;
        };

        Array.from(wrapperDiv.querySelectorAll('svg .hitbox')).forEach(element => {
            element.addEventListener('click', clickListener)
            element.addEventListener('mouseenter', mouseEnterListener)
            element.addEventListener('mouseleave', mouseLeaveListener)
        })
    })
</script>

<div
    class="element"
    class:selected={$selectedDressElementKey === element.key}
    class:hovering
    class:front={$visibleDressSide === 'front'}
    class:back={$visibleDressSide === 'back'}
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
    .element > :global(svg) :global(.hitbox) {
        pointer-events: initial;
    }

    .element.selected :global(.hitbox) {
        stroke-width: 2px;
        stroke: #039be5;
    }

    .element:not(.front) :global(.front),
    .element:not(.back) :global(.back) {
        display: none;
        pointer-events: none;
    }
</style>
