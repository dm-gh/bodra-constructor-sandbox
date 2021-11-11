<script lang="ts">
    export let url: string;
</script>

<div
    class="material"
    style={`background-image: url(${url});`}
></div>

<style>
    .material {
        background-position: left top;
        background-repeat: repeat;
        background-size: 3em;
        width: 100%;
        height: 100%;
    }
</style>
