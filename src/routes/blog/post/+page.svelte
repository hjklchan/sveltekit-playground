<!-- 工具条 -->
<div
  class="border border-slate-300 bg-slate-50 p-2 text-[13px] flex flex-wrap items-center gap-2"
>
  <div class="text-slate-700">
    共 <span class="font-semibold">128</span> 篇文章
  </div>

  <div class="ml-auto flex flex-wrap items-center gap-2">
    <label class="flex items-center gap-1 text-xs text-slate-700">
      分类
      <select
        class="border border-slate-400 bg-white px-2 py-1 text-xs focus:outline-none focus:border-slate-600"
      >
        <option>全部</option>
        <option>随笔</option>
        <option>技术</option>
        <option>教育</option>
        <option>生活</option>
      </select>
    </label>

    <label class="flex items-center gap-1 text-xs text-slate-700">
      排序
      <select
        class="border border-slate-400 bg-white px-2 py-1 text-xs focus:outline-none focus:border-slate-600"
      >
        <option>最新发布</option>
        <option>最多阅读</option>
        <option>最多评论</option>
      </select>
    </label>

    <form class="flex items-center gap-1">
      <input
        type="text"
        placeholder="搜索标题/摘要"
        class="border border-slate-400 bg-white px-2 py-1 text-xs w-40 focus:outline-none focus:border-slate-600"
      />
      <button
        type="submit"
        class="border border-slate-400 bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200"
      >
        搜索
      </button>
    </form>
  </div>
</div>

<!-- 表格 -->
<div class="border border-slate-300 bg-white mt-3">
  <table class="w-full text-[13px] leading-snug">
    <thead class="bg-slate-100 text-xs font-semibold text-slate-800">
      <tr>
        <th class="border border-slate-300 px-2 py-1 text-left w-[50%]">标题</th>
        <th class="border border-slate-300 px-2 py-1 text-left w-[14%]">分类</th>
        <th class="border border-slate-300 px-2 py-1 text-left w-[16%]">发布日期</th>
        <th class="border border-slate-300 px-2 py-1 text-right w-[10%]">阅读</th>
        <th class="border border-slate-300 px-2 py-1 text-right w-[10%]">评论</th>
      </tr>
    </thead>

    <tbody class="text-slate-900">
      <tr class="hover:bg-slate-50">
        <td class="border border-slate-300 px-2 py-1 align-top">
          <a href="/post/1" class="text-blue-700 hover:underline">
            声势教育在一日转换环节中的节奏策略实践
          </a>
          <!-- <div class="text-[12px] text-slate-600 mt-0.5 line-clamp-1">
                以“排队—盥洗—收区”三类场景为例，整理可复用的节奏引导方法。
              </div> -->
        </td>
        <td class="border border-slate-300 px-2 py-1 align-top text-slate-700"
          >教育</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-slate-700"
          >2025-11-18</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-right"
          >1,248</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-right"
          >23</td
        >
      </tr>

      <tr class="hover:bg-slate-50">
        <td class="border border-slate-300 px-2 py-1 align-top">
          <a href="/post/2" class="text-blue-700 hover:underline">
            SvelteKit 表单与 a11y：从报错到最佳实践
          </a>
          <div class="text-[12px] text-slate-600 mt-0.5 line-clamp-1">
            解决 label 关联、链接占位、表单校验的常见坑与写法。
          </div>
        </td>
        <td class="border border-slate-300 px-2 py-1 align-top text-slate-700"
          >技术</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-slate-700"
          >2025-11-12</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-right"
          >3,502</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-right"
          >41</td
        >
      </tr>

      <tr class="hover:bg-slate-50">
        <td class="border border-slate-300 px-2 py-1 align-top">
          <a href="/post/3" class="text-blue-700 hover:underline">
            复古 UI 的边框与节奏：旧维基风 Tailwind 手册
          </a>
          <div class="text-[12px] text-slate-600 mt-0.5 line-clamp-1">
            小字号、细分割、低饱和配色，如何写出朴素信息站质感。
          </div>
        </td>
        <td class="border border-slate-300 px-2 py-1 align-top text-slate-700"
          >随笔</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-slate-700"
          >2025-11-05</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-right"
          >889</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-right">9</td
        >
      </tr>

      <tr class="hover:bg-slate-50">
        <td class="border border-slate-300 px-2 py-1 align-top">
          <a href="/post/4" class="text-blue-700 hover:underline">
            每天 45 分钟爬坡的燃脂效果与饮食记录
          </a>
          <div class="text-[12px] text-slate-600 mt-0.5 line-clamp-1">
            结合心率区间与摄入量，记录两周体脂变化与体感反馈。
          </div>
        </td>
        <td class="border border-slate-300 px-2 py-1 align-top text-slate-700"
          >生活</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-slate-700"
          >2025-10-29</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-right"
          >2,104</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-right"
          >17</td
        >
      </tr>

      <tr class="hover:bg-slate-50">
        <td class="border border-slate-300 px-2 py-1 align-top">
          <a href="/post/5" class="text-blue-700 hover:underline">
            幼儿建构游戏观察：从“醒狮馆诞生记”到介入策略
          </a>
          <div class="text-[12px] text-slate-600 mt-0.5 line-clamp-1">
            材料不足、结构坍塌与合作分工中的教师观察点与支持路径。
          </div>
        </td>
        <td class="border border-slate-300 px-2 py-1 align-top text-slate-700"
          >教育</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-slate-700"
          >2025-10-12</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-right"
          >1,337</td
        >
        <td class="border border-slate-300 px-2 py-1 align-top text-right"
          >28</td
        >
      </tr>
    </tbody>
  </table>
</div>

<!-- 分页 -->
<div
  class="border border-slate-300 bg-slate-50 mt-3 p-2 text-[13px] flex flex-wrap items-center gap-2"
>
  <div class="text-slate-700">
    第 <span class="font-semibold">1</span> / 13 页
  </div>

  <div class="ml-auto flex items-center gap-1">
    <button
      class="border border-slate-400 bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200"
      disabled
    >
      上一页
    </button>
    <button
      class="border border-slate-400 bg-white px-2 py-1 text-xs font-semibold"
      >1</button
    >
    <button
      class="border border-slate-400 bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200"
      >2</button
    >
    <button
      class="border border-slate-400 bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200"
      >3</button
    >
    <span class="px-1 text-slate-600">…</span>
    <button
      class="border border-slate-400 bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200"
      >13</button
    >
    <button
      class="border border-slate-400 bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200"
    >
      下一页
    </button>
  </div>
</div>