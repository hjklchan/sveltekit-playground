# 旧时代维基百科风格（普通网站用）Tailwind 组件先行词 + 风格手册（打包版）

你现在是我的前端 UI 搭档。请用 **TailwindCSS** 生成组件，整体视觉风格参考**2000 年代早期维基百科 / MediaWiki 皮肤**，但用于**普通网站而非真的维基**。  
**风格基调：朴素、信息密度高、细边框、小字号、轻微浮雕/渐变、功能优先、克制装饰。**

---

## A. 视觉与排版规范（必须遵守）

### A1. 背景与整体色系
- 页面底色：`bg-[#f5f5f5]` 或 `bg-slate-100`
- 模块底：偏白灰 `bg-white` / `bg-slate-50` / `bg-slate-100`
- 不使用鲜艳大色块；不做现代化夸张渐变/玻璃拟态。

### A2. 边框与分割线（老网页感核心）
- 主要分割：`border border-slate-300`
- 细分割：`border-t border-slate-300` / `border-b border-slate-300`
- 允许轻微“旧时代浅渐变浮雕”：  
  `bg-gradient-to-b from-slate-100 to-slate-200`

### A3. 字号与字重
- 导航/工具区：`text-xs` 或 `text-[12px~13px]`
- 正文：`text-[15px] leading-relaxed`
- 标题可用衬线强调老味儿：`font-serif`
- 字重克制：小标题 `font-semibold`；避免超粗黑。

### A4. 布局与宽度
- 页面内容宽：`max-w-5xl mx-auto px-4`
- 组件内部优先 `flex` / `grid`，信息对齐清晰，避免大片留白
- 圆角极小或无：`rounded-none` 或最多 `rounded-sm`  
  **不要现代大圆角（2xl/3xl）**

### A5. 交互（hover / active）
- 链接默认蓝：`text-blue-700 hover:underline`
- 按钮/页签 hover：`hover:bg-slate-50` 或 `hover:bg-slate-200`
- 选中态常用：`bg-white font-semibold` + 边框分割

### A6. 功能定位
- 组件要像“老派信息站/百科/门户”里的 UI：  
  **结构清楚、层级分明、可读性优先**
- 允许出现：工具栏、面包屑、页签、列表、提示条、脚注、元信息区等

---

## B. 风格手册（Design System / Style Guide）

### B1. 设计 Tokens（建议默认值）
> 你生成组件时优先使用本节 tokens 的 Tailwind 写法。

**颜色（Color）**
- 页面背景：`bg-[#f5f5f5]` / `bg-slate-100`
- 主面板/卡片：`bg-white`
- 次面板：`bg-slate-50` / `bg-slate-100`
- 边框：`border-slate-300`（主） / `border-slate-200`（弱）
- 文字：
  - 主文本：`text-slate-900`
  - 次文本：`text-slate-700`
  - 辅助/脚注：`text-slate-500`
- 链接蓝：`text-blue-700`  
  hover 只加下划线，不换色：`hover:underline`
- 提示色（克制使用）：
  - 成功：`text-emerald-700 bg-emerald-50 border-emerald-200`
  - 警告：`text-amber-800 bg-amber-50 border-amber-200`
  - 错误：`text-red-700 bg-red-50 border-red-200`

**字体（Typography）**
- 全局默认：`text-slate-900`
- 导航/工具：`text-xs` / `text-[13px]`
- 正文：`text-[15px] leading-relaxed`
- H1：`text-3xl font-serif border-b border-slate-300 pb-2`
- H2：`text-xl font-semibold border-b border-slate-200 pb-1`
- 小标题：`text-sm font-semibold`
- 列表/表格：`text-[13px] leading-snug`

**间距（Spacing）**
- 容器左右内边距：`px-4`
- 行内间距：`gap-2` / `gap-3`
- 区块上下间距：`py-2` / `py-3` / `mt-4`
- 信息块紧凑：优先 `py-1.5 px-3` 这种“老网页紧凑节奏”

**圆角（Radius）**
- 默认无圆角：`rounded-none`
- 轻微圆角（仅输入框/小按钮可用）：`rounded-sm`
- 禁止：`rounded-xl/2xl/3xl`

**阴影（Shadow）**
- 一般不用阴影
- 必要时极轻：`shadow-[0_1px_0_rgba(0,0,0,0.04)]`
- 禁止现代浮层大阴影：`shadow-xl/2xl`

---

### B2. 布局 Pattern（老维基/门户常见结构）
1. **“工具条 + 主导航 + 面包屑/搜索”三段式 Header**
   - 工具条：小字号、右侧登录/语言/设置
   - 主导航：细边框分割、选中高亮为白底
   - 面包屑/搜索：再细一行，增强信息定位

