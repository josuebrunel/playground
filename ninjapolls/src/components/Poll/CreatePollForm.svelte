<script>
    import Button from "../../shared/Button.svelte";

    let fields = {
        question: "",
        answerA: "",
        answerB: "",
    };

    let errors = { question: "", answerA: "", answerB: "" };
    let valid = false;

    const ErrorQuestionLength = "Question must be at least 5 characters long";
    const ErrorEmptyAnswer = "Answer cannot be empty";
    const submitHandler = () => {
        valid = true;
        if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = ErrorQuestionLength;
        } else {
            errors.question = "";
        }
        // validate answer A
        if (fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = ErrorEmptyAnswer;
        } else {
            errors.answerA = "";
        }
        // validate answer B
        if (fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = ErrorEmptyAnswer;
        } else {
            errors.answerB = "";
        }

        if (valid) {
            console.log(fields);
        }
    };
</script>

<form action="" on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll question:</label>
        <input type="text" name="" id="question" bind:value={fields.question} />
        <div class="errors">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" name="" id="answer-a" bind:value={fields.answerA} />
        <div class="errors">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" name="" id="answer-b" bind:value={fields.answerB} />
        <div class="errors">{errors.answerB}</div>
    </div>
    <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
    form {
        wdith: 400px;
        margin: 0 auto;
        text-align: center;
    }

    .form-field {
        margin: 18px auto;
    }

    input {
        width: 100%;
        border-radius: 6px;
    }

    label {
        margin: 10px auto;
        text-align: left;
    }

    .errors {
        font-weight: bold;
        font-size: 12px;
        color: #d91b42;
    }
</style>
