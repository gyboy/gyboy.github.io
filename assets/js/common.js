/* ============================================================
 * 全站公共脚本：主题切换、页脚年份、首页目录渲染
 * 目录数据来自 /assets/js/pages.js
 * ============================================================ */
(function () {
  var THEME_KEY = 'gyboy-theme';

  /* ---------- 主题切换 ---------- */
  var btn = document.getElementById('theme-toggle');
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }
  function refreshBtn() {
    if (btn) btn.textContent = currentTheme() === 'dark' ? '☀️' : '🌙';
  }
  if (btn) {
    refreshBtn();
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem(THEME_KEY, next);
      refreshBtn();
    });
  }

  /* ---------- 页脚年份 ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 首页目录渲染 ---------- */
  var grid = document.getElementById('page-grid');
  if (grid && window.SITE_PAGES) {
    if (!window.SITE_PAGES.length) {
      grid.innerHTML = '<p class="empty-tip">暂无页面 —— 在 /assets/js/pages.js 中添加一条记录即可。</p>';
    } else {
      window.SITE_PAGES.forEach(function (p) {
        var a = document.createElement('a');
        a.className = 'card';
        a.href = '/' + String(p.path).replace(/^\/+/, '');
        a.innerHTML =
          '<div class="card-icon">' + (p.icon || '📄') + '</div>' +
          '<div class="card-body">' +
            '<h3 class="card-title">' + p.title +
              (p.tag ? '<span class="card-tag">' + p.tag + '</span>' : '') +
            '</h3>' +
            '<p class="card-desc">' + (p.desc || '') + '</p>' +
            '<span class="card-go">进入页面 →</span>' +
          '</div>';
        grid.appendChild(a);
      });
    }
  }
})();
