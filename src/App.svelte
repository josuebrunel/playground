<script>
	import Modal from "./Modal.svelte";

	let firstName = "Josh";
	let lastName = "Loking";

	$: fullName = `${firstName} ${lastName}`;
	$: {
		console.log(firstName, lastName);
	}

	const handleClick = () => {
		fullName = "Yosuke Loking";
	};

	let people = [
		{ name: "josh", age: 25, id: 1 },
		{ name: "kimia", age: 23, id: 2 },
		{ name: "yosuke", age: 25, id: 3 },
	];

	const deletePerson = (id) => {
		console.log("deleting person ", id);
		people = people.filter((person) => person.id != id);
	};

	let num = 5;
</script>

<!-- <Modal /> -->
{#if num > 20}
	<p>Greater than 20</p>
{:else if num > 5}
	<p>Greater than 5</p>
{:else}
	<p>Not greater than 5</p>
{/if}

<main>
	<Modal />
	<h1>Hello {fullName}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>
	<button on:click={handleClick}> update name</button>
	<input type="text" bind:value={firstName} />
	<input type="text" bind:value={lastName} />

	<div>
		{#each people as person (person.id)}
			<div>
				<h4>{person.name}</h4>
				<p>{person.age} years old</p>
				<button on:click={() => deletePerson(person.id)}>delete</button>
			</div>
		{:else}
			<p>There are no people to show</p>
		{/each}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
