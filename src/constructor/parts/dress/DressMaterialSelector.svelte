<script lang="ts">
    import MaterialSelector from '../../common/MaterialSelector.svelte';
    import { get } from 'svelte/store';
    import { selectedDressModifications, selectedDressPart } from '../../store/runtime';
    import { materials } from '../../store/materials';
    import type { MaterialFromDb } from '../../store/types';

    async function handleMaterialChange(event: CustomEvent<MaterialFromDb>) {
        const selectedPart = await get(selectedDressPart);
        selectedDressModifications.update(modifications => ({
            ...modifications,
            [selectedPart.id]: {
                ...(modifications[selectedPart.id] ?? {}),
                material: event.detail.id,
            }
        }))
    }
</script>

{#await $selectedDressPart then part}
    {#if part}
        {#await $materials then materials}
            <MaterialSelector
                value={part.material}
                options={materials}
                on:change={handleMaterialChange}
            />
        {/await}
    {/if}
{/await}

