<script>
    import Accordion from '../common/accordion/Accordion.svelte';
    import AccordionItem from '../common/accordion/AccordionItem.svelte';
</script>

<div>

    <Accordion>
        <AccordionItem key="color" title="Color">
            Color!!!
        </AccordionItem>
        <AccordionItem key="shape" title="Shape">
            Shape!!!
        </AccordionItem>
        <AccordionItem key="pattern" title="Pattern">
            Pattern!!!
        </AccordionItem>
    </Accordion>

</div>

<style>
    div {
        width: 100%;
        height: 100%;
        background: #ffffff;
        border-left: 1px solid #dadada;
    }
</style>
