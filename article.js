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

  function list(items) {
    return "<ul>" + items.map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("") + "</ul>";
  }

  function setMeta(name, content) {
    var meta = document.querySelector('meta[name="' + name + '"]') || document.createElement("meta");
    meta.setAttribute("name", name);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
  }

  function setJsonLd(program) {
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": program.title,
      "about": program.category,
      "dateModified": "2026-06-23",
      "datePublished": "2026-06-23",
      "author": {"@type": "Organization", "name": "지원바라"},
      "publisher": {"@type": "Organization", "name": "지원바라"},
      "mainEntityOfPage": "https://issueba.com/article.html?slug=" + program.slug
    });
    document.head.appendChild(script);
  }

  var program = programs.find(function (item) { return item.slug === slug; });

  if (!program) {
    root.innerHTML = '<a class="brand" href="./index.html"><span class="brand-mark">✣</span><span>지원바라</span></a><h1>지원사업을 찾을 수 없습니다</h1><p>홈 또는 검색 페이지에서 다시 확인해주세요.</p>';
    return;
  }

  var base = {
    apply: ["공식 홈페이지에서 공고명과 접수기간을 먼저 확인합니다.", "본인인증 또는 사업자 인증 후 신청서를 작성합니다.", "증빙서류를 첨부하고 접수 완료 여부를 확인합니다."],
    docs: ["신분증 또는 본인확인 자료", "주민등록등본 또는 가족관계증명서", "소득·재산 또는 자격요건 확인 서류", "지원금 수령 계좌 사본"],
    exclude: ["동일하거나 유사한 사업에서 이미 지원을 받은 경우", "신청 기준일에 대상 요건을 충족하지 못하는 경우", "허위 서류 제출 또는 사실과 다른 내용을 기재한 경우"],
    caution: "지원사업은 예산 소진, 접수기관 사정, 공고 변경에 따라 신청기간과 선정기준이 바뀔 수 있습니다."
  };

  var profiles = {
    youth: {
      apply: ["복지로, 고용24, 지자체 청년포털 등 사업별 공식 접수처를 확인합니다.", "연령, 소득, 거주지, 취업상태 조건을 순서대로 대조합니다.", "신청 후 문자, 이메일, 마이페이지에서 보완 요청 여부를 확인합니다."],
      docs: ["주민등록등본", "소득 확인 자료 또는 건강보험료 납부확인서", "재학·졸업·구직 상태 확인 자료", "임대차계약서 또는 통장사본 등 사업별 증빙"],
      exclude: ["연령 기준을 벗어난 경우", "가구소득 또는 개인소득 기준을 초과한 경우", "동일한 청년 자산형성·주거지원 사업에 중복 참여 중인 경우"],
      caution: "청년지원은 기준일의 나이와 소득 산정 방식이 중요합니다. 신청일 기준인지 공고일 기준인지 반드시 확인해야 합니다."
    },
    smallbiz: {
      apply: ["소상공인24, 소상공인시장진흥공단, 정책자금 사이트에서 공고를 확인합니다.", "사업자등록번호, 업종, 매출 규모, 상시근로자 수 조건을 확인합니다.", "견적서나 사업계획이 필요한 사업은 신청 전 미리 준비합니다."],
      docs: ["사업자등록증명", "부가가치세 과세표준증명 또는 매출 증빙", "국세·지방세 납세증명", "견적서, 임대차계약서, 통장사본 등 사업별 서류"],
      exclude: ["휴업 또는 폐업 상태인 경우", "지원 제외 업종에 해당하는 경우", "세금 체납 또는 보조금 부정수급 이력이 있는 경우"],
      caution: "소상공인 사업은 업종 제한과 매출 기준이 자주 적용됩니다. 공고문에서 지원 제외 업종을 먼저 확인하는 것이 좋습니다."
    },
    startup: {
      apply: ["K-Startup 또는 주관기관 공고에서 모집 분야와 업력 기준을 확인합니다.", "사업계획서, 아이템 설명, 시장성 자료를 준비합니다.", "서류평가, 발표평가, 협약 절차가 있는지 확인합니다."],
      docs: ["사업계획서", "사업자등록증 또는 사실증명", "대표자 이력 및 팀 구성 자료", "시제품, 지식재산권, 매출·투자 증빙 자료"],
      exclude: ["업력 기준을 초과한 기업", "동일 과제로 이미 정부 사업화 자금을 받은 경우", "채무불이행, 세금 체납, 참여제한 상태인 경우"],
      caution: "창업지원은 지원금보다 사업비 집행 기준이 중요합니다. 선정 후에도 증빙 가능한 항목에만 비용을 사용할 수 있습니다."
    },
    housing: {
      apply: ["복지로, 정부24, 주택도시기금, LH·SH 모집공고에서 대상 기준을 확인합니다.", "무주택 여부, 임대차계약, 전입신고 상태를 먼저 점검합니다.", "대출성 상품은 은행 심사와 보증 심사가 별도로 진행될 수 있습니다."],
      docs: ["주민등록등본", "임대차계약서", "가족관계증명서", "소득·자산 확인 서류", "전입세대 확인 자료 또는 보증 관련 서류"],
      exclude: ["주택을 소유한 경우", "소득·자산 기준을 초과한 경우", "임대차계약 또는 전입 요건을 충족하지 못한 경우"],
      caution: "주거지원은 주소지와 계약 정보가 핵심입니다. 신청 전 계약자, 주소, 보증금, 월세 금액이 서류와 일치하는지 확인하세요."
    },
    welfare: {
      apply: ["복지로, 홈택스, 주민센터 등 사업별 공식 접수처를 확인합니다.", "가구원, 소득, 재산, 기존 복지급여 수급 여부를 확인합니다.", "신청 후 조사나 소득재산 확인 절차가 진행될 수 있습니다."],
      docs: ["신분증", "가족관계 또는 가구원 확인 자료", "소득·재산 관련 자료", "의료·돌봄·교육 등 해당 사유 증빙"],
      exclude: ["소득 또는 재산 기준을 초과한 경우", "이미 동일한 급여나 바우처를 받고 있는 경우", "가구원 정보가 실제와 다른 경우"],
      caution: "복지혜택은 가구 단위로 심사되는 경우가 많습니다. 본인 소득뿐 아니라 가구원 구성과 재산 기준도 함께 확인해야 합니다."
    },
    local: {
      apply: ["거주 지자체 홈페이지 또는 청년포털에서 공고를 확인합니다.", "주민등록 기준일과 거주기간 요건을 확인합니다.", "선착순, 추첨, 심사형 중 어떤 방식인지 확인합니다."],
      docs: ["주민등록초본 또는 등본", "거주기간 확인 자료", "소득 또는 고용 상태 확인 서류", "지자체별 신청서와 개인정보 동의서"],
      exclude: ["공고 기준일에 해당 지역 주민이 아닌 경우", "거주기간 요건을 충족하지 못한 경우", "다른 지자체 유사 사업과 중복되는 경우"],
      caution: "지역별 지원금은 접수기간이 짧거나 예산 소진이 빠른 경우가 있습니다. 거주지 공식 공고를 자주 확인하는 것이 좋습니다."
    }
  };

  var special = {
    "youth-rent": "월세 지원은 임대차계약서, 월세 납부 증빙, 계좌 정보가 중요합니다. 부모와의 관계, 독립 거주 여부, 보증금과 월세 기준을 함께 확인하세요.",
    "youth-leap-account": "청년도약계좌는 가입 후 유지가 중요합니다. 중도해지 시 혜택이 줄어들 수 있으므로 월 납입 가능 금액과 만기 기간을 먼저 계산해보는 것이 좋습니다.",
    "smallbiz-fund": "정책자금은 신청 접수와 실제 대출 실행이 다를 수 있습니다. 보증기관 심사, 은행 심사, 상환기간, 금리를 함께 확인하세요.",
    "startup-basic": "초기 창업지원은 사업계획서 완성도가 중요합니다. 문제 정의, 고객, 시장규모, 수익모델, 집행계획을 구체적으로 작성하는 것이 좋습니다.",
    "jeonse": "전세자금대출은 임대차계약 전후의 신청 가능 시점이 중요합니다. 계약금 납부, 확정일자, 보증기관 조건을 함께 확인하세요.",
    "eitc": "근로장려금은 가구 유형과 소득 구간에 따라 지급액이 달라집니다. 국세청 안내문을 받지 않았더라도 홈택스에서 신청 가능 여부를 확인할 수 있습니다."
  };

  var profile = profiles[program.categoryKey] || base;
  var caution = special[program.slug] || profile.caution;

  var canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
  canonical.setAttribute("rel", "canonical");
  canonical.setAttribute("href", "https://issueba.com/article.html?slug=" + encodeURIComponent(program.slug));
  document.head.appendChild(canonical);
  setMeta("description", program.title + " 대상, 지원 내용, 신청 방법, 준비 서류와 공식 출처를 정리했습니다.");
  setJsonLd(program);

  document.title = program.title + " - 지원바라";
  root.innerHTML = [
    '<a class="brand" href="./index.html"><span class="brand-mark">✣</span><span>지원바라</span></a>',
    "<h1>" + escapeHtml(program.title) + "</h1>",
    "<section><h2>핵심 요약</h2><ul>",
    "<li><strong>분류:</strong> " + escapeHtml(program.category) + "</li>",
    "<li><strong>현재 상태:</strong> " + escapeHtml(program.status) + "</li>",
    "<li><strong>주요 대상:</strong> " + escapeHtml(program.target) + "</li>",
    "<li><strong>지원 내용:</strong> " + escapeHtml(program.amount) + "</li>",
    "<li><strong>" + escapeHtml(program.periodLabel) + ":</strong> " + escapeHtml(program.period) + "</li>",
    "<li><strong>마지막 정리일:</strong> 2026.06.24</li>",
    "</ul></section>",
    "<section><h2>사업 개요</h2><p>" + escapeHtml(program.title) + "은 " + escapeHtml(program.target) + "을 대상으로 하는 " + escapeHtml(program.category) + " 분야 지원정보입니다. 지원바라는 신청자가 먼저 확인해야 할 대상 조건, 신청 경로, 준비 서류, 제외 가능성을 중심으로 정리합니다.</p><p>이 페이지는 공식기관 자료를 찾아보기 전 빠르게 구조를 파악하기 위한 안내입니다. 실제 선정 여부와 지급금액은 신청자의 상황, 기관 예산, 접수 시점, 심사 결과에 따라 달라질 수 있습니다.</p></section>",
    "<section><h2>신청 대상 확인</h2><p>주요 대상은 " + escapeHtml(program.target) + "입니다. 다만 실제 공고에서는 연령, 소득, 거주지, 업종, 고용상태, 가구원 수, 기존 지원 이력 같은 추가 기준을 함께 확인합니다.</p>" + list(profile.exclude) + "</section>",
    "<section><h2>지원 내용과 활용 방법</h2><p>핵심 지원 내용은 " + escapeHtml(program.amount) + "입니다. 지원 방식은 현금성 지원, 바우처, 융자, 이자 보전, 교육, 컨설팅, 사업화 자금 등으로 나뉠 수 있습니다.</p><p>선정 후에는 지원금 사용 가능 항목, 증빙 방식, 결과보고 의무를 확인해야 합니다. 특히 사업비나 바우처는 정해진 용도 외 사용이 제한될 수 있습니다.</p></section>",
    "<section><h2>신청 방법</h2>" + list(profile.apply) + "<p>마감일 직전에는 접속 지연이나 서류 보완 시간이 부족할 수 있으므로, 최소 며칠 전부터 신청서를 준비하는 것이 좋습니다.</p></section>",
    "<section><h2>준비 서류</h2>" + list(profile.docs) + "<p>서류는 발급일 기준을 제한하는 경우가 있습니다. 주민등록번호 뒷자리 공개 여부, 파일 형식, 스캔본 선명도도 접수 전 확인하세요.</p></section>",
    "<section><h2>주의사항</h2><p>" + escapeHtml(caution) + "</p><p>허위 서류 제출, 중복 수혜, 자격요건 미충족이 확인되면 선정 취소, 지원금 환수, 향후 사업 참여 제한이 발생할 수 있습니다.</p></section>",
    "<section><h2>공식 출처</h2><ul><li><a href=\"" + escapeHtml(program.sourceUrl) + "\" target=\"_blank\" rel=\"noopener\">" + escapeHtml(program.sourceName) + "</a></li></ul><p>공식 출처에서는 접수 기간, 세부 대상, 제출서류, 선정 방식, 문의처를 가장 정확하게 확인할 수 있습니다.</p></section>",
    '<p class="source-note">지원바라는 정부 및 공공기관의 공개 자료를 바탕으로 지원정보를 정리합니다. 신청 전 반드시 공식기관의 최신 공고를 확인하세요.</p>'
  ].join("");
}());
