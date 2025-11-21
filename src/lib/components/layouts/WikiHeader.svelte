<script>
    import { goto } from "$app/navigation";
    import {
        PUBLIC_APP_TITLE,
        PUBLIC_APP_DESCRIPTION,
    } from "$env/static/public";

    /**
     * @type {{logo?: string}}
     */
    let { logo } = $props();

    let searchText = $state("");
    let trimmedSearchText = $derived(searchText.trim());
    let onSearch = () => {
        alert(`功能未完善 {text: ${trimmedSearchText}}`);
    };
</script>

<header
    class="sticky top-0 z-40 border-b border-slate-300 bg-gradient-to-b from-slate-100 to-slate-200"
>
    <div class="max-w mx-auto px-4">
        <!-- 第一行：Logo + 站点信息 + 登录链接 -->
        <div
            class="flex items-center justify-between py-2 text-xs text-slate-700"
        >
            <div class="flex items-center gap-3">
                <!-- 假装的“地球”logo区域 -->
                <div
                    class="w-10 h-10 border border-slate-400 bg-white flex items-center justify-center text-[10px] leading-tight tracking-tight"
                >
                    {#if logo}
                        <img src={logo} alt="Copyandpaste logo" />
                    {:else}
                        <span class="font-serif italic">Wiki</span>
                    {/if}
                </div>
                <div class="leading-tight">
                    <div class="font-serif text-lg">{PUBLIC_APP_TITLE}</div>
                    <div class="">{PUBLIC_APP_DESCRIPTION}</div>
                </div>
            </div>

            <nav class="flex items-center gap-3">
                <span class="text-grey-500 hover:underline">未登录</span>
                <button class="hover:underline" onclick={() => goto("/auth?action=register")}>创建账户</button>
                <button class="hover:underline" onclick={() => goto("/auth?action=login")}>登录</button>
            </nav>
        </div>

        <!-- 第二行：命名空间 / 页签 -->
        <div class="flex border-t border-slate-300 text-[13px]">
            <nav class="flex border-t border-slate-300 text-[13px]">
                <a
                    href="/"
                    class="px-3 py-1.5 border-r border-slate-300 bg-white font-semibold hover:bg-slate-50"
                >
                    首页
                </a>
                <a
                    href="/blog"
                    class="px-3 py-1.5 border-r border-slate-300 hover:bg-slate-50"
                >
                    博客
                </a>
                <a
                    href="#"
                    class="px-3 py-1.5 border-r border-slate-300 hover:bg-slate-50"
                >
                    分类
                </a>
                <a
                    href="#"
                    class="px-3 py-1.5 border-r border-slate-300 hover:bg-slate-50"
                >
                    关于
                </a>
            </nav>
            <div class="flex ml-auto">
                <button
                    class="px-3 py-1.5 border-l border-slate-300 hover:bg-slate-50"
                >
                    阅读
                </button>
                <button
                    class="px-3 py-1.5 border-l border-slate-300 hover:bg-slate-50"
                >
                    查看源代码
                </button>
                <button
                    class="px-3 py-1.5 border-l border-slate-300 hover:bg-slate-50"
                >
                    查看历史
                </button>
            </div>
        </div>

        <!-- 第三行：面包屑 + 搜索框 -->
        <div
            class="flex items-center justify-between border-t border-slate-300 py-1.5 text-[12px]"
        >
            <div class="flex items-center gap-2">
                <span class="text-slate-600">首页</span>
                <span class="text-slate-400">›</span>
                <span class="font-semibold">分类</span>
                <span class="text-slate-400">›</span>
                <span class="font-semibold">IT</span>
            </div>

            <form class="flex items-center gap-1 text-xs">
                <input
                    type="text"
                    bind:value={searchText}
                    class="border border-slate-400 bg-white px-2 py-1 leading-none focus:outline-none focus:ring-0 focus:border-slate-600 w-44"
                />
                <button
                    type="submit"
                    onclick={onSearch}
                    class="border border-slate-400 bg-slate-100 px-2 py-1 leading-none hover:bg-slate-200"
                >
                    搜索
                </button>
            </form>
        </div>
    </div>
</header>
