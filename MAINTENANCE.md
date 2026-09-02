# 维护指南

本站是**纯静态站点**（无构建、无依赖），修改文件后推送即发布。

---

## 一、添加一个新页面（3 步）

以添加一个位于 `blog/hello/` 的新页面为例：

**第 1 步：复制模板**

把 `_template/` 整个文件夹复制一份，重命名为 `blog/hello/`（保留其中的 `index.html`）。

**第 2 步：改内容**

编辑 `blog/hello/index.html`：

- `<title>`：浏览器标签页标题
- `<h1 class="page-title">`：页面大标题
- `<p class="page-subtitle">`：副标题
- `<main>` 中间：正文，可直接复用 `.panel` 卡片容器
- 底部 `<script>`：页面专属的交互逻辑（不需要可留空）

**第 3 步：登记到目录**

打开 `assets/js/pages.js`，在 `SITE_PAGES` 数组里加一条记录：

```js
{
  path: "blog/hello/",        // 相对站点根目录，结尾带 /
  icon: "📝",                 // emoji 图标
  title: "我的新页面",
  desc: "一句话简介，显示在首页卡片上。",
  tag: "文章",                // 分类：工具 / 文章 / 笔记……
},
```

保存后推送到 GitHub，首页会自动出现新卡片。

---

## 二、修改站点名称 / 首页文案

编辑 `index.html`：

- 顶栏站名：`<a class="brand">…</a>`
- 首页大标题和介绍语：`<section class="hero">` 内的 `<h1>` 和 `<p>`

子页面顶栏的"← 返回首页"和页脚无需改动（链接指向 `/`）。

---

## 三、调整主题 / 配色

所有颜色都是 `assets/css/style.css` 顶部的 CSS 变量：

- `:root { … }` —— 浅色主题
- `[data-theme="dark"] { … }` —— 深色主题

改 `--accent`（点缀色）即可整体换色。主题默认跟随系统，用户手动切换后记在浏览器 localStorage（键名 `gyboy-theme`）。

---

## 四、本地预览

在仓库根目录执行：

```bash
python -m http.server 8000
```

浏览器打开 <http://localhost:8000>。注意**不要直接双击 html 文件打开**（`file://` 下以 `/` 开头的资源路径无法加载）。

---

## 五、发布流程

```bash
git add -A
git commit -m "说明这次改了什么"
git push
```

推送后 GitHub Pages 自动构建，**约 1~2 分钟**后刷新 <https://gyboy.github.io> 即可看到。

> 本仓库已配置仓库级代理（`git config http.proxy http://127.0.0.1:7897`），
> 若代理端口变化，用同样命令改成新端口即可。

---

## 六、常见问题

| 现象 | 原因 / 解决 |
| --- | --- |
| 推送后页面没变化 | 等待 1~2 分钟构建；浏览器按 `Ctrl + F5` 强制刷新 |
| 新页面打开是 404 | 检查 `pages.js` 里的 `path` 与实际文件夹路径是否一致（结尾带 `/`） |
| 样式没生效 | 确认页面引用的是 `/assets/css/style.css`（根路径开头） |
| 想换访问域名 | 在仓库 Settings → Pages 里绑定自定义域名，并添加 `CNAME` 文件 |
