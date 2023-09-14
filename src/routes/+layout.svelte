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
    <div class="page-content {$page.data.session && 'container'}">
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
        background-color: var(--beige);
    }

    .page-content {
        display: flex;

        @media (min-width: $breakpoint-sm) {
            gap: 20px;

            main,
            aside {
                padding-top: 40px;
                padding-bottom: 0;
            }
        }

        @media (min-width: $breakpoint-md) {
            gap: 30px;
        }

        main {
            flex: 1;
            padding-bottom: 70px;
        }

        aside {
            position: fixed;
            bottom: 10px;
            width: calc(100% - 20px);
            max-width: 420px;
            left: 50%;
            transform: translateX(-50%);

            @media (min-width: $breakpoint-sm) {
                position: relative;
                width: 200px;
                transform: none;
                left: auto;
            }
        }

        &:not(.container) {
            main,
            aside {
                padding: 0;
            }
        }
    }
</style>
