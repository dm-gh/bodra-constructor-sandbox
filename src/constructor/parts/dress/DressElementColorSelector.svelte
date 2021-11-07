<script>
    import ColorSelector from '../../common/ColorSelector.svelte';
    import { selectedDressElement } from './store';
</script>

<ColorSelector
    value={$selectedDressElement.color}
    options={$selectedDressElement.colorOptions}
/>
