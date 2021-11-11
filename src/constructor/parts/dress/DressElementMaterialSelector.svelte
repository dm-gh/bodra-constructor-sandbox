<script lang="ts">
    import { currentDressModifications, selectedDressElement } from './store';
    import MaterialSelector from '../material/MaterialSelector.svelte';
    import { materials } from '../material/store';
    import { get } from 'svelte/store';

    function handleMaterialChange(event: CustomEvent) {
        currentDressModifications.update(modifications => ({
            ...modifications,
            material: {
                ...modifications.material,
                [get(selectedDressElement).key]: event.detail,
            }
        }))
    }
</script>

<MaterialSelector
    value={$selectedDressElement.material}
    options={$materials.map(mat => mat.id)}
    on:change={handleMaterialChange}
/>
