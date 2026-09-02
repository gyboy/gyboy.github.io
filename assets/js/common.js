/* ============================================================
 * 全站公共脚本：主题切换、页脚年份、首页目录渲染
 * 目录数据来自 /assets/js/pages.js（标题与简介为 { zh, en } 双语对象）
 * 多语言状态来自 /assets/js/i18n.js（切换语言时重新渲染目录）
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

  /* ---------- 首页目录渲染（跟随语言） ---------- */
  var grid = document.getElementById('page-grid');
  if (grid && window.SITE_PAGES) {
    function pick(v) {
      if (v == null) return '';
      return typeof v === 'string' ? v : (v[window.I18N.lang()] != null ? v[window.I18N.lang()] : v.zh);
    }
    function renderPages() {
      var lang = window.I18N ? window.I18N.lang() : 'zh';
      grid.innerHTML = '';
      if (!window.SITE_PAGES.length) {
        grid.innerHTML = '<p class="empty-tip">' + window.I18N.t('home.empty') + '</p>';
        return;
      }
      window.SITE_PAGES.forEach(function (p) {
        var a = document.createElement('a');
        a.className = 'card';
        a.href = '/' + String(p.path).replace(/^\/+/, '');
        a.innerHTML =
          '<div class="card-icon">' + (p.icon || '📄') + '</div>' +
          '<div class="card-body">' +
            '<h3 class="card-title">' + pick(p.title) +
              (p.tag ? '<span class="card-tag">' + pick(p.tag) + '</span>' : '') +
            '</h3>' +
            '<p class="card-desc">' + pick(p.desc) + '</p>' +
            '<span class="card-go">' + window.I18N.t('home.cardGo') + '</span>' +
          '</div>';
        grid.appendChild(a);
      });
    }
    renderPages();
    document.addEventListener('langchange', renderPages);
  }
})();
