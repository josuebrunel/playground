<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreatePollForm from "./components/Poll/CreatePollForm.svelte";
	import PollList from "./components/Poll/PollList.svelte";

	const currentPolls = "Current Polls";
	const createNewPoll = "Create new poll";
	let items = [currentPolls, createNewPoll];
	let activeItem = currentPolls;

	const tabChange = (e) => {
		activeItem = e.detail;
	};

	//polls
	let polls = [
		{
			id: 1,
			question: "Go or Python ?",
			answerA: "Go",
			answerB: "Python",
			votesA: 9,
			votesB: 15,
		},
	];

	const handleAdd = (e) => {
		const poll = e.detail;
		polls = [...polls, poll];
		console.log(polls);
		// switch to list of polls
		activeItem = currentPolls;
	};
</script>

<Header />

<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === currentPolls}
		<p>Poll list component goes here</p>
		<PollList {polls} />
	{:else}
		<p>New poll for component goes here</p>
		<CreatePollForm on:add={handleAdd} />
	{/if}
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
