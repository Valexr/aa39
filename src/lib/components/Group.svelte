<script lang="ts" context="module">
    import Group from "$svg/Group.svg";
</script>

<script lang="ts">
    export let href = "";
</script>

<a id="group" {href}>
    {@html Group}
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
