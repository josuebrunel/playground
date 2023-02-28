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

	const handleAdd = (e) => {
		// switch to list of polls
		activeItem = currentPolls;
	};
</script>

<Header />

<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === currentPolls}
		<PollList />
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
