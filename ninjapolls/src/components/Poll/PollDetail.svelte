<script>
    import { createEventDispatcher } from "svelte";
    import Card from "../../shared/Card.svelte";

    const dispatch = createEventDispatcher();
    export let poll;

    // reactive value
    $: totalVotes = poll.votesA + poll.votesB;

    const handleVote = (option, id) => {
        console.log("disptach detail", option, id);
        dispatch("vote", { option: option, id: id });
    };
</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total votes: {totalVotes}</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="answer" on:click={() => handleVote("a", poll.id)}>
            <div class="percent percent-a">
                <span>{poll.answerA} ({poll.votesA})</span>
            </div>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="answer" on:click={() => handleVote("b", poll.id)}>
            <div class="percent percent-b">
                <span>{poll.answerB} ({poll.votesB})</span>
            </div>
        </div>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }

    .answer {
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }

    .answer:hover {
        opacity: 0.6;
    }

    span {
        display: inline-block;
        padding: 10px 20px;
    }
</style>