2. **主内容区**
   - 左侧边栏（可选）：分类/目录/最近更新
   - 右侧主体：标题、元信息、正文、脚注
   - 宽度控制：`max-w-5xl mx-auto`

3. **信息密度**
   - 允许多列小型列表、紧凑表格
   - 文字对齐清楚比视觉留白更重要

---

### B3. 组件外观规则（按类型）
**导航栏 / Tabs**
- 基础样式：`flex text-[13px] border-t border-slate-300`
- 单项：`px-3 py-1.5 border-r border-slate-300`
- 选中：`bg-white font-semibold`
- hover：`hover:bg-slate-50`

**按钮（老网页按钮）**
- 默认：`border border-slate-400 bg-slate-100 px-2 py-1 text-xs hover:bg-slate-200`
- 主按钮（克制用）：`border-slate-500 bg-slate-200 font-semibold`

**输入框 / 表单**
- 输入：`border border-slate-400 bg-white px-2 py-1 text-xs focus:border-slate-600 focus:outline-none`
- Label：`text-xs text-slate-700`
- 表单分组用细边框或弱标题分隔

**列表 / 目录**
- 列表项紧凑：`py-1` / `leading-snug`
- 使用 `border-b border-slate-200` 做轻分割

**表格（旧维基味）**
- 表头淡灰：`bg-slate-100 text-xs font-semibold`
- 单元格：`border border-slate-300 px-2 py-1 text-[13px]`

**提示条 / Notice**
- 基座：`border text-[13px] px-3 py-2 bg-slate-50`
- 信息优先、别太花哨

**分页**
- 使用小号方形按钮 + 细边框
- 当前页白底加粗

---

### B4. Do & Don’t
**Do**
- 保持小字号、细分割、紧凑排版
- 链接蓝 + 下划线 hover
- 使用衬线标题点到为止
- 信息层级靠“线/间距/字重”而非颜色堆叠

**Don’t**
- 不要大圆角卡片、玻璃拟态、霓虹渐变
- 不要超大标题/大留白的现代 Landing 风
- 不要复杂动画/过度 hover 特效
- 不要高饱和色块当背景

---

### B5. 快速模板（可复用骨架）
**页面骨架**
```html
<body class="bg-[#f5f5f5] text-slate-900 min-h-screen flex flex-col">
  <header class="sticky top-0 z-40 border-b border-slate-300 bg-gradient-to-b from-slate-100 to-slate-200">
    <div class="max-w-5xl mx-auto px-4">
      <!-- 工具条 -->
      <div class="flex items-center justify-between py-2 text-xs text-slate-700">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 border border-slate-400 bg-white flex items-center justify-center text-[10px]">
            Logo
          </div>
          <div class="leading-tight">
            <div class="font-serif text-lg">Site Title</div>
            <div>Site subtitle</div>
          </div>
        </div>
        <nav class="flex items-center gap-3">
          <a class="hover:underline">登录</a>
          <a class="hover:underline">注册</a>
        </nav>
      </div>

      <!-- 主导航 -->
      <nav class="flex border-t border-slate-300 text-[13px]">
        <a class="px-3 py-1.5 border-r border-slate-300 bg-white font-semibold hover:bg-slate-50">首页</a>
        <a class="px-3 py-1.5 border-r border-slate-300 hover:bg-slate-50">文章</a>
        <a class="px-3 py-1.5 border-r border-slate-300 hover:bg-slate-50">分类</a>
        <a class="px-3 py-1.5 border-r border-slate-300 hover:bg-slate-50">关于</a>
      </nav>

      <!-- 面包屑 + 搜索（可选） -->
      <div class="flex items-center justify-between border-t border-slate-300 py-1.5 text-[12px]">
        <div class="flex items-center gap-2">
          <span class="text-slate-600">当前位置</span>
          <span class="text-slate-400">›</span>
          <span class="font-semibold">Page Title</span>
        </div>
        <form class="flex items-center gap-1 text-xs">
          <input class="border border-slate-400 bg-white px-2 py-1 w-44 focus:border-slate-600 focus:outline-none" placeholder="站内搜索" />
          <button class="border border-slate-400 bg-slate-100 px-2 py-1 hover:bg-slate-200">搜索</button>
        </form>
      </div>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-4 pt-4 flex-1">
    <!-- content -->
  </main>

  <footer class="border-t border-slate-300 bg-slate-100 mt-6 text-[12px] text-slate-700">
    <div class="max-w-5xl mx-auto px-4 py-3 space-y-2">
      <p>本页面最后编辑于 2025年1月1日。</p>
      <ul class="flex flex-wrap gap-x-4 gap-y-1">
        <li><a class="text-blue-700 hover:underline">隐私政策</a></li>
        <li><a class="text-blue-700 hover:underline">关于本站</a></li>
        <li><a class="text-blue-700 hover:underline">免责声明</a></li>
      </ul>
    </div>
  </footer>
</body>
