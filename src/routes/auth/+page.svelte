<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/state";

    /**
     * @type {string|null}
     */
    let action = $state("login");

    $effect(() => {
        action = page.url.searchParams.get("action");
        $inspect("action", action).with(console.log);

        return () => {};
    });
</script>

<h1 class="font-serif text-3xl mb-3 border-b border-slate-300 pb-2">
    登录 / 注册
</h1>

<div class="grid grid-cols-1 md:grid-cols-12 gap-4">
    <!-- 左侧说明栏（旧站信息侧栏味道） -->
    <aside class="md:col-span-4">
        <div
            class="border border-slate-300 bg-slate-50 p-3 text-[13px] leading-snug space-y-2"
        >
            <div class="font-semibold text-slate-800">欢迎来到本站</div>
            <p class="text-slate-700">
                登录后可参与讨论、收藏条目、编辑个人资料。
            </p>
            <ul class="list-disc pl-4 text-slate-700 space-y-1">
                <li>查看和管理你的收藏</li>
                <li>获得最新更新通知</li>
                <li>参与社区讨论</li>
            </ul>
            <p class="text-slate-700">还没有账号？请在右侧注册一个新账户。</p>
        </div>

        <div
            class="border border-slate-300 bg-white p-3 mt-3 text-[13px] leading-snug space-y-2"
        >
            <div class="font-semibold text-slate-800">相关链接</div>
            <ul class="space-y-1">
                <li>
                    <a href="#" class="text-blue-700 hover:underline"
                        >忘记密码</a
                    >
                </li>
                <li>
                    <a href="#" class="text-blue-700 hover:underline"
                        >隐私政策</a
                    >
                </li>
                <li>
                    <a href="#" class="text-blue-700 hover:underline"
                        >服务条款</a
                    >
                </li>
                <li>
                    <a href="#" class="text-blue-700 hover:underline"
                        >联系管理员</a
                    >
                </li>
            </ul>
        </div>
    </aside>

    <!-- 右侧表单区 -->
    <section class="md:col-span-8">
        <div class="border border-slate-300 bg-white">
            <!-- Tabs -->
            <div
                class="flex text-[13px] border-b border-slate-300"
                role="tablist"
                aria-label="登录注册切换"
            >
                <button
                    id="tab-login"
                    class={[
                        "px-3",
                        "py-1.5",
                        "border-r",
                        "border-slate-300",
                        "bg-white",
                        "hover:bg-slate-50",
                        action === "login" ? "font-semibold" : "",
                    ]}
                    role="tab"
                    aria-selected={action === "login"}
                    aria-controls="panel-login"
                    type="button"
                    data-tab="login"
                    onclick={() => (action = 'login')}
                >
                    登录
                </button>

                <button
                    id="tab-register"
                    class={[
                        "px-3",
                        "py-1.5",
                        "border-r",
                        "border-slate-300",
                        "hover:bg-slate-50",
                        action === "register" ? "font-semibold" : "",
                    ]}
                    role="tab"
                    aria-selected={action === "register"}
                    aria-controls="panel-register"
                    type="button"
                    data-tab="register"
                    onclick={() => (action = 'register')}
                >
                    注册
                </button>
            </div>

            <!-- Login Panel -->
            <div
                id="panel-login"
                role="tabpanel"
                aria-labelledby="tab-login"
                class={["p-4", action !== "login" ? 'hidden' : '']}
            >
                <form class="space-y-3" action="#" method="post">
                    <div>
                        <label class="block text-xs text-slate-700 mb-1"
                            >邮箱或用户名</label
                        >
                        <input
                            type="text"
                            name="login"
                            autocomplete="username"
                            class="w-full border border-slate-400 bg-white px-2 py-1 text-xs leading-none rounded-sm focus:outline-none focus:ring-0 focus:border-slate-600"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div>
                        <label class="block text-xs text-slate-700 mb-1"
                            >密码</label
                        >
                        <input
                            type="password"
                            name="password"
                            autocomplete="current-password"
                            class="w-full border border-slate-400 bg-white px-2 py-1 text-xs leading-none rounded-sm focus:outline-none focus:ring-0 focus:border-slate-600"
                            placeholder="输入密码"
                        />
                    </div>

                    <div class="flex items-center justify-between text-xs">
                        <label class="flex items-center gap-2 text-slate-700">
                            <input
                                type="checkbox"
                                name="remember"
                                class="border border-slate-400"
                            />
                            记住我
                        </label>
                        <a href="#" class="text-blue-700 hover:underline"
                            >忘记密码？</a
                        >
                    </div>

                    <div class="flex items-center gap-2 pt-1">
                        <button
                            type="submit"
                            class="border border-slate-400 bg-slate-100 px-3 py-1.5 text-xs hover:bg-slate-200"
                            >登录</button
                        >
                        <button
                            type="button"
                            class="border border-slate-400 bg-slate-100 px-3 py-1.5 text-xs hover:bg-slate-200"
                            data-switch="register">没有账号？去注册</button
                        >
                    </div>

                    <div
                        class="border-t border-slate-200 pt-3 text-[13px] text-slate-700"
                    >
                        <div class="font-semibold mb-1 text-slate-800">
                            其他方式
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <button
                                type="button"
                                class="border border-slate-400 bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200"
                                >微信登录</button
                            >
                            <button
                                type="button"
                                class="border border-slate-400 bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200"
                                >GitHub 登录</button
                            >
                            <button
                                type="button"
                                class="border border-slate-400 bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200"
                                >Google 登录</button
                            >
                        </div>
                    </div>
                </form>
            </div>

            <!-- Register Panel -->
            <div
                id="panel-register"
                role="tabpanel"
                aria-labelledby="tab-register"
                class={["p-4", action !== "register" ? 'hidden' : '']}
            >
                <form class="space-y-3" action="#" method="post">
                    <div>
                        <label class="block text-xs text-slate-700 mb-1">用户名</label>
                        <input
                            type="text"
                            name="username"
                            autocomplete="username"
                            class="w-full border border-slate-400 bg-white px-2 py-1 text-xs leading-none rounded-sm focus:outline-none focus:ring-0 focus:border-slate-600"
                            placeholder="你的显示名称"
                        />
                    </div>

                    <div>
                        <label class="block text-xs text-slate-700 mb-1"
                            >邮箱</label
                        >
                        <input
                            type="email"
                            name="email"
                            autocomplete="email"
                            class="w-full border border-slate-400 bg-white px-2 py-1 text-xs leading-none rounded-sm focus:outline-none focus:ring-0 focus:border-slate-600"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="block text-xs text-slate-700 mb-1"
                                >密码</label
                            >
                            <input
                                type="password"
                                name="new_password"
                                autocomplete="new-password"
                                class="w-full border border-slate-400 bg-white px-2 py-1 text-xs leading-none rounded-sm focus:outline-none focus:ring-0 focus:border-slate-600"
                                placeholder="至少 8 位"
                            />
                        </div>
                        <div>
                            <label class="block text-xs text-slate-700 mb-1"
                                >确认密码</label
                            >
                            <input
                                type="password"
                                name="confirm_password"
                                autocomplete="new-password"
                                class="w-full border border-slate-400 bg-white px-2 py-1 text-xs leading-none rounded-sm focus:outline-none focus:ring-0 focus:border-slate-600"
                                placeholder="再次输入"
                            />
                        </div>
                    </div>

                    <div class="text-xs text-slate-700 space-y-1">
                        <label class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="agree"
                                class="border border-slate-400"
                            />
                            我已阅读并同意
                            <a href="#" class="text-blue-700 hover:underline">服务条款</a>
                            与
                            <a href="#" class="text-blue-700 hover:underline">隐私政策</a>
                        </label>
                    </div>

                    <div class="flex items-center gap-2 pt-1">
                        <button
                            type="submit"
                            class="border border-slate-400 bg-slate-100 px-3 py-1.5 text-xs hover:bg-slate-200"
                        >
                            创建账户
                        </button>
                        <button
                            type="button"
                            class="border border-slate-400 bg-slate-100 px-3 py-1.5 text-xs hover:bg-slate-200"
                            onclick={() => goto('/auth?action=login')}
                        >
                            已有账号？去登录
                        </button>
                    </div>

                    <p
                        class="text-[12px] text-slate-500 border-t border-slate-200 pt-3"
                    >
                        注册即表示你同意本站规则。账户创建后可随时在“个人设置”中修改资料。
                    </p>
                </form>
            </div>
        </div>
    </section>
</div>
