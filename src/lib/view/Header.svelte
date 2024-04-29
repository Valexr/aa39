<script lang="ts" context="module">
    import Logo from "$lib/components/Logo.svelte";
</script>

<header class="container-fluid">
    <nav>
        <ul>
            <li id="logo">
                <Logo />
                <!-- <a href="/">AA39</a> -->
            </li>
            <li><small>Анонимные Алкоголики Калининграда</small></li>
        </ul>
        <ul>
            <!-- <li><a href="/" class="secondary">Services</a></li> -->
            <li>
                <details class="dropdown">
                    <summary> Account </summary>
                    <ul dir="rtl">
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Settings</a></li>
                        <li><a href="/">Security</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </details>
            </li>
        </ul>
    </nav>
</header>

<style>
    #logo {
        padding: 0;
    }
</style>
