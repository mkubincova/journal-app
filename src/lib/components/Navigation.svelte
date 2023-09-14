<script lang="ts">
    import { Home, BookOpen, PlusCircle, User2, LogOut } from "lucide-svelte";
    import { page } from "$app/stores";

    const navItems = [
        {
            path: "/",
            name: "Home",
            icon: Home,
        },
        {
            path: "/entries",
            name: "Entires",
            icon: BookOpen,
        },
        {
            path: "/entries/create",
            name: "New entry",
            icon: PlusCircle,
        },
        {
            path: "/profile",
            name: "Profile",
            icon: User2,
        },
        {
            path: "/auth/signout",
            name: "Logout",
            icon: LogOut,
        },
    ];
</script>

<nav>
    {#each navItems as item}
        <a href={item.path} class:active={$page.url.pathname === item.path}>
            <svelte:component this={item.icon} size={30} />
            <span>{item.name}</span>
        </a>
    {/each}
</nav>

<style lang="scss">
    nav {
        border-radius: 10px;
        overflow: hidden;
        background: var(--yellow-light);
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
            color: var(--yellow-dark);
            &:not(:last-child) {
                border-right: 1px solid white;
            }

            &:hover,
            &.active {
                background: var(--yellow);
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
            position: sticky;
            top: 30px;

            a {
                gap: 10px;
                justify-content: flex-start;

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
