<script lang="ts">
    import CopyButton from './CopyButton.svelte';
    import { onMount } from 'svelte';
    import { CONSTRUCTOR_ELEMENT_ID } from '../common/constants';

    let embedCode: string;

    onMount(async () => {
        const [css, js] = await Promise.all([
            fetch('/build/constructor.css').then(response => response.text()),
            fetch('/build/constructor.js').then(response => response.text()),
        ]);

        embedCode = [
            `<div id="${CONSTRUCTOR_ELEMENT_ID}"></div>`,
            `<style>${css}</style>`,
            `<script>${js}${'</scr' + 'ipt>'}`,
        ].join('\n')
    })
</script>


<h2 class="header">EMBED:</h2>

{#if embedCode}
    <div class="center">
        <CopyButton text={embedCode}/>
    </div>

    <pre class="code">{embedCode}</pre>
{:else}
    <p>Loading...</p>
{/if}


<style>
    .header {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        color: #ff3e00;
        text-transform: uppercase;
        font-weight: 100;
    }
    .center {
        display: flex;
        justify-content: center;
    }
    .code {
        width: 100%;
        overflow: auto;
    }
</style>
