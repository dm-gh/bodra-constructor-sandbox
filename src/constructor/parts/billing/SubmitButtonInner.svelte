<script lang="ts">
    import { DressFromRuntime } from '../../store/types';

    export let dress: DressFromRuntime;

    let price: number;

    $: {
        price = dress
            ? dress.basePrice + dress.parts.map(({material, shape}) => shape.price + material.price).reduce((a, b) => a + b)
            : 0;
    }
</script>

<button>
    {price}
</button>

