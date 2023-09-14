<script lang="ts">
    import { formatToSimpleDate } from "$lib/helpers/formatDate";
    import { Pencil } from "lucide-svelte";

    export let entry: any;
</script>

<li>
    <div class="meta">
        <p class="success">{formatToSimpleDate(entry.date)}</p>
        <a href="/entries/{entry.id}" class="icon"><Pencil size={20} /></a>
    </div>
    <p>{entry.content}</p>
</li>

<style lang="scss">
    li {
        border-top: 1px solid;
        padding: 15px 0 10px;

        a {
            text-decoration: none;
        }

        .icon {
            padding: 5px;
            color: var(--yellow-dark);
            background-color: var(--yellow-light);
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

            &:hover {
                background-color: var(--yellow);
            }
        }
        .meta {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            padding-bottom: 10px;
            font-weight: 600;
        }
    }
</style>
