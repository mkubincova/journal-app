<script lang="ts">
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";
</script>

<h1>Create new entry</h1>

<form method="POST" use:enhance>
    <label for="content">Content</label><br />
    <textarea name="content" id="content" cols="30" rows="10" /><br />
    {#if $page.form?.contentError}
        <p class="error">{$page.form.contentError}</p>
    {/if}

    <label for="date">Date</label><br />
    <input type="datetime-local" name="date" id="date" /><br />
    <br />

    <input type="hidden" id="userId" name="userId" value={$page.data.userId} />

    <button>Create</button>
</form>

<br />
<br />

<a href="/entries">All entries</a>
