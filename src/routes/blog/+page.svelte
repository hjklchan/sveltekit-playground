<script>
</script>

<!-- 两区块：移动端上下；桌面端左右 -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-4">
  <!-- 热门文章 -->
  <section class="md:col-span-6">
    <div class="border border-slate-300 bg-white">
      <!-- 区块标题栏（旧站风） -->
      <div
        class="flex items-center justify-between bg-slate-100 border-b border-slate-300 px-3 py-1.5 text-[13px]"
      >
        <h2 class="font-semibold text-slate-800">热门文章</h2>
        <a href="/hot" class="text-blue-700 hover:underline text-xs">更多</a>
      </div>

      <!-- 列表（紧凑、信息密度高） -->
      <ol class="text-[13px] leading-snug divide-y divide-slate-200">
        <li class="p-3 hover:bg-slate-50">
          <div class="flex items-baseline gap-2">
            <span class="text-slate-500 text-xs">1.</span>
            <a href="/post/1" class="text-blue-700 hover:underline">
              SvelteKit 表单与 a11y：从报错到最佳实践
            </a>
          </div>
          <div class="text-[12px] text-slate-600 mt-0.5 line-clamp-1">
            label 关联、链接占位、校验与 load 数据传递的坑一次讲清。
          </div>
          <div class="flex gap-3 text-[12px] text-slate-500 mt-1">
            <span>阅读 3,502</span>
            <span>评论 41</span>
            <span>2025-11-12</span>
          </div>
        </li>

        <li class="p-3 hover:bg-slate-50">
          <div class="flex items-baseline gap-2">
            <span class="text-slate-500 text-xs">2.</span>
            <a href="/post/2" class="text-blue-700 hover:underline">
              幼儿建构游戏观察：醒狮馆诞生记的介入策略
            </a>
          </div>
          <div class="text-[12px] text-slate-600 mt-0.5 line-clamp-1">
            从材料不足到重建规划，记录教师观察与支持路径。
          </div>
          <div class="flex gap-3 text-[12px] text-slate-500 mt-1">
            <span>阅读 2,104</span>
            <span>评论 28</span>
            <span>2025-10-12</span>
          </div>
        </li>

        <li class="p-3 hover:bg-slate-50">
          <div class="flex items-baseline gap-2">
            <span class="text-slate-500 text-xs">3.</span>
            <a href="/post/3" class="text-blue-700 hover:underline">
              复古 UI 的边框与节奏：旧维基风 Tailwind 手册
            </a>
          </div>
          <div class="text-[12px] text-slate-600 mt-0.5 line-clamp-1">
            小字号、细分割、低饱和配色的组合方法总结。
          </div>
          <div class="flex gap-3 text-[12px] text-slate-500 mt-1">
            <span>阅读 1,337</span>
            <span>评论 17</span>
            <span>2025-11-05</span>
          </div>
        </li>

        <li class="p-3 hover:bg-slate-50">
          <div class="flex items-baseline gap-2">
            <span class="text-slate-500 text-xs">4.</span>
            <a href="/post/4" class="text-blue-700 hover:underline">
              每天 45 分钟爬坡的燃脂效果与饮食记录
            </a>
          </div>
          <div class="text-[12px] text-slate-600 mt-0.5 line-clamp-1">
            两周体脂变化、训练心率区间与实际体感。
          </div>
          <div class="flex gap-3 text-[12px] text-slate-500 mt-1">
            <span>阅读 889</span>
            <span>评论 9</span>
            <span>2025-10-29</span>
          </div>
        </li>

        <li class="p-3 hover:bg-slate-50">
          <div class="flex items-baseline gap-2">
            <span class="text-slate-500 text-xs">5.</span>
            <a href="/post/5" class="text-blue-700 hover:underline">
              声势教育在一日转换环节中的节奏策略实践
            </a>
          </div>
          <div class="text-[12px] text-slate-600 mt-0.5 line-clamp-1">
            以排队、盥洗、收区为例的可复用节奏引导方法。
          </div>
          <div class="flex gap-3 text-[12px] text-slate-500 mt-1">
            <span>阅读 1,248</span>
            <span>评论 23</span>
            <span>2025-11-18</span>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- 最新文章 -->
  <section class="md:col-span-6">
    <div class="border border-slate-300 bg-white">
      <div
        class="flex items-center justify-between bg-slate-100 border-b border-slate-300 px-3 py-1.5 text-[13px]"
      >
        <h2 class="font-semibold text-slate-800">最新文章</h2>
        <a href="/latest" class="text-blue-700 hover:underline text-xs">更多</a>
      </div>
       <div
        class="flex items-center justify-between bg-orange-50 border-b border-slate-300 px-3 py-1.5 text-[10px]"
      >
        最新文章按发布时间倒序展示，可能包含草稿或临时更新。
      </div>
      

      <ul class="text-[13px] leading-snug divide-y divide-slate-200">
        <li class="p-3 hover:bg-slate-50">
          <a href="/post/101" class="text-blue-700 hover:underline">
            2025-2026 学期教研计划重点梳理
          </a>
          <div class="flex gap-3 text-[12px] text-slate-500 mt-1">
            <span>教育</span>
            <span>2025-11-21</span>
            <span>阅读 42</span>
          </div>
        </li>

        <li class="p-3 hover:bg-slate-50">
          <a href="/post/100" class="text-blue-700 hover:underline">
            幼儿园一日活动转换：声势策略案例集更新
          </a>
          <div class="flex gap-3 text-[12px] text-slate-500 mt-1">
            <span>教育</span>
            <span>2025-11-20</span>
            <span>阅读 115</span>
          </div>
        </li>

        <li class="p-3 hover:bg-slate-50">
          <a href="/post/99" class="text-blue-700 hover:underline">
            Svelte 5 runes：$props() 与表单数据管理
          </a>
          <div class="flex gap-3 text-[12px] text-slate-500 mt-1">
            <span>技术</span>
            <span>2025-11-19</span>
            <span>阅读 83</span>
          </div>
        </li>

        <li class="p-3 hover:bg-slate-50">
          <a href="/post/98" class="text-blue-700 hover:underline">
            旧维基风站点：导航、表格与信息密度的平衡
          </a>
          <div class="flex gap-3 text-[12px] text-slate-500 mt-1">
            <span>随笔</span>
            <span>2025-11-18</span>
            <span>阅读 59</span>
          </div>
        </li>

        <li class="p-3 hover:bg-slate-50">
          <a href="/post/97" class="text-blue-700 hover:underline">
            健身后的晚餐焦虑：如何吃得踏实
          </a>
          <div class="flex gap-3 text-[12px] text-slate-500 mt-1">
            <span>生活</span>
            <span>2025-11-17</span>
            <span>阅读 71</span>
          </div>
        </li>

        <li class="p-3 hover:bg-slate-50">
          <a href="/post/96" class="text-blue-700 hover:underline">
            Laravel Clean Architecture：Input/Output Port 复盘
          </a>
          <div class="flex gap-3 text-[12px] text-slate-500 mt-1">
            <span>技术</span>
            <span>2025-11-16</span>
            <span>阅读 66</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</div>
