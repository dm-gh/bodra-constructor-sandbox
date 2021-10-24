<script lang="ts">
    import { setContext } from 'svelte';
    import { accordionContextKey, AccordionContextType, createNewAccordionContext } from './context';

    setContext<AccordionContextType>(accordionContextKey, createNewAccordionContext())
</script>

<div class="wrapper">
    <slot></slot>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
    }
</style>
