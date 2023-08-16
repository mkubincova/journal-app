<script lang="ts">
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>{$page.status}</title>
</svelte:head>

<h1>{$page.error?.message}</h1>
