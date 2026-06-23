(function () {
  var programs = window.SUPPORT_PROGRAMS || [];

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function programCard(program, index) {
    var extraClass = index > 2 && program.group === "open" ? " desktop-extra" : "";
    return [
      '<article class="program-card' + extraClass + '">',
      "  <div>",
      '    <span class="badge ' + escapeHtml(program.categoryTone) + '">' + escapeHtml(program.category) + "</span>",
      '    <span class="badge ' + escapeHtml(program.statusTone) + '">' + escapeHtml(program.status) + "</span>",
      '    <h3><a href="' + escapeHtml(program.link) + '">' + escapeHtml(program.title) + "</a></h3>",
      "    <dl>",
      "      <div><dt>" + escapeHtml(program.periodLabel) + "</dt><dd>" + escapeHtml(program.period) + "</dd></div>",
      "      <div><dt>대상</dt><dd>" + escapeHtml(program.target) + "</dd></div>",
      "      <div><dt>지원금</dt><dd>" + escapeHtml(program.amount) + "</dd></div>",
      '      <div><dt>출처</dt><dd><a class="source-link" href="' + escapeHtml(program.sourceUrl) + '" target="_blank" rel="noopener">' + escapeHtml(program.sourceName) + "</a></dd></div>",
      "    </dl>",
      "  </div>",
      '  <button class="save-button" type="button" aria-label="' + escapeHtml(program.title) + ' 저장">♡</button>',
      "</article>"
    ].join("");
  }

  function setRealCounts() {
    var openCount = programs.filter(function (p) { return p.group === "open"; }).length;
    var deadlineCount = programs.filter(function (p) { return p.group === "deadline"; }).length;
    var sourceCount = programs.filter(function (p) { return p.sourceUrl && /^https?:\/\//.test(p.sourceUrl); }).length;
    var categories = {
      "청년지원": "youth",
      "소상공인": "smallbiz",
      "창업지원": "startup",
      "주거지원": "housing",
      "복지혜택": "welfare",
      "지역별 지원금": "local"
    };

    document.querySelectorAll(".status-column .stat-card strong, .mobile-stats .stat-card strong").forEach(function (item, index) {
      var values = [programs.length + "건", openCount + "건", deadlineCount + "건", sourceCount + "건"];
      item.textContent = values[index % 4];
    });

    Object.keys(categories).forEach(function (label) {
      var link = document.querySelector('.category-card[href*="category=' + encodeURIComponent(label) + '"]');
      if (!link) return;
      var count = programs.filter(function (program) { return program.category === label || program.categoryKey === categories[label]; }).length;
      var em = link.querySelector("em");
      if (em) em.textContent = count + "건";
    });
  }

  function renderList(group) {
    var container = document.querySelector('[data-program-list="' + group + '"]');
    if (!container) return;

    var items = programs.filter(function (program) {
      return program.group === group;
    });

    container.innerHTML = items.map(programCard).join("");
  }

  setRealCounts();
  renderList("open");
  renderList("deadline");
}());
