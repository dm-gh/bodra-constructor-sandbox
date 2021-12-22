<script lang="ts">
    import { DressPart, DressSide } from '../../store/types';
    import MaterialView from '../../common/MaterialView.svelte';
    import { selectedDressPartId } from '../../store/runtime';
    import ShapeView from '../../common/ShapeView.svelte';

    export let side: DressSide;
    export let part: DressPart;

    let wrapperDiv: HTMLDivElement;

    let hitboxGroups: [SVGPathElement[], SVGPathElement[]] = [[], []];

    async function onShapeLoad() {
        const clickListener = () => {
            selectedDressPartId.set(part.id);
        };

        hitboxGroups = [
            Array.from(wrapperDiv.querySelectorAll('svg g.front .hitbox')),
            Array.from(wrapperDiv.querySelectorAll('svg g.back .hitbox')),
        ];

        Array.from(wrapperDiv.querySelectorAll('svg .hitbox')).forEach(element => {
            element.addEventListener('click', clickListener)
        })
    }
</script>

<div
    class="element"
    class:selected={$selectedDressPartId === part.id}
    class:front={side === DressSide.FRONT}
    class:back={side === DressSide.BACK}
    bind:this={wrapperDiv}
>
    {#each hitboxGroups as hitboxes, i}
        {#if (side === DressSide.FRONT && i === 0)
            || (side === DressSide.BACK && i === 1)}
            {#each hitboxes as hitbox}
                <div class="material" style={`clip-path: path("${hitbox.getAttribute('d')}")`}>
                    <MaterialView material={part.material}/>
                </div>
            {/each}
        {/if}
    {/each}
    <ShapeView on:load={onShapeLoad} shape={part.shape}/>
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

    .material {
        position: absolute;
        inset: 0;
        transform-origin: top left;
        transform: scale(1.2) translateY(8px); /* TODO: redo */
        z-index: -1;
    }
</style>
