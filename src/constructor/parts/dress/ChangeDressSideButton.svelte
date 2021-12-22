<script lang="ts">
import { DressSide } from '../../store/types';
import { visibleDressSide } from '../../store/runtime';
</script>

<button
    on:click={() => {
        visibleDressSide.update(oldValue => oldValue === DressSide.FRONT ? DressSide.BACK : DressSide.FRONT)
    }}
>
    Current Side: {$visibleDressSide}
</button>
