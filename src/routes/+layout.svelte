<script lang="ts">
    import "../styles/main.scss";
    import { page } from "$app/stores";
    import { Header } from "$components";
    import Navigation from "$components/Navigation.svelte";
</script>

<svelte:head>
    <title>Journal {$page.data.title ? `- ${$page.data.title}` : ""}</title>
</svelte:head>

<div id="app">
    <!-- <Header /> -->
    <div class="page-content">
        {#if $page.data.session}
            <aside>
                <Navigation />
            </aside>
        {/if}
        <main>
            <slot />
        </main>
    </div>
</div>

<style lang="scss">
    #app {
        position: relative;
        min-width: 100vw;
        min-height: 100vh;
    }

    .page-content {
        display: flex;

        main {
            flex: 1;
        }

        aside {
            position: fixed;
            bottom: 0;

            @media (min-width: $breakpoint-sm) {
                position: relative;
                width: 200px;
            }

            @media (min-width: $breakpoint-md) {
                position: relative;
                width: 300px;
            }
        }
    }
</style>
