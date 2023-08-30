<script lang="ts">
    import "../styles/main.scss";
    import { page } from "$app/stores";
    import { Header } from "$components";
</script>

<svelte:head>
    <title>Journal {$page.data.title ? `- ${$page.data.title}` : ""}</title>
</svelte:head>

<div id="app">
    <Header />
    <main>
        <slot />
    </main>
</div>

<style lang="scss">
    #app {
        min-width: 100vw;
        min-height: 100vh;
        background-color: var(--pink-light);

        --s: 160px; /* control the size */
        --_g: #ffffff00 52%, #ffffff1a /* first color */ 54% 57%, #0000 59%;
        background: radial-gradient(farthest-side at -33.33% 50%, var(--_g)) 0
                calc(var(--s) / 2),
            radial-gradient(farthest-side at 50% 133.33%, var(--_g))
                calc(var(--s) / 2) 0,
            radial-gradient(farthest-side at 133.33% 50%, var(--_g)),
            radial-gradient(farthest-side at 50% -33.33%, var(--_g)),
            var(--pink-light); /* second color */
        background-size: calc(var(--s) / 4.667) var(--s),
            var(--s) calc(var(--s) / 4.667);
    }
</style>
