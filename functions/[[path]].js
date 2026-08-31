const ADSENSE_META = '<meta name="google-adsense-account" content="ca-pub-4558482087323814">';
const ADSENSE = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4558482087323814" crossorigin="anonymous"></script>';

const FOOTER = `
<footer class="common-footer" aria-label="지원바라 공통 하단 메뉴">
  <p>지원바라는 공식기관 출처를 기준으로 지원사업 정보를 정리합니다. 신청 전 최신 공고를 반드시 확인해 주세요.</p>
  <nav>
    <a href="/about.html">소개</a>
    <a href="/contact.html">문의</a>
    <a href="/privacy.html">개인정보처리방침</a>
    <a href="/policy.html">운영정책</a>
    <a href="/terms.html">이용약관</a>
    <a href="/source-policy.html">정보 검수 기준</a>
  </nav>
</footer>`;

const PROGRAMS = [
  { slug: 'youth-rent', title: '청년 월세 한시 특별지원', category: '청년지원', status: '신청중', period: '공식 공고 확인', target: '만 19~34세 무주택 청년', amount: '월 최대 20만원', sourceName: '복지로', sourceUrl: 'https://www.bokjiro.go.kr/' },
  { slug: 'kua-youth', title: '국민취업지원제도 청년층 지원', category: '청년지원', status: '상시 확인', period: '고용24 공고 확인', target: '취업을 준비하는 청년', amount: '구직촉진수당 및 취업지원서비스', sourceName: '고용24', sourceUrl: 'https://www.work24.go.kr/' },
  { slug: 'youth-leap-account', title: '청년도약계좌', category: '청년지원', status: '신청중', period: '월별 신청기간 확인', target: '소득요건을 충족하는 청년', amount: '정부기여금 및 비과세 혜택', sourceName: '서민금융진흥원', sourceUrl: 'https://ylaccount.kinfa.or.kr/' },
  { slug: 'youth-housing-separate', title: '청년 주거급여 분리지급', category: '청년지원', status: '상시 확인', period: '복지로 공고 확인', target: '주거급여 수급가구의 미혼 청년', amount: '지역별 기준임대료 범위 지원', sourceName: '복지로', sourceUrl: 'https://www.bokjiro.go.kr/' },
  { slug: 'smallbiz-fund', title: '소상공인 정책자금', category: '소상공인', status: '신청중', period: '자금별 접수 일정 확인', target: '소상공인 및 자영업자', amount: '정책자금 융자', sourceName: '소상공인정책자금', sourceUrl: 'https://ols.semas.or.kr/' },
  { slug: 'smallbiz-digital', title: '소상공인 디지털 전환 지원사업', category: '소상공인', status: '신청중', period: '소상공인24 공고 확인', target: '디지털 전환이 필요한 소상공인', amount: '온라인 판로 및 디지털 도구 지원', sourceName: '소상공인24', sourceUrl: 'https://www.sbiz24.kr/' },
  { slug: 'smallbiz-electric', title: '소상공인 전기요금 특별지원', category: '소상공인', status: '공고 확인', period: '공식 접수 일정 확인', target: '전기요금 부담 소상공인', amount: '전기요금 일부 지원', sourceName: '소상공인24', sourceUrl: 'https://www.sbiz24.kr/' },
  { slug: 'smallbiz-return', title: '희망리턴패키지', category: '소상공인', status: '마감임박', period: '사업별 공고 확인', target: '폐업 또는 재창업 준비 소상공인', amount: '재기 교육, 컨설팅, 사업화 지원', sourceName: '소상공인시장진흥공단', sourceUrl: 'https://www.sbiz.or.kr/' },
  { slug: 'startup-pre', title: '예비창업패키지', category: '창업지원', status: '공고 확인', period: 'K-Startup 모집공고 확인', target: '예비창업자', amount: '사업화 자금 및 창업교육', sourceName: 'K-Startup', sourceUrl: 'https://www.k-startup.go.kr/' },
  { slug: 'startup-basic', title: '초기 창업패키지 지원사업', category: '창업지원', status: '신청중', period: 'K-Startup 공고 확인', target: '3년 이내 창업기업', amount: '사업화 자금 및 특화 프로그램', sourceName: 'K-Startup', sourceUrl: 'https://www.k-startup.go.kr/' },
  { slug: 'startup-leap', title: '창업 도약패키지 지원사업', category: '창업지원', status: '마감임박', period: 'K-Startup 공고 확인', target: '3~7년 이내 창업기업', amount: '스케일업 사업화 지원', sourceName: 'K-Startup', sourceUrl: 'https://www.k-startup.go.kr/' },
  { slug: 'tips', title: 'TIPS 프로그램', category: '창업지원', status: '상시 확인', period: '운영사 및 공고 확인', target: '기술창업 스타트업', amount: '투자연계 R&D 지원', sourceName: 'TIPS', sourceUrl: 'https://www.jointips.or.kr/' },
  { slug: 'jeonse', title: '버팀목 전세자금대출', category: '주거지원', status: '신청중', period: '상품별 조건 확인', target: '무주택 세대주', amount: '전세자금 대출 지원', sourceName: '주택도시기금', sourceUrl: 'https://nhuf.molit.go.kr/' },
  { slug: 'housing-benefit', title: '주거급여', category: '주거지원', status: '상시 확인', period: '복지로 신청 확인', target: '소득인정액 기준 충족 가구', amount: '임차료 또는 수선유지비 지원', sourceName: '복지로', sourceUrl: 'https://www.bokjiro.go.kr/' },
  { slug: 'lh-youth-jeonse', title: 'LH 청년전세임대', category: '주거지원', status: '공고 확인', period: 'LH 청약플러스 공고 확인', target: '무주택 청년 및 대학생', amount: '전세임대 입주 지원', sourceName: 'LH 청약플러스', sourceUrl: 'https://apply.lh.or.kr/' },
  { slug: 'youth-jeonse-guarantee', title: '청년 전세보증금 반환보증 보증료 지원', category: '주거지원', status: '마감임박', period: '정부24 및 지자체 공고 확인', target: '전세보증금 반환보증 가입 청년', amount: '보증료 일부 지원', sourceName: '정부24', sourceUrl: 'https://www.gov.kr/' },
  { slug: 'eitc', title: '근로장려금', category: '복지혜택', status: '신청중', period: '국세청 신청기간 확인', target: '소득요건 충족 근로·사업 가구', amount: '가구유형별 차등 지급', sourceName: '국세청 홈택스', sourceUrl: 'https://www.hometax.go.kr/' },
  { slug: 'child-tax-credit', title: '자녀장려금', category: '복지혜택', status: '신청중', period: '국세청 신청기간 확인', target: '부양자녀가 있는 저소득 가구', amount: '자녀 수와 소득에 따라 지급', sourceName: '국세청 홈택스', sourceUrl: 'https://www.hometax.go.kr/' },
  { slug: 'culture', title: '문화누리카드', category: '복지혜택', status: '신청중', period: '연도별 이용기간 확인', target: '기초생활수급자 및 차상위계층', amount: '문화·여행·체육 바우처', sourceName: '문화누리', sourceUrl: 'https://www.mnuri.kr/' },
  { slug: 'energy', title: '에너지바우처', category: '복지혜택', status: '공고 확인', period: '공식 공고 확인', target: '취약계층 가구', amount: '가구별 에너지 비용 지원', sourceName: '에너지바우처', sourceUrl: 'https://www.energyv.or.kr/' },
  { slug: 'disabled-activity', title: '장애인활동지원', category: '복지혜택', status: '상시 확인', period: '복지로 및 지자체 확인', target: '활동지원이 필요한 장애인', amount: '활동지원 급여', sourceName: '복지로', sourceUrl: 'https://www.bokjiro.go.kr/' },
  { slug: 'seoul-youth', title: '서울 청년수당', category: '지역별 지원금', status: '공고 확인', period: '서울시 공고 확인', target: '서울 거주 미취업 청년', amount: '공고별 지원금 확인', sourceName: '청년몽땅정보통', sourceUrl: 'https://youth.seoul.go.kr/' },
  { slug: 'busan-youth', title: '부산 청년 디딤돌카드', category: '지역별 지원금', status: '공고 확인', period: '부산시 공고 확인', target: '부산 거주 미취업 청년', amount: '구직활동비 지원', sourceName: '부산광역시', sourceUrl: 'https://www.busan.go.kr/' },
  { slug: 'incheon-exam', title: '인천 청년 자격증 응시료 지원', category: '지역별 지원금', status: '공고 확인', period: '인천시 공고 확인', target: '인천 거주 청년', amount: '자격시험 응시료 일부 지원', sourceName: '인천광역시', sourceUrl: 'https://www.incheon.go.kr/' },
  { slug: 'daejeon-rent', title: '대전 청년 월세 지원', category: '지역별 지원금', status: '마감임박', period: '대전시 공고 확인', target: '대전 거주 무주택 청년', amount: '월세 일부 지원', sourceName: '대전광역시', sourceUrl: 'https://www.daejeon.go.kr/' },
  { slug: 'gwangju-dream', title: '광주 청년드림수당', category: '지역별 지원금', status: '공고 확인', period: '광주광역시 공고 확인', target: '광주 거주 미취업 청년', amount: '구직활동비 지원', sourceName: '광주광역시', sourceUrl: 'https://www.gwangju.go.kr/' }
];

