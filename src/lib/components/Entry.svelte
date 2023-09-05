<script lang="ts">
    import { formatToSimpleDate } from "$lib/helpers/formatDate";
    import { ArrowRightCircle } from "lucide-svelte";

    export let entry: any;
</script>

<li>
    <a href="entries/{entry.id}">
        <p>{entry.content}</p>
        <hr />
        <div class="flex">
            <small>{formatToSimpleDate(entry.date)}</small>
            <a href="/entries/{entry.id}"
                ><ArrowRightCircle color="var(--blue-dark)" /></a>
        </div>
    </a>
</li>

<style lang="scss">
    li {
        background: white;
        padding: 10px 15px;
        border-radius: 5px;

        .flex {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>
