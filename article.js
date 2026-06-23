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

  var categoryTips = {
    "청년지원": "청년지원 사업은 연령, 소득, 취업 상태, 재학 여부, 거주지 조건을 함께 보는 경우가 많습니다. 같은 청년 대상 사업이라도 취업지원, 자산형성, 주거지원, 교육훈련에 따라 제출 서류와 심사 기준이 달라질 수 있습니다.",
    "소상공인": "소상공인 지원사업은 사업자등록 상태, 업종, 매출 규모, 상시근로자 수, 사업장 소재지, 기존 지원 이력에 따라 신청 가능 여부가 달라집니다. 특히 자금성 지원은 신용, 보증, 세금 체납 여부를 함께 확인하는 경우가 있습니다.",
    "창업지원": "창업지원 사업은 예비창업자, 초기창업기업, 도약기 기업처럼 업력 구간별로 나뉘는 경우가 많습니다. 사업계획서, 창업 아이템의 차별성, 시장성, 수행 역량이 선정 과정에서 중요하게 평가될 수 있습니다.",
    "주거지원": "주거지원 사업은 무주택 여부, 임대차계약, 전입신고, 소득·자산 기준, 보증금과 월세 수준을 함께 확인하는 경우가 많습니다. 대출성 상품은 은행 심사와 보증 심사가 별도로 진행될 수 있습니다.",
    "복지혜택": "복지혜택은 가구 소득, 재산, 부양가족, 건강 상태, 기존 복지급여 수급 여부에 따라 대상 여부가 달라질 수 있습니다. 신청 전 복지로 또는 담당 주민센터에서 본인의 조건을 확인하는 것이 안전합니다.",
    "지역별 지원금": "지역별 지원금은 거주지와 주민등록 기준일이 중요합니다. 같은 이름의 지원사업도 지자체별로 신청 기간, 지원금, 선정 방식, 제출 서류가 다를 수 있으므로 거주 지역의 공식 공고를 우선 확인해야 합니다."
  };

  var tip = categoryTips[program.category] || "지원사업은 기관별 공고에 따라 신청 조건과 제출 서류가 달라질 수 있습니다. 요약 정보만 보고 신청하기보다 공식 공고문을 함께 확인하는 것이 안전합니다.";

  document.title = program.title + " - 지원바라";
  root.innerHTML = [
    '<a class="brand" href="./index.html"><span class="brand-mark">✣</span><span>지원바라</span></a>',
    '<link rel="canonical" href="https://issueba.com/article.html?slug=' + escapeHtml(program.slug) + '">',
    "<h1>" + escapeHtml(program.title) + "</h1>",
    "<section><h2>핵심 요약</h2><ul>",
    "<li><strong>분류:</strong> " + escapeHtml(program.category) + "</li>",
    "<li><strong>현재 상태:</strong> " + escapeHtml(program.status) + "</li>",
    "<li><strong>주요 대상:</strong> " + escapeHtml(program.target) + "</li>",
    "<li><strong>지원 내용:</strong> " + escapeHtml(program.amount) + "</li>",
    "<li><strong>" + escapeHtml(program.periodLabel) + ":</strong> " + escapeHtml(program.period) + "</li>",
    "<li><strong>마지막 정리일:</strong> 2026.06.23</li>",
    "</ul></section>",
    "<section><h2>사업 개요</h2><p>" + escapeHtml(program.title) + "은 " + escapeHtml(program.target) + "을 대상으로 하는 " + escapeHtml(program.category) + " 분야 지원정보입니다. 지원바라는 사용자가 신청 가능성을 빠르게 판단할 수 있도록 대상, 지원 내용, 신청 전 확인사항, 공식 출처를 중심으로 정보를 정리합니다.</p><p>다만 지원사업은 예산, 접수기관, 거주지, 신청자의 소득과 자격 조건에 따라 실제 신청 가능 여부가 달라질 수 있습니다. 따라서 이 페이지는 신청 전 참고용으로 활용하고, 최종 판단은 반드시 공식기관의 최신 공고를 기준으로 해야 합니다.</p></section>",
    "<section><h2>신청 대상</h2><p>기본적으로 " + escapeHtml(program.target) + "이 주요 대상입니다. 여기에 연령, 소득, 거주지, 사업자등록 여부, 고용 상태, 가구원 수, 기존 지원 이력 같은 추가 조건이 붙을 수 있습니다.</p><p>예를 들어 청년지원은 나이와 소득 기준을, 소상공인 지원은 업종과 매출 기준을, 주거지원은 무주택 여부와 임대차계약 정보를 보는 경우가 많습니다. 신청 전에는 본인이 대상 조건을 모두 충족하는지 차례대로 확인하는 것이 좋습니다.</p></section>",
    "<section><h2>지원 내용</h2><p>이 사업의 핵심 지원 내용은 " + escapeHtml(program.amount) + "입니다. 실제 지급 방식은 현금 지원, 바우처, 이자 지원, 융자, 컨설팅, 교육, 사업화 자금 등으로 나뉠 수 있습니다.</p><p>지원금은 공고에 표시된 최대 한도와 실제 선정 후 받을 수 있는 금액이 다를 수 있습니다. 일부 사업은 자부담금이 있거나, 사용 가능한 항목이 정해져 있으며, 결과보고 또는 증빙자료 제출이 필요할 수 있습니다.</p></section>",
    "<section><h2>신청 방법</h2><p>신청은 보통 공식 홈페이지, 전용 접수 시스템, 지자체 누리집, 주민센터, 고용센터, 수탁은행 등에서 진행됩니다. 온라인 신청의 경우 본인인증, 회원가입, 신청서 작성, 증빙서류 첨부 절차가 필요할 수 있습니다.</p><p>방문 신청이 필요한 사업은 접수처 운영시간과 담당 부서를 미리 확인해야 합니다. 마감일에는 접속자가 몰리거나 서류 보완 시간이 부족할 수 있으므로 가능한 한 여유 있게 준비하는 것이 좋습니다.</p></section>",
    "<section><h2>준비 서류</h2><p>자주 요구되는 서류는 신분증, 주민등록등본, 가족관계증명서, 소득 증빙자료, 사업자등록증, 임대차계약서, 통장사본, 건강보험료 납부확인서 등입니다. 사업 성격에 따라 사업계획서, 견적서, 고용보험 확인자료, 재직증명서가 추가될 수 있습니다.</p><p>서류는 발급일 기준을 제한하는 경우가 있으므로 오래된 서류를 제출하지 않도록 주의해야 합니다. 스캔본이나 사진 파일을 제출할 때는 글자가 선명하게 보이는지도 확인하세요.</p></section>",
    "<section><h2>제외 대상과 주의사항</h2><p>세금 체납, 동일 사업 중복 수혜, 허위 서류 제출, 신청 기준일 이후 자격 상실, 지원 제외 업종에 해당하는 경우 신청이 제한될 수 있습니다. 선정 이후에도 조건을 충족하지 못한 사실이 확인되면 지원금 환수 또는 참여 제한이 발생할 수 있습니다.</p><p>" + escapeHtml(tip) + "</p></section>",
    "<section><h2>공식 출처</h2><ul><li><a href=\"" + escapeHtml(program.sourceUrl) + "\" target=\"_blank\" rel=\"noopener\">" + escapeHtml(program.sourceName) + "</a></li></ul><p>공식 출처에서는 접수 기간, 세부 대상, 제출서류, 선정 방식, 문의처를 가장 정확하게 확인할 수 있습니다.</p></section>",
    '<p class="source-note">지원바라는 정부 및 공공기관의 공개 자료를 바탕으로 지원정보를 정리합니다. 신청 전 반드시 공식기관의 최신 공고를 확인하세요.</p>'
  ].join("");
}());
