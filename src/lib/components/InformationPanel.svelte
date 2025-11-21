<script>
  let {
    onClickForgotPassword = () => {},
    onClickPrivacyPolicy = () => {},
    onClickTermsOfService = () => {},
    onClickContactTheAdmin = () => {},
  } = $props();
</script>

<div>
  <div
    class="border border-slate-300 bg-slate-50 p-3 text-[13px] leading-snug space-y-2"
  >
    <div class="font-semibold text-slate-800">欢迎来到本站</div>
    <p class="text-slate-700">登录后可参与讨论、收藏条目、编辑个人资料。</p>
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
        <button
            type="button"
            class="text-blue-700 hover:underline"
            onclick={() => onClickForgotPassword()}
        >
            忘记密码
        </button>
      </li>
      <li>
        <button
            type="button"
            class="text-blue-700 hover:underline"
            onclick={() => onClickPrivacyPolicy()}
        >
            隐私政策
        </button>
      </li>
      <li>
        <button
            type="button"
            class="text-blue-700 hover:underline"
            onclick={() => onClickTermsOfService()}
        >
            服务条款
        </button>
      </li>
      <li>
        <button
            type="button"
            class="text-blue-700 hover:underline"
            onclick={() => onClickContactTheAdmin()}
        >
            联系管理员
        </button>
      </li>
    </ul>
  </div>
</div>