const CATEGORY_GUIDES = {
  '청년지원': { title: '청년지원 신청 전 확인사항', body: '청년지원은 나이, 거주지, 소득, 취업 상태에 따라 신청 가능 여부가 크게 달라집니다. 같은 청년 사업이라도 월세·취업·자산형성·주거 분야의 기준이 다르므로, 신청 전 공식 공고에서 기준일과 제출서류를 먼저 확인하는 것이 안전합니다.', tips: ['만 나이 기준일 확인', '소득·재산 산정 방식 확인', '중복 참여 제한 여부 확인'] },
  '소상공인': { title: '소상공인 지원사업 확인 포인트', body: '소상공인 지원은 업종, 매출 규모, 사업자등록 상태, 휴·폐업 여부에 따라 대상이 달라집니다. 특히 정책자금과 보조금은 접수 예산이 조기 소진될 수 있어 공고일, 접수 시작일, 필요 서류를 함께 확인해야 합니다.', tips: ['사업자등록증 정보 일치 여부 확인', '업종 제한 확인', '자금별 접수 기간과 예산 소진 여부 확인'] },
  '창업지원': { title: '창업지원사업 신청 전략', body: '창업지원은 예비창업, 초기창업, 도약기 기업처럼 창업 연차에 따라 신청 가능한 사업이 나뉩니다. 사업계획서, 증빙자료, 발표평가가 필요한 경우가 많으므로 지원금 규모만 보지 말고 평가 항목과 의무사항까지 확인해야 합니다.', tips: ['창업 연차 기준 확인', '사업계획서 제출 항목 확인', '협약 후 의무사항과 정산 기준 확인'] },
  '주거지원': { title: '주거지원 신청 전 주의사항', body: '주거지원은 무주택 여부, 세대주 요건, 임대차계약, 보증금·월세 기준을 함께 봅니다. 대출성 상품은 금리와 상환 조건까지 확인해야 하며, 보조금성 사업은 지자체별 공고가 다를 수 있습니다.', tips: ['무주택·세대주 기준 확인', '임대차계약서와 전입 조건 확인', '소득·자산 기준 및 중복 지원 제한 확인'] },
  '복지혜택': { title: '복지혜택 공식 확인 기준', body: '복지혜택은 가구원 수, 소득인정액, 수급 자격, 이용 기간에 따라 지원 내용이 달라집니다. 신청 가능한 것처럼 보여도 실제 선정은 주민센터, 복지로, 국세청 등 공식기관 기준으로 판단됩니다.', tips: ['가구 기준과 소득인정액 확인', '신청 기간과 사용 기간 구분', '기존 수급 자격과 중복 가능 여부 확인'] },
  '지역별 지원금': { title: '지역별 지원금 확인 방법', body: '지역별 지원금은 거주지, 전입일, 연령, 지역 내 활동 요건이 중요합니다. 같은 청년 또는 소상공인 지원이라도 시·도와 시·군·구마다 접수 방식이 다르므로 해당 지자체 공고를 우선 확인해야 합니다.', tips: ['주민등록상 거주 기준 확인', '지역별 접수 사이트 확인', '예산 소진 및 선착순 여부 확인'] },
  '전체': { title: '지원사업 전체 보기 안내', body: '지원바라는 정부·공공기관의 공식 공고를 기준으로 청년, 소상공인, 창업, 주거, 복지, 지역별 지원사업을 정리합니다. 각 글은 신청 대행이 아니라 공식 출처 확인을 돕는 정보 페이지입니다.', tips: ['지원 대상과 신청기간 확인', '공식 출처 링크 확인', '제출서류와 제외 조건 확인'] }
};

