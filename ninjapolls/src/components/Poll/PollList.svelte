<script>
    import { onMount, onDestroy } from "svelte";
    import PollDetail from "./PollDetail.svelte";
    import PollStore from "../../stores/PollStore";

    // export let polls;

    // const unsub = PollStore.subscribe((data) => {
    //     polls = data;
    // });

    // onMount(() => {
    //     console.log("component mounted");
    // });

    // onDestroy(() => {
    //     console.log("component destroyed");
    //     unsub();
    // });
</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <div>
            <PollDetail {poll} />
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>
