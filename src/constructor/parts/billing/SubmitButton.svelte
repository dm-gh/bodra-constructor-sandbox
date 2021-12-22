<script lang="ts">
    import { selectedDressModified } from '../../store/runtime';
    import SubmitButtonInner from './SubmitButtonInner.svelte';
</script>

{#await $selectedDressModified}
    <p>...waiting</p>
{:then dress}
    <SubmitButtonInner {dress}/>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