const HOME_OPEN_SLUGS = ['youth-rent', 'kua-youth', 'youth-leap-account', 'youth-housing-separate', 'smallbiz-fund', 'smallbiz-digital', 'smallbiz-electric', 'startup-basic', 'startup-pre', 'tips', 'jeonse', 'eitc'];
const HOME_DEADLINE_SLUGS = ['youth-jeonse-guarantee', 'startup-leap', 'smallbiz-return', 'daejeon-rent', 'busan-youth', 'gwangju-dream'];

function shouldDecorate(html) {
  return /<main[^>]+class="[^"]*(post-page|legal-page|category-page)[^"]*"/i.test(html) && !/class="common-footer"/i.test(html);
}

function findProgram(slug) {
  return PROGRAMS.find((program) => program.slug === slug);
}

function programCard(program) {
  return `
    <article class="program-card">
      <div class="program-card-head">
        <span class="tag">${program.category}</span>
        <span class="status">${program.status}</span>
      </div>
      <h3><a href="/${program.slug}.html">${program.title}</a></h3>
      <dl>
        <div><dt>신청기간</dt><dd>${program.period}</dd></div>
        <div><dt>대상</dt><dd>${program.target}</dd></div>
        <div><dt>지원내용</dt><dd>${program.amount}</dd></div>
        <div><dt>공식출처</dt><dd><a href="${program.sourceUrl}" rel="nofollow noopener" target="_blank">${program.sourceName}</a></dd></div>
      </dl>
      <a class="text-link" href="/${program.slug}.html">자세히 보기</a>
    </article>`;
}

