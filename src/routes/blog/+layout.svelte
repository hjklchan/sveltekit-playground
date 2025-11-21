<script>
  let { children } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-12 gap-4">
  <!-- 左侧：文章表格列表区 -->
  <main class="md:col-span-10">
    {@render children()}
  </main>

  <!-- 右侧：AD + 分类 + 标签区 -->
  <aside class="md:col-span-2 space-y-3">
    <!-- AD 区 -->
    <div class="border border-slate-300 bg-white p-3 text-[13px] leading-snug">
      <div
        class="font-semibold text-slate-800 border-b border-slate-200 pb-1 mb-2"
      >
        赞助 / 广告
      </div>
      <div
        class="border border-slate-300 bg-slate-50 p-2 text-center text-slate-700"
      >
        AD 位（300×250）
      </div>
      <p class="text-[12px] text-slate-600 mt-2">
        这里放你的广告图、联盟卡片或公告信息。
      </p>
    </div>

    <!-- 分类区 -->
    <div class="border border-slate-300 bg-white p-3 text-[13px] leading-snug">
      <div
        class="font-semibold text-slate-800 border-b border-slate-200 pb-1 mb-2"
      >
        分类
      </div>
      <ul class="space-y-1">
        <li class="flex items-center justify-between">
          <a href="/category/edu" class="text-blue-700 hover:underline">教育</a>
          <span class="text-[12px] text-slate-500">32</span>
        </li>
        <li class="flex items-center justify-between">
          <a href="/category/tech" class="text-blue-700 hover:underline">技术</a
          >
          <span class="text-[12px] text-slate-500">47</span>
        </li>
        <li class="flex items-center justify-between">
          <a href="/category/life" class="text-blue-700 hover:underline">生活</a
          >
          <span class="text-[12px] text-slate-500">21</span>
        </li>
        <li class="flex items-center justify-between">
          <a href="/category/notes" class="text-blue-700 hover:underline"
            >随笔</a
          >
          <span class="text-[12px] text-slate-500">18</span>
        </li>
        <li class="flex items-center justify-between">
          <a href="/category/other" class="text-blue-700 hover:underline"
            >其他</a
          >
          <span class="text-[12px] text-slate-500">10</span>
        </li>
      </ul>
    </div>

    <!-- 标签区 -->
    <div class="border border-slate-300 bg-white p-3 text-[13px] leading-snug">
      <div
        class="font-semibold text-slate-800 border-b border-slate-200 pb-1 mb-2"
      >
        标签
      </div>
      <div class="flex flex-wrap gap-1.5">
        <a
          href="/tag/orff"
          class="border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs hover:bg-white text-blue-700 hover:underline"
          >Orff</a
        >
        <a
          href="/tag/sveltekit"
          class="border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs hover:bg-white text-blue-700 hover:underline"
          >SvelteKit</a
        >
        <a
          href="/tag/tailwind"
          class="border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs hover:bg-white text-blue-700 hover:underline"
          >TailwindCSS</a
        >
        <a
          href="/tag/rhythm"
          class="border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs hover:bg-white text-blue-700 hover:underline"
          >节奏教育</a
        >
        <a
          href="/tag/fitness"
          class="border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs hover:bg-white text-blue-700 hover:underline"
          >减脂</a
        >
        <a
          href="/tag/game"
          class="border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs hover:bg-white text-blue-700 hover:underline"
          >建构游戏</a
        >
        <a
          href="/tag/ui"
          class="border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs hover:bg-white text-blue-700 hover:underline"
          >复古UI</a
        >
        <a
          href="/tag/wordpress"
          class="border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs hover:bg-white text-blue-700 hover:underline"
          >WordPress</a
        >
        <a
          href="/tag/laravel"
          class="border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs hover:bg-white text-blue-700 hover:underline"
          >Laravel</a
        >
        <a
          href="/tag/music"
          class="border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs hover:bg-white text-blue-700 hover:underline"
          >音乐活动</a
        >
      </div>
      <div class="text-[12px] text-slate-500 mt-2">点击标签查看相关文章。</div>
    </div>
  </aside>
</div>
