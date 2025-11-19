<script>
    import "../app.css";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();

    let menus = $state([
        { label: "首页", href: "#" },
        { label: "相册", href: "#" },
        { label: "下载", href: "#" },
        { label: "留言本", href: "#" },
        { label: "友链", href: "#" },
    ]);
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{@render header()}
{@render children()}
{@render footer()}

{#snippet header()}
    <header
        class="w-full text-[#003399] bg-[#e7f0ff] shadow-[inset_0_-1px_0_#b8d1ff,inset_0_1px_0_#ffffff]"
    >
        <div class="mx-auto w-full px-4">
            <!-- 顶栏：Logo + 小工具链接 -->
            <div class="flex items-center justify-between py-2 text-[13px]">
                <a href="#" class="flex items-center gap-2">
                    <span
                        class="text-2xl font-black tracking-tight text-[#1f44a0]"
                        >BluePortal</span
                    >
                    <span
                        class="hidden sm:inline px-2 py-0.5 rounded bg-white text-[#0a7c12] ring-1 ring-[#9fbef7]"
                        >beta</span
                    >
                </a>
                <div class="hidden md:flex items-center gap-4">
                    <a class="hover:underline" href="#">Sign In</a>
                    <a class="hover:underline" href="#">Register</a>
                    <a class="hover:underline" href="#">Help</a>
                </div>
            </div>

            <!-- 渐变导航条（XP 味） -->
            <div
                class="rounded-md overflow-hidden ring-1 ring-[#9fbef7] shadow-[0_1px_0_#9fbef7]"
            >
                <div
                    class="px-3 py-2 text-white font-semibold
                      [background:linear-gradient(180deg,#3b6dd8_0%,#2f5cc0_50%,#2a53b0_100%)]
                      shadow-[inset_0_1px_0_#6fa0ff,inset_0_-1px_0_#1f44a0]"
                >
                    <ul class="flex flex-wrap items-center gap-5">
                        <li><a class="hover:underline" href="#">Home</a></li>
                        <li><a class="hover:underline" href="#">News</a></li>
                        <li>
                            <a class="hover:underline" href="#">Downloads</a>
                        </li>
                        <li><a class="hover:underline" href="#">Forums</a></li>
                        <li><a class="hover:underline" href="#">Contact</a></li>
                        <li class="ml-auto hidden md:block">
                            <form
                                class="flex items-center gap-1 text-[#003399]"
                            >
                                <input
                                    class="h-7 w-48 px-2 bg-white rounded-sm shadow-[inset_0_1px_0_#fff,inset_0_-1px_0_#c0c0c0]"
                                    placeholder="Search..."
                                />
                                <button
                                    class="h-7 px-3 rounded-sm bg-white text-[#1f44a0] ring-1 ring-[#9fbef7] hover:bg-[#f3f7ff]"
                                    >Go</button
                                >
                            </form>
                        </li>
                    </ul>
                </div>
                <!-- 次级导航（标签感） -->
                <div
                    class="bg-[#d7e7ff] px-3 py-1 text-[13px] text-[#1f44a0] shadow-[inset_0_1px_0_#ffffff]"
                >
                    <ul class="flex flex-wrap gap-4">
                        <li><a class="hover:underline" href="#">Windows</a></li>
                        <li><a class="hover:underline" href="#">Office</a></li>
                        <li>
                            <a class="hover:underline" href="#">Developer</a>
                        </li>
                        <li>
                            <a class="hover:underline" href="#">Downloads</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
{/snippet}

{#snippet footer()}
    <footer
        class="w-full bg-[#e7f0ff] text-[#003399] border-t border-[#b8d1ff]"
    >
        <div
            class="mx-auto w-full px-4 py-6 grid gap-4 md:grid-cols-3 text-[13px]"
        >
            <div>
                <h4 class="font-bold text-[#1f44a0]">BluePortal</h4>
                <p class="mt-1 text-[#335aa8]">
                    Your classic web start page since 2002.
                </p>
            </div>
            <ul class="space-y-1">
                <li><a class="hover:underline" href="#">About</a></li>
                <li><a class="hover:underline" href="#">Privacy</a></li>
                <li><a class="hover:underline" href="#">Terms</a></li>
            </ul>
            <div class="md:text-right">
                <p>© 2002–2025 BluePortal Inc.</p>
                <p class="text-[#335aa8]">Last updated: 10 Nov 2025</p>
            </div>
        </div>
        <!-- 底部渐变细线 -->
        <div
            class="h-1 w-full bg-gradient-to-r from-[#cfe3ff] via-[#9fbef7] to-[#cfe3ff]"
        ></div>
    </footer>
{/snippet}
