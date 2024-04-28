<script lang="ts" context="module">
    import Logo from "$lib/components/Logo.svelte";
    import Group from "$lib/components/Group.svelte";
</script>

<header class="container-fluid">
    <nav>
        <ul>
            <li id="logo">
                <Logo />
                <!-- <a href="/">AA39</a> -->
            </li>
            <li><small>Анонимные Алкоголики Калининград</small></li>
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

<main class="container-fluid">
    <h1>Выход есть!</h1>

    <p>
        Если у Вас, Ваших родных или знакомых есть проблемы с алкоголем,
        возможно, содружество "Анонимные Алкоголики" (АА) сможет Вам помочь
        Помощь бесплатна и анонимна. Членом содружества может стать любой
        алкоголик, желающий бросить пить
    </p>

    <h2>ЧТО ТАКОЕ АА?</h2>

    <blockquote cite="https://www.aagrapevine.org/">
        <p>
            Анонимные Алкоголики © — это содружество, объединяющее мужчин и
            женщин, которые делятся друг с другом своим опытом, силами и
            надеждами, чтобы решить свою общую проблему и помочь другим
            избавиться от алкоголизма. Единственное условие для членства в АА —
            это желание бросить пить. Члены АА не платят ни вступительных, ни
            членских взносов. Мы содержим себя сами благодаря нашим добровольным
            пожертвованиям. АА не связано ни с какой сектой, вероисповеданием,
            политическим направлением, организацией или учреждением; стремится
            не вступать в полемику по каким бы то ни было вопросам, не
            поддерживает и не выступает против чьих бы то ни было интересов.
            Наша главная цель — оставаться трезвыми и помочь другим алкоголикам
            обрести здоровый, трезвый образ жизни…
        </p>
        <cite>
            <a href="https://www.aagrapevine.org/" target="_blank">
                © The A.A. Grapevine, Inc.
            </a>
        </cite>
    </blockquote>
</main>
<Group />
<footer class="container-fluid">
    © {new Date().getFullYear()} <a href="https://aa39.ru">aa39.ru</a>
</footer>

<style>
    @import "app.css";
    #logo {
        padding: 0;
    }
    li small {
        line-height: 1ch;
    }
</style>
