<script lang="ts" context="module">
    import AA from "$svg/AA.svg";
</script>

<script lang="ts">
    export let href = "/";
</script>

<a id="logo" {href} target="_blank" rel="noreferrer">
    {@html AA}
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
