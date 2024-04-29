<script lang="ts">
    export let id = "";
    export let name = "Close";
    export let size = "16px";
    export let color = "currentColor";
    export let rotate = 0;
    export let spin = false;
    export let style = "";
    export let bordered = false;
</script>

<svg
    {id}
    width={size}
    height={size}
    fill={color}
    class:spin
    class:bordered
    style="transform: rotate({rotate}deg); --icon-size: {size}; {style}"
>
    <use href="./assets/sprite.svg#{name}" />
</svg>

<style>
    svg {
        flex: 0 0 var(--icon-size);
    }
    .spin {
        animation: spin 0.75s linear infinite;
    }
    .bordered {
        box-shadow: 0 0 0 1px var(--color-border);
        border-radius: 4px;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>
