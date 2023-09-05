<script lang="ts">
    import { Home, BookOpen, PlusCircle, User2, LogOut } from "lucide-svelte";
</script>

<nav>
    <a href="/"><Home size={30} /><span> Home</span></a>
    <a href="/entries"><BookOpen size={30} /><span> Entries</span></a>
    <a href="/entries/create"
        ><PlusCircle size={30} /><span> New entry</span></a>
    <a href="/profile"><User2 size={30} /><span> Profile</span></a>
    <a href="/auth/signout"><LogOut size={30} /><span> Logout</span></a>
</nav>

<style lang="scss">
    nav {
        border-radius: 10px;
        overflow: hidden;
        background: var(--beige);
        display: flex;
        justify-content: space-between;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

        a {
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            padding: 10px;

            &:not(:last-child) {
                border-right: 1px solid white;
            }

            &:hover {
                background: var(--beige-dark);
            }

            span {
                display: none;
            }
        }

        @media (min-width: $breakpoint-sm) {
            flex-direction: column;
            padding-right: 0;
            padding: 0;
            box-shadow: none;

            a {
                gap: 10px;
                justify-content: flex-start;

                &:hover {
                    background: var(--beige-dark);
                }

                &:not(:last-child) {
                    border-right: none;
                    border-bottom: 1px solid white;
                }

                span {
                    display: inline;
                }
            }
        }
    }
</style>
