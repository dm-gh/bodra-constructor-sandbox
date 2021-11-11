<script>
    // import Accordion from '../common/accordion/Accordion.svelte';
    // import AccordionItem from '../common/accordion/AccordionItem.svelte';
    // import DressElementColorSelector from './dress/DressElementColorSelector.svelte';
    import DressElementMaterialSelector from './dress/DressElementMaterialSelector.svelte';
</script>

<div>

    <DressElementMaterialSelector/>

<!--    <DressElementColorSelector/>-->

<!--    <Accordion>-->
<!--        <AccordionItem key="color" title="Color">-->
<!--            <ColorSelector-->
<!--                value="#ffffff"-->
<!--                options={['#ff0000', '#00ff00', '#0000ff', '#ffffff', '#000000', '#0f0f0f', '#dadada']}-->
<!--            />-->
<!--        </AccordionItem>-->
<!--        <AccordionItem key="shape" title="Shape">-->
<!--            Shape!!!-->
<!--        </AccordionItem>-->
<!--        <AccordionItem key="pattern" title="Pattern">-->
<!--            Pattern!!!-->
<!--        </AccordionItem>-->
<!--    </Accordion>-->

</div>

<style>
    div {
        width: 100%;
        height: 100%;
        background: #ffffff;
        border-left: 1px solid #dadada;
    }
</style>
