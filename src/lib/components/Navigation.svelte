<script lang="ts">
    import { Home, BookOpen, PlusCircle, User2, LogOut } from "lucide-svelte";
</script>

<nav class="">
    <a href="/"><Home /><span> Home</span></a>
    <a href="/entries"><BookOpen /><span> Entries</span></a>
    <a href="/entries/create"><PlusCircle /><span> New entry</span></a>
    <a href="/profile"><User2 /><span> Profile</span></a>
    <a href="/auth/signout"><LogOut /><span> Logout</span></a>
</nav>

<style lang="scss">
    nav {
        display: flex;
        gap: 15px;

        @media (min-width: $breakpoint-sm) {
            position: relative;
            width: 200px;
            flex-direction: column;
            padding-right: 0;
        }

        a {
            display: flex;
            align-items: center;
            gap: 5px;
            text-decoration: none;

            span {
                display: none;

                @media (min-width: $breakpoint-sm) {
                    display: inline;
                }
            }
        }
    }
</style>
