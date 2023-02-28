<script>
    export let type = "primary";
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat class:inverse on:click>
    <slot />
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgb(0, 0, 0, 0);
    }
    .primary {
        background: #d91b42;
        color: white;
    }

    .secondary {
        background: #456496;
        color: white;
    }

    .flat {
        box-shadow: none;
    }

    .primary.inverse {
        color: #d91b42;
        background: white;
    }

    .secondary.inverse {
        color: #456496;
        background: white;
    }
</style>
