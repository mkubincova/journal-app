<script>
    import { page } from "$app/stores";
    import { signIn } from "@auth/sveltekit/client";
    import { BookOpen } from "lucide-svelte";
</script>

<div class="">
    {#if $page.data.session}
        <h1>Hello there.</h1>
        <a href="/entries">Check your entries</a>
        <a href="/entries/create">Make a new entry</a>
    {:else}
        <div class="text-center">
            <div class="logo">
                <BookOpen size={60} color="var(--white)" />
            </div>
            <h1>Welcome to your<br />online journal!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus id faucibus sem, eu maximus nisi. Donec efficitur
                lectus ac odio hendrerit congue. Maecenas hendrerit magna vitae
                massa faucibus, ac ullamcorper felis porttitor. Sed eu porttitor
                lorem. Curabitur sed enim a erat feugiat fermentum.
            </p>

            <button class="btn btn-large" on:click={() => signIn()}
                >Get Started</button
            >
        </div>
    {/if}
</div>

<style lang="scss">
    p {
        max-width: 70ch;
        margin: 0 auto 20px;
    }
    button {
        display: inline-block;
        margin: auto;
    }

    .logo {
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: var(--pink-dark);
        margin: 0 auto 20px;
    }
</style>
