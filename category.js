(function () {
  var programs = window.SUPPORT_PROGRAMS || [];
  var params = new URLSearchParams(window.location.search);
  var category = params.get("category") || document.body.getAttribute("data-category") || "전체";
  var title = document.querySelector("[data-category-title]");
  var intro = document.querySelector("[data-category-intro]");
  var list = document.querySelector("[data-category-list]");
  var count = document.querySelector("[data-category-count]");
  var search = document.querySelector("[data-category-search]");
  var chips = document.querySelectorAll("[data-filter-status]");

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function setMeta(name, content) {
    var meta = document.querySelector('meta[name="' + name + '"]') || document.createElement("meta");
    meta.setAttribute("name", name);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
  }

  function resolveLink(link) {
    var value = String(link || "#");
    if (/^https?:\/\//.test(value) || value.charAt(0) === "#") return value;
    return value;
  }

  function normalizeSearch(value) {
    return String(value || "").toLowerCase().replace(/\s+/g, "");
  }

  function card(program) {
    return [
      '<article class="program-card category-program-card">',
      "  <div>",
      '    <span class="badge ' + escapeHtml(program.categoryTone) + '">' + escapeHtml(program.category) + "</span>",
      '    <span class="badge ' + escapeHtml(program.statusTone) + '">' + escapeHtml(program.status) + "</span>",
      '    <h3><a href="' + escapeHtml(resolveLink(program.link)) + '">' + escapeHtml(program.title) + "</a></h3>",
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

  function currentStatus() {
    var active = document.querySelector("[data-filter-status].active");
    return active ? active.getAttribute("data-filter-status") : "전체";
  }

  function render() {
    if (!list) return;
    var keyword = search ? search.value.trim().toLowerCase() : "";
    var normalizedKeyword = normalizeSearch(keyword);
    var status = currentStatus();
    var items = programs.filter(function (program) {
      var categoryMatch = category === "전체" || program.category === category;
      var statusMatch = status === "전체" || program.status === status;
      var haystack = [program.title, program.category, program.status, program.target, program.amount, program.sourceName].join(" ").toLowerCase();
      var keywordMatch = !keyword || haystack.indexOf(keyword) > -1 || normalizeSearch(haystack).indexOf(normalizedKeyword) > -1;
      return categoryMatch && statusMatch && keywordMatch;
    }).sort(function (a, b) {
      return String(b.updatedAt || "").localeCompare(String(a.updatedAt || ""));
    });

    if (count) count.textContent = items.length + "건";
    list.innerHTML = items.length ? items.map(card).join("") : '<p class="empty-message">조건에 맞는 지원사업이 없습니다. 공식 공고가 확인되면 업데이트됩니다.</p>';
  }

  if (title) title.textContent = category;
  if (intro && category !== "전체") {
    intro.textContent = category + " 관련 지원사업을 대상, 지원 내용, 신청 전 확인사항, 공식 출처 기준으로 정리했습니다.";
  }

  if (category !== "전체") {
    document.title = category + " 지원사업 - 지원바라";
    setMeta("description", category + " 정부지원금과 지원사업 목록입니다. 대상, 지원 내용, 공식 출처를 함께 확인하세요.");
    var canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", "https://issueba.com/category.html?category=" + encodeURIComponent(category));
    document.head.appendChild(canonical);
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (item) { item.classList.remove("active"); });
      chip.classList.add("active");
      render();
    });
  });

  if (search) search.addEventListener("input", render);
  render();
}());
