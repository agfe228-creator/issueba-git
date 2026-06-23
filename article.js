(function () {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("slug");
  var programs = window.SUPPORT_PROGRAMS || [];
  var root = document.getElementById("article-root");

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  var program = programs.find(function (item) {
    return item.slug === slug;
  });

  if (!program) {
    root.innerHTML = '<a class="brand" href="./index.html"><span class="brand-mark">✣</span><span>지원바라</span></a><h1>지원사업을 찾을 수 없습니다</h1><p>홈 또는 검색 페이지에서 다시 확인해주세요.</p>';
    return;
  }

  document.title = program.title + " - 지원바라";
  root.innerHTML = [
    '<a class="brand" href="./index.html"><span class="brand-mark">✣</span><span>지원바라</span></a>',
    "<h1>" + escapeHtml(program.title) + "</h1>",
    "<section><h2>핵심 요약</h2><ul>",
    "<li><strong>분류:</strong> " + escapeHtml(program.category) + "</li>",
    "<li><strong>상태:</strong> " + escapeHtml(program.status) + "</li>",
    "<li><strong>대상:</strong> " + escapeHtml(program.target) + "</li>",
    "<li><strong>지원 내용:</strong> " + escapeHtml(program.amount) + "</li>",
    "<li><strong>" + escapeHtml(program.periodLabel) + ":</strong> " + escapeHtml(program.period) + "</li>",
    "</ul></section>",
    "<section><h2>신청 대상</h2><p>" + escapeHtml(program.target) + "을 중심으로 지원하는 사업입니다. 실제 대상 기준은 소득, 거주지, 사업자 여부, 연령, 중복 참여 여부에 따라 달라질 수 있습니다.</p></section>",
    "<section><h2>지원 내용</h2><p>" + escapeHtml(program.amount) + "을 받을 수 있는 사업으로, 세부 지원금과 방식은 기관별 공고에 따라 달라질 수 있습니다.</p></section>",
    "<section><h2>신청 전 확인사항</h2><p>신청 기간, 제출 서류, 자격 요건, 중복 지원 제한을 반드시 확인하세요. 지원사업은 예산 소진 또는 기관 사정에 따라 조기 마감될 수 있습니다.</p></section>",
    '<section><h2>공식 출처</h2><ul><li><a href="' + escapeHtml(program.sourceUrl) + '" target="_blank" rel="noopener">' + escapeHtml(program.sourceName) + "</a></li></ul></section>",
    '<p class="source-note">지원바라는 정부 및 공공기관의 공개 자료를 바탕으로 정보를 정리합니다. 신청 전 반드시 공식기관의 최신 공고를 확인하세요.</p>'
  ].join("");
}());
