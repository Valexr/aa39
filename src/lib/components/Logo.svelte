<script lang="ts" context="module">
    import AA from "$svg/AA.svg";
    import Icon from "./Icon.svelte";
</script>

<script lang="ts">
    export let href = "";
</script>

<a id="logo" {href}>
    <!-- {@html AA} -->
    <Icon name="Logo" size="3em" />
</a>

<style>
    a {
        width: 4.5em;
        /* color: inherit; */
    }

    @media (prefers-color-scheme: light) {
        a {
            color: var(--brand);
        }
    }
</style>
