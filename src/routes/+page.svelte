<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import cover from "$assets/welcome-cover.png";
    import reading from "$assets/reading.png";

    import EntryList from "$components/EntryList.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: entries = data.entries;

    let typed: HTMLElement;
    const totype = ["Your", "My", "Our"];

    const delayTyping_char = 180;
    const delayErasing_text = 120;
    const delayTyping_text = 2000;

    let totypeIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < totype[totypeIndex].length) {
            typed.textContent += totype[totypeIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, delayTyping_char);
        } else {
            setTimeout(eraseText, delayTyping_text);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typed.textContent = totype[totypeIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, delayErasing_text);
        } else {
            totypeIndex++;

            if (totypeIndex >= totype.length) totypeIndex = 0;
            setTimeout(typeText, delayTyping_text);
        }
    }

    onMount(() => {
        if (totype[totypeIndex].length) {
            typed.textContent = "";
            setTimeout(typeText, delayTyping_text);
        }
    });
</script>

{#if $page.data.session}
    <div class="home">
        <div class="header">
            <img
                src={reading}
                alt=""
                class="header-img"
                width="360"
                height="400" />

            <h1>
                <span class="heading-small">Hello there,</span>
                {$page.data.session.user.name}
            </h1>
        </div>

        <div>
            <h2>Your entries</h2>

            <EntryList {entries} />
        </div>
    </div>
{:else}
    <div class="welcome" style="background-image: url({cover});">
        <h1>
            <span class="heading-small"
                >Welcome to <span bind:this={typed} class="typed">Your</span
                ><span class="cursor">&nbsp;</span></span>
            <span />
            <span class="underline">Journal</span>
        </h1>
        <div class="fixed">
            <a href="/auth/signin" class="btn btn-large">Get started</a>
        </div>
    </div>
{/if}

<style lang="scss">
    .home {
        min-height: 100vh;

        .header {
            position: relative;
            z-index: 0;
            margin-bottom: 50px;
            &:before {
                content: "";
                position: absolute;
                top: 45%;
                bottom: -30px;
                right: -10px;
                left: -10px;
                background: var(--green);
                border-radius: 65% 65% 10% 10% / 65% 65% 10% 10%;
                z-index: -1;
            }

            .header-img {
                max-width: 300px;
                width: 80%;
                height: auto;
                object-fit: contain;
                display: block;
                margin: 0 auto;
            }

            h1 {
                color: var(--yellow);
                margin-top: 20px;
                padding-left: var(--container-padding);
                padding-right: var(--container-padding);
                word-break: break-all;

                span {
                    color: white;
                }
            }

            @media (min-width: $breakpoint-sm) {
                display: flex;
                align-items: flex-end;

                &:before {
                    top: 30%;
                    bottom: -15px;
                    right: 0px;
                    left: 0px;
                    border-radius: 65% 65% 5% 5%/65% 65% 15% 15%;
                }
                .header-img {
                    max-width: 200px;
                }

                h1 {
                    width: 100%;
                }
            }
        }
    }
    .welcome {
        height: 100vh;
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: var(--beige);
        h1 {
            font-size: 3.2rem;
            text-align: center;
        }
        .fixed {
            position: fixed;
            bottom: 20px;
            z-index: 1;
        }
        .underline {
            color: var(--yellow);
        }
        .typed {
            font-style: italic;
        }

        .cursor {
            display: inline-block;
            animation: blinker 800ms infinite;

            :global(.no-js) & {
                display: none;
            }
        }

        @keyframes blinker {
            0% {
                background-color: var(--green);
            }
            50% {
                background-color: transparent;
            }
            100% {
                background-color: var(--green);
            }
        }
    }
</style>