function categoryGuide(category) {
  const guide = CATEGORY_GUIDES[category] || CATEGORY_GUIDES['전체'];
  return `
    <section class="category-guide" data-category-guide aria-label="카테고리별 신청 전 안내">
      <h2>${guide.title}</h2>
      <p>${guide.body}</p>
      <ul>${guide.tips.map((tip) => `<li>${tip}</li>`).join('')}</ul>
      <p class="source-note">지원바라는 신청 대행 또는 선정 보장을 하지 않으며, 최종 조건은 각 공식기관 공고를 기준으로 확인해야 합니다.</p>
    </section>`;
}

function injectHomeFallback(html) {
  let next = html;
  const openCards = HOME_OPEN_SLUGS.map(findProgram).filter(Boolean).map(programCard).join('');
  const deadlineCards = HOME_DEADLINE_SLUGS.map(findProgram).filter(Boolean).map(programCard).join('');

  next = next.replace(/<div class="program-list" id="open-programs" data-program-list="open">[\s\S]*?<\/div>/i, `<div class="program-list" id="open-programs" data-program-list="open">${openCards}</div>`);
  next = next.replace(/<div class="program-list" id="deadline-programs" data-program-list="deadline">[\s\S]*?<\/div>/i, `<div class="program-list" id="deadline-programs" data-program-list="deadline">${deadlineCards}</div>`);

  return next;
}

function injectCategoryFallback(html, requestUrl) {
  if (!/data-category-list/i.test(html)) {
    return html;
  }

  let category = '전체';
  try {
    const url = new URL(requestUrl);
    category = url.searchParams.get('category') || '전체';
  } catch (error) {
    category = '전체';
  }

  const items = PROGRAMS.filter((program) => category === '전체' || program.category === category);
  const cards = (items.length ? items : PROGRAMS.slice(0, 12)).map(programCard).join('');
  let next = html;

  next = next.replace(/<section class="category-guide" data-category-guide aria-label="카테고리별 신청 전 안내">[\s\S]*?<\/section>/i, categoryGuide(category));
  next = next.replace(/<section class="category-list" data-category-list>[\s\S]*?<\/section>/i, `<section class="category-list" data-category-list>${cards}</section>`);

  return next;
}

function decorateHtml(html, requestUrl) {
  let next = html
    .replace(/\.\/styles\.css(\?[^"']*)?(["'])/g, './styles.css?v=20260624c$2')
    .replace(/href="\/styles\.css(\?[^"']*)?"/g, 'href="/styles.css?v=20260624c"');

  next = injectHomeFallback(next);
  next = injectCategoryFallback(next, requestUrl);

  if (!/google-adsense-account/i.test(next)) {
    next = next.replace(/<head>/i, `<head>\n  ${ADSENSE_META}`);
  }

  if (!/pagead2\.googlesyndication\.com/i.test(next)) {
    next = next.replace(/<\/head>/i, `  ${ADSENSE}\n</head>`);
  }

  if (shouldDecorate(next)) {
    next = next.replace(/<\/main>/i, `${FOOTER}</main>`);
  }

  return next;
}

export async function onRequest(context) {
  const response = await context.next();
  const contentType = response.headers.get('content-type') || '';

  if (!contentType.includes('text/html')) {
    return response;
  }

  const html = await response.text();
  const headers = new Headers(response.headers);
  headers.set('content-type', 'text/html; charset=UTF-8');
  headers.set('cache-control', 'public, max-age=0, must-revalidate');

  return new Response(decorateHtml(html, context.request.url), {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
