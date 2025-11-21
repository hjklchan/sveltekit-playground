<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import InformationPanel from "$lib/components/InformationPanel.svelte";

    /**
     * @type {string|null}
     */
    let action = $state("login");

    $effect(() => {
        action = page.url.searchParams.get("action");
        $inspect("action", action).with(console.log);

        return () => {};
    });

    /**
     * @typedef {{
     *  identifier: string,
     *  password: string,
     *  remember_me: boolean,
     * }} LoginFormData
     */
    /** @type {LoginFormData} */
    let loginFormData = $state({
        identifier: "",
        password: "",
        remember_me: false,
    });

    /**
     * @typedef {{
     *  username: string,
     *  email: string,
     *  password: string,
     *  confirm_password: string,
     *  agreed: boolean
     * }} RegisterFormData
     */
    /** @type {RegisterFormData} */
    let registerFormData = $state({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        agreed: false,
    });

    let onLoginSubmit = () => {
        console.log($state.snapshot(loginFormData));
    }
</script>

<h1 class="font-serif text-3xl mb-3 border-b border-slate-300 pb-2">
    登录 / 注册
</h1>

<div class="grid grid-cols-1 md:grid-cols-12 gap-4">
    <!-- 左侧说明栏（旧站信息侧栏味道） -->
    <aside class="md:col-span-4">
        <InformationPanel onClickForgotPassword={() => console.log('用户点击了忘记密码')} />
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
                <form class="space-y-3">
                    <div>
                        <label for="identifier" class="block text-xs text-slate-700 mb-1">邮箱或用户名</label>
                        <input
                            id="identifier"
                            type="text"
                            name="identifier"
                            autocomplete="username"
                            class="w-full border border-slate-400 bg-white px-2 py-1 text-xs leading-none rounded-sm focus:outline-none focus:ring-0 focus:border-slate-600"
                            placeholder="name@example.com"
                            bind:value={loginFormData.identifier}
                        />
                    </div>

                    <div>
                        <label for="password" class="block text-xs text-slate-700 mb-1">密码</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            autocomplete="current-password"
                            class="w-full border border-slate-400 bg-white px-2 py-1 text-xs leading-none rounded-sm focus:outline-none focus:ring-0 focus:border-slate-600"
                            placeholder="输入密码"
                            bind:value={loginFormData.password}
                        />
                    </div>

                    <div class="flex items-center justify-between text-xs">
                        <label class="flex items-center gap-2 text-slate-700">
                            <input
                                type="checkbox"
                                name="remember"
                                class="border border-slate-400"
                                bind:checked={loginFormData.remember_me}
                            />
                            记住我
                        </label>
                        <button type="button" class="text-blue-700 hover:underline">忘记密码？</button>
                    </div>

                    <div class="flex items-center gap-2 pt-1">
                        <button
                            type="button"
                            class="border border-slate-400 bg-slate-100 px-3 py-1.5 text-xs hover:bg-slate-200"
                            onclick={() => onLoginSubmit()}
                        >
                            登录
                        </button>
                        <button
                            type="button"
                            class="border border-slate-400 bg-slate-100 px-3 py-1.5 text-xs hover:bg-slate-200"
                            data-switch="register"
                            onclick={() => goto('/auth?action=register')}
                        >
                            没有账号？去注册
                        </button>
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
                            >
                                微信登录
                            </button>
                            <button
                                type="button"
                                class="border border-slate-400 bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200"
                            >
                                GitHub 登录
                            </button>
                            <button
                                type="button"
                                class="border border-slate-400 bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200"
                            >
                                Google 登录
                            </button>
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
                        <label for="username" class="block text-xs text-slate-700 mb-1">用户名</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            autocomplete="username"
                            class="w-full border border-slate-400 bg-white px-2 py-1 text-xs leading-none rounded-sm focus:outline-none focus:ring-0 focus:border-slate-600"
                            placeholder="你的显示名称"
                        />
                    </div>

                    <div>
                        <label for="email" class="block text-xs text-slate-700 mb-1">邮箱</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            autocomplete="email"
                            class="w-full border border-slate-400 bg-white px-2 py-1 text-xs leading-none rounded-sm focus:outline-none focus:ring-0 focus:border-slate-600"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label for="password" class="block text-xs text-slate-700 mb-1">密码</label>
                            <input
                                id="password"
                                type="password"
                                name="new_password"
                                autocomplete="new-password"
                                class="w-full border border-slate-400 bg-white px-2 py-1 text-xs leading-none rounded-sm focus:outline-none focus:ring-0 focus:border-slate-600"
                                placeholder="至少 8 位"
                            />
                        </div>
                        <div>
                            <label for="confirm_password" class="block text-xs text-slate-700 mb-1">确认密码</label>
                            <input
                                id="confirm_password"
                                type="password"
                                name="confirm_password"
                                autocomplete="new-password"
                                class="w-full border border-slate-400 bg-white px-2 py-1 text-xs leading-none rounded-sm focus:outline-none focus:ring-0 focus:border-slate-600"
                                placeholder="再次输入密码"
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
                            <button type="button" class="text-blue-700 hover:underline">服务条款</button>
                            与
                            <button type="button" class="text-blue-700 hover:underline">隐私政策</button>
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
