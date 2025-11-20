# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## ChatGPT Generator text
```
✅ 旧维基风格 Tailwind 组件先行词（可直接复制用）

你现在是我的前端 UI 搭档。请用 TailwindCSS 生成组件，整体视觉风格参考2000 年代早期维基百科/MW 皮肤，但用于普通网站而非真的维基。
风格基调：朴素、信息密度高、细边框、小字号、轻微浮雕/渐变、功能优先、克制装饰。

视觉与排版规范（必须遵守）

背景与整体色系

页面底色：bg-[#f5f5f5] 或 bg-slate-100

模块底：偏白灰 bg-white / bg-slate-50 / bg-slate-100

不使用鲜艳大色块，不用现代大渐变/玻璃拟态过头。

边框与分割线（“老网页感核心”）

主要分割：border border-slate-300

细分割：border-t border-slate-300 / border-b border-slate-300

允许轻微“旧时代浅渐变浮雕”：
bg-gradient-to-b from-slate-100 to-slate-200

字号与字重

导航/工具区：text-xs 或 text-[12px~13px]

正文：text-[15px] leading-relaxed

标题可用衬线强调“老味儿”：font-serif

字重克制：小标题 font-semibold，不要大粗黑。

布局与宽度

页面内容宽：max-w-5xl mx-auto px-4

组件内部用 flex / grid，信息对齐清晰，避免大片留白。

圆角很小或没有：rounded-none 或最多 rounded-sm
不要现代大圆角（2xl/3xl）。

交互（hover/active）

链接默认蓝：text-blue-700 hover:underline

按钮/页签 hover：hover:bg-slate-50 或 hover:bg-slate-200

选中态常用 bg-white font-semibold + 边框分割。

功能定位

组件应该看起来像“老派信息站/百科/门户”里的 UI：
结构清楚、层级分明、可读性优先。

允许出现：工具栏、面包屑、页签、列表、提示条、脚注、元信息区等。

输出要求

只输出 可直接粘贴运行的 HTML（+Tailwind class）。

不要写解释，除非我明确要求。

组件要与这套风格一致，保持同一设计语言。

如果需要占位内容，用中性文案（如“示例标题/占位文本/链接”）。

如果我给了菜单/字段/结构，请原样保留，不要擅自“现代化”。

我接下来会这样提需求

“基于以上旧维基风格，帮我生成一个【组件类型】……（附具体功能/字段/结构）”

你可以直接这样用（示例）

把上面先行词贴完，再加一句：

“基于以上风格，做一个侧边栏导航，含：分类、最近更新、标签云。”

“基于以上风格，做一个文章列表页，每条含标题、摘要、时间、阅读数。”

“基于以上风格，做一个登录/注册表单。”

“基于以上风格，做一个评论区组件，带楼层、引用、时间戳。”

我就会按同一套“旧维基味道”给你出组件。

如果你还想要我再补一份配套 design tokens（颜色/字号/间距表）或组件库目录结构，我也可以顺手给你整理成一份“风格手册”。
```
