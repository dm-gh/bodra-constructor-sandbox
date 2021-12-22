<!--<script lang="ts">-->
<!--    import type { DressElement } from './store';-->
<!--    import assets from '../../assets/shapes';-->
<!--    import { onMount } from 'svelte';-->
<!--    import MaterialView from '../../common/MaterialView.svelte';-->
<!--    import { materialsNormalized } from '../material/store';-->
<!--    import { DressSide } from '../../store/types';-->

<!--    export let element: DressElement;-->

<!--    $: svgElement = assets[element?.shape] ?? '';-->

<!--    let wrapperDiv: HTMLDivElement;-->

<!--    let hitboxGroups: [SVGPathElement[], SVGPathElement[]] = [[], []];-->

<!--    onMount(() => {-->
<!--        const clickListener = () => {-->
<!--            selectedDressElementKey.set(element.key);-->
<!--        };-->

<!--        hitboxGroups = [-->
<!--            Array.from(wrapperDiv.querySelectorAll('svg g.front .hitbox')),-->
<!--            Array.from(wrapperDiv.querySelectorAll('svg g.back .hitbox')),-->
<!--        ];-->

<!--        Array.from(wrapperDiv.querySelectorAll('svg .hitbox')).forEach(element => {-->
<!--            element.addEventListener('click', clickListener)-->
<!--        })-->
<!--    })-->
<!--</script>-->

<!--<div-->
<!--    class="element"-->
<!--    class:selected={$selectedDressElementKey === element.key}-->
<!--    class:front={$visibleDressSide === DressSide.FRONT}-->
<!--    class:back={$visibleDressSide === DressSide.BACK}-->
<!--    bind:this={wrapperDiv}-->
<!--&gt;-->
<!--    {#each hitboxGroups as hitboxes, i}-->
<!--        {#if ($visibleDressSide === DressSide.FRONT && i === 0)-->
<!--            || ($visibleDressSide === DressSide.BACK && i === 1)}-->
<!--            {#each hitboxes as hitbox}-->
<!--                <div class="material" style={`clip-path: path("${hitbox.getAttribute('d')}")`}>-->
<!--                    <MaterialView url={$materialsNormalized[element.material].imageUrl} />-->
<!--                </div>-->
<!--            {/each}-->
<!--        {/if}-->
<!--    {/each}-->
<!--    {@html svgElement}-->
<!--</div>-->

<!--<style>-->
<!--    .element {-->
<!--        position: absolute;-->
<!--        top: 50%;-->
<!--        left: 50%;-->
<!--        transform: translate3d(-50%, -50%, 0);-->
<!--        pointer-events: none;-->
<!--    }-->
<!--    .element > :global(svg) {-->
<!--        height: 500px;-->
<!--        width: 300px;-->
<!--        pointer-events: none;-->
<!--    }-->
<!--    .element > :global(svg) :global(.hitbox) {-->
<!--        pointer-events: initial;-->
<!--    }-->

<!--    .element.selected :global(.hitbox) {-->
<!--        stroke-width: 2px;-->
<!--        stroke: #039be5;-->
<!--    }-->

<!--    .element:not(.front) :global(.front),-->
<!--    .element:not(.back) :global(.back) {-->
<!--        display: none;-->
<!--        pointer-events: none;-->
<!--    }-->

<!--    .material {-->
<!--        position: absolute;-->
<!--        inset: 0;-->
<!--        transform-origin: top left;-->
<!--        transform: scale(1.2) translateY(8px); /* TODO: redo */-->
<!--        z-index: -1;-->
<!--    }-->
<!--</style>-->
