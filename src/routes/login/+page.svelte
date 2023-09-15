<script lang="ts">
    import { onMount } from "svelte";
    import cover from "$assets/welcome-cover.png";

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

<div class="welcome" style="background-image: url({cover});">
    <h1>
        <span class="heading-small"
            >Welcome to <span bind:this={typed} class="typed">Your</span><span
                class="cursor">&nbsp;</span
            ></span>
        <span />
        <span class="underline">Journal</span>
    </h1>
    <div class="fixed">
        <a href="/auth/signin" class="btn btn-large">Get started</a>
    </div>
</div>

<style lang="scss">
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
