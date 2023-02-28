import { writable } from "svelte/store";

const PollStore = writable(
    [
        {
            id: 1,
            question: "Go or Python ?",
            answerA: "Go",
            answerB: "Python",
            votesA: 9,
            votesB: 15,
        },
    ]
);

export default PollStore;