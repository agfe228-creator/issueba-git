(function () {
  var programs = window.SUPPORT_PROGRAMS || [];
  var params = new URLSearchParams(window.location.search);
  var category = params.get("category") || document.body.getAttribute("data-category") || "전체";
  var title = document.querySelector("[data-category-title]");
  var intro = document.querySelector("[data-category-intro]");
  var guide = document.querySelector("[data-category-guide]");
  var list = document.querySelector("[data-category-list]");
  var count = document.querySelector("[data-category-count]");
  var search = document.querySelector("[data-category-search]");
  var chips = document.querySelectorAll("[data-filter-status]");

  var categoryGuides = {
    "청년지원": {
      lead: "청년지원 사업은 나이, 거주지, 소득, 재학·취업 상태, 중복 수혜 여부에 따라 신청 가능성이 크게 달라집니다. 같은 청년 대상 사업이라도 공고일 기준인지 신청일 기준인지, 부모 가구 소득을 함께 보는지에 따라 결과가 달라질 수 있으므로 신청 전 공식 공고의 기준일을 먼저 확인하는 것이 좋습니다.",
      checks: ["나이 기준과 거주지 기준일 확인", "본인·가구 소득 산정 방식 확인", "월세·취업·자산형성 사업 간 중복 제한 확인", "주민등록등본, 가족관계증명서, 소득자료 발급일 확인"],
      source: "복지로, 고용24, 청년몽땅정보통, 정부24 등 공식기관 안내를 우선 확인하세요."
    },
    "소상공인": {
      lead: "소상공인 지원사업은 업종, 매출 규모, 사업자등록 상태, 세금 체납 여부, 기존 수혜 이력에 따라 신청 가능 여부가 나뉩니다. 정책자금, 디지털 전환, 시설개선, 판로지원은 필요한 증빙과 사후 정산 방식이 다르므로 사업 목적과 비용 집행 기준을 함께 확인해야 합니다.",
      checks: ["사업자등록 상태와 휴·폐업 여부 확인", "지원 제외 업종과 매출 기준 확인", "국세·지방세 납세증명 준비", "사전 지출 인정 여부와 자부담 여부 확인"],
      source: "소상공인24, 소상공인정책자금, 중소벤처기업부 공고를 기준으로 최종 확인하세요."
    },
    "창업지원": {
      lead: "창업지원 사업은 아이디어 자체보다 사업화 가능성, 팀 실행력, 시장 검증 자료, 사업비 사용 계획을 중요하게 봅니다. 예비창업, 초기창업, 도약기 창업은 업력 기준과 평가 방식이 다르므로 내 사업자가 어느 단계에 해당하는지 먼저 확인해야 합니다.",
      checks: ["예비·초기·도약 등 업력 기준 확인", "사업계획서와 발표평가 준비", "매출, 고객, 특허, 계약 등 증빙자료 정리", "사업비 집행 가능 항목과 정산 기준 확인"],
      source: "K-Startup, 중소벤처기업부, 창업진흥원 공고를 우선 확인하세요."
    },
    "주거지원": {
      lead: "주거지원은 임대차계약, 전입신고, 무주택 여부, 소득·자산 기준, 보증금과 월세 수준을 함께 확인합니다. 전세자금대출이나 월세지원은 계약 후 대출·지원이 거절되면 부담이 커질 수 있으므로 계약 전 공식기관과 취급 은행 상담을 먼저 진행하는 것이 안전합니다.",
      checks: ["임대차계약서와 전입신고 기준 확인", "무주택, 소득, 자산 기준 확인", "보증금·월세 한도와 중복 지원 여부 확인", "등기부등본과 보증 가입 가능 여부 확인"],
      source: "주택도시기금, 기금e든든, 복지로, 정부24 안내를 기준으로 확인하세요."
    },
    "복지혜택": {
      lead: "복지혜택은 가구 구성, 소득인정액, 장애·아동·에너지 취약 여부, 기존 급여 수급 상태에 따라 대상이 달라집니다. 같은 가구라도 주소, 부양의무, 건강보험료, 소득 자료 산정 방식에 따라 결과가 달라질 수 있어 신청 전 모의계산과 상담을 함께 활용하는 것이 좋습니다.",
      checks: ["가구원 범위와 소득인정액 기준 확인", "기존 복지급여와 중복 가능 여부 확인", "신청 시 필요한 증빙서류 발급일 확인", "주소, 가족관계, 건강보험 자격 변동 신고 확인"],
      source: "복지로, 정부24, 국세청 홈택스, 각 사업 공식 사이트를 기준으로 확인하세요."
    },
    "지역별 지원금": {
      lead: "지역별 지원금은 거주지와 기준일이 가장 중요합니다. 같은 청년·소상공인 사업이라도 서울, 경기, 부산, 인천, 대전, 광주 등 지자체별로 모집 기간, 예산, 나이 기준, 제출서류가 다르게 운영될 수 있습니다. 예산 소진 시 조기 마감될 수 있으므로 공고 게시일과 접수 상태를 함께 확인하세요.",
      checks: ["주민등록상 거주지와 거주 기준일 확인", "지자체별 모집 기간과 예산 소진 여부 확인", "타 지역 또는 중앙정부 사업과 중복 여부 확인", "신청 후 문자·이메일 보완 요청 확인"],
      source: "각 시·도청, 청년포털, 일자리포털, 정부24 공고를 기준으로 최종 확인하세요."
    },
    "전체": {
      lead: "지원바라는 청년, 소상공인, 창업, 주거, 복지, 지역별 지원금을 공식기관 출처 중심으로 정리합니다. 지원사업은 예산과 공고에 따라 대상, 금액, 기간이 바뀔 수 있으므로 요약 정보만 보고 판단하지 말고 상세글의 공식 링크를 함께 확인하세요.",
      checks: ["대상 조건과 기준일 확인", "신청 기간과 예산 소진 여부 확인", "준비서류와 발급일 기준 확인", "중복 수혜 제한과 제외 대상 확인"],
      source: "최종 신청 가능 여부는 담당기관의 공식 공고와 심사를 기준으로 결정됩니다."
    }
  };

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

  function renderGuide() {
    if (!guide) return;
    var data = categoryGuides[category] || categoryGuides["전체"];
    guide.innerHTML = [
      '<div class="category-guide-box">',
      '<h2>신청 전 확인사항</h2>',
      '<p>' + escapeHtml(data.lead) + '</p>',
      '<ul>' + data.checks.map(function (item) { return '<li>' + escapeHtml(item) + '</li>'; }).join("") + '</ul>',
      '<p class="source-note">' + escapeHtml(data.source) + ' 지원바라는 신청 대행 사이트가 아니며, 최종 기준은 공식기관 공고입니다.</p>',
      '</div>'
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
  if (intro) {
    var introData = categoryGuides[category] || categoryGuides["전체"];
    intro.textContent = category === "전체" ? "지원사업과 지원금을 공식 출처 기준으로 확인하세요." : category + " 관련 지원사업을 대상, 지원 내용, 신청 전 확인사항, 공식 출처 기준으로 정리했습니다.";
    if (introData && introData.source) intro.setAttribute("title", introData.source);
  }

  if (category !== "전체") {
    document.title = category + " 지원사업 - 지원바라";
    setMeta("description", category + " 정부지원금과 지원사업 목록입니다. 신청 전 확인사항, 준비서류, 제외 가능성, 공식 출처를 함께 확인하세요.");
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
  renderGuide();
  render();
}());
