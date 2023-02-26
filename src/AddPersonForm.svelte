<script>
    let name;
    let age;

    const handleSubmit = () => {
        console.log(name, age);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name} />
    <input type="number" placeholder="age" bind:value={age} />
    <button>add person</button>
</form>

<style>
</style>
