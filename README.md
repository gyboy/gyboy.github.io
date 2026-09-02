# gyboy.github.io

个人站点 · 目录式主页，收录我做的小工具与页面。

**线上地址：[https://gyboy.github.io](https://gyboy.github.io)**

## 站点结构

```
gyboy.github.io/
├── index.html              # 首页（目录站，卡片由 pages.js 数据自动渲染）
├── 404.html                # 自定义 404 页面
├── assets/
│   ├── css/style.css       # 全站统一样式（明暗双主题，色值变量在文件顶部）
│   └── js/
│       ├── pages.js        # ★ 目录数据 —— 添加新页面就在这里加一条
│       └── common.js       # 公共脚本（主题切换、页脚年份、目录渲染）
├── _template/              # 新页面模板（复制整个文件夹后改名即可）
├── tools/
│   └── pi-attenuator/      # π 型衰减器计算器
├── MAINTENANCE.md          # ★ 维护指南 —— 如何添加新页面
└── .nojekyll               # 关闭 GitHub Pages 的 Jekyll 处理（保持纯静态）
```

## 本地预览

在仓库根目录执行（任选其一）：

```bash
python -m http.server 8000
# 或
npx serve .
```

然后浏览器打开 <http://localhost:8000>。

## 添加新页面

见 [MAINTENANCE.md](MAINTENANCE.md)，3 步完成。

## 发布

推送到 `main` 分支后，GitHub Pages 自动构建发布，通常 1~2 分钟内生效：

```bash
git add -A && git commit -m "更新内容" && git push
```
