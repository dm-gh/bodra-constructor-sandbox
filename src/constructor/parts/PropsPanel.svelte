<script>
    // import Accordion from '../common/accordion/Accordion.svelte';
    // import AccordionItem from '../common/accordion/AccordionItem.svelte';
    // import DressElementColorSelector from './dress/DressElementColorSelector.svelte';
    import DressMaterialSelector from './dress/DressMaterialSelector.svelte';
    import DressShapeSelector from './dress/DressShapeSelector.svelte';
    import ChangeDressSideButton from './dress/ChangeDressSideButton.svelte';
    import SubmitButton from './billing/SubmitButton.svelte';
    // import { shapes } from '../store/shapes';
    // import { materials } from '../store/materials';
    // import { dresses } from '../store/dresses';

    // $: $shapes.then(console.log);
    // $: $materials.then(console.log);
    // $: $dresses.then(console.log);
</script>

<div>

    <DressShapeSelector/>
    <DressMaterialSelector/>

    <ChangeDressSideButton/>

    <SubmitButton/>
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
