<script lang="ts">
    import { get } from 'svelte/store';
    import { selectedDressModifications, selectedDressPart } from '../../store/runtime';
    import type { ShapeFromDb } from '../../store/types';
    import { shapes } from '../../store/shapes';
    import ShapeSelector from '../../common/ShapeSelector.svelte';

    async function handleMaterialChange(event: CustomEvent<ShapeFromDb>) {
        const selectedPart = await get(selectedDressPart);
        selectedDressModifications.update(modifications => ({
            ...modifications,
            [selectedPart.id]: {
                ...(modifications[selectedPart.id] ?? {}),
                shape: event.detail.id,
            }
        }))
    }
</script>

{#await $selectedDressPart then part}
    {#if part}
        {#await $shapes then shapes}
            <ShapeSelector
                value={part.shape}
                options={shapes.filter(shape => part.options.includes(shape.id))}
                on:change={handleMaterialChange}
            />
        {/await}
    {/if}
{/await}

