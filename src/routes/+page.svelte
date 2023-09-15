<script lang="ts">
    import { page } from "$app/stores";
    import reading from "$assets/reading.png";

    import EntryList from "$components/EntryList.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: entries = data.entries;
</script>

<div class="home">
    <div class="header">
        <img src={reading} alt="" class="header-img" width="360" height="400" />

        <h1>
            <span class="heading-small">Hello there,</span>
            {$page?.data?.session?.user.name}
        </h1>
    </div>

    <div class="container">
        <h2>Your entries</h2>

        <EntryList {entries} />
    </div>
</div>

<style lang="scss">
    .home {
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
                color: white;
                margin-top: 20px;
                padding-left: var(--container-padding);
                padding-right: var(--container-padding);

                span {
                    color: var(--yellow-light);
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
</style>
