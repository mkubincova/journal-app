<script lang="ts">
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";
    import { formatToDateInput } from "$lib/helpers/formatDate";

    const today = formatToDateInput(new Date());
</script>

<div class="subpage">
    <div class="header">
        <h1>Create new entry</h1>
    </div>
    <div class="container">
        <form method="POST" use:enhance>
            <label for="content">Content</label>
            <textarea
                name="content"
                id="content"
                class:input-error={$page.form?.contentError} />
            {#if $page.form?.contentError}
                <small class="error">{$page.form.contentError}</small>
            {/if}

            <label for="date">Date</label>
            <input type="datetime-local" name="date" id="date" value={today} />

            <button class="btn">Create</button>
        </form>
    </div>
</div>

<style lang="scss">
    button {
        margin-top: 30px;
    }
</style>
