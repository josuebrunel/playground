<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";

	const currentPolls = "Current Polls";
	const createNewPoll = "Create new poll";
	let items = [currentPolls, createNewPoll];
	let activeItem = currentPolls;

	const tabChange = (e) => {
		activeItem = e.detail;
	};
</script>

<Header />

<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === currentPolls}
		<p>Poll list component goes here</p>
	{:else}
		<p>New poll for component goes here</p>
	{/if}
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
