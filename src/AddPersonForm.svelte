<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    let name;
    let age;
    let level;
    // let football = false;
    // let swimming = false;
    // let basketball = false;
    let sports = [];

    const handleSubmit = () => {
        console.log(name, age, level, sports);
        const person = {
            name: name,
            level: level,
            age: age,
            sports: sports,
            id: Math.random(),
        };
        dispatch("addPerson", person);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name} />
    <input type="number" placeholder="age" bind:value={age} />
    <label for="">Sports:</label>
    <!-- <input type="checkbox" bind:checked={football} />football<br />
    <input type="checkbox" bind:checked={basketball} />basketball<br />
    <input type="checkbox" bind:checked={swimming} />swimming<br /> -->
    <input type="checkbox" value="football" bind:group={sports} />football<br />
    <input
        type="checkbox"
        value="basketball"
        bind:group={sports}
    />basketball<br />
    <input type="checkbox" value="running" bind:group={sports} />swimming<br />
    <label for="">Level:</label>
    <select name="" id="" bind:value={level}>
        <option value="junior">junior</option>
        <option value="intermediate">intermediate</option>
        <option value="senior">senior</option>
    </select>
    <button>add person</button>
</form>

<style>
</style>
