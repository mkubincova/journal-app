<script lang="ts">
    import "../styles/main.scss";
    import { page } from "$app/stores";
    import { Header } from "$components";
</script>

<svelte:head>
    <title>Journal {$page.data.title ? `- ${$page.data.title}` : ""}</title>
</svelte:head>

<div id="app" class="container">
    <Header />
    <main>
        <slot />
    </main>
</div>
