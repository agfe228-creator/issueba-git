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

function shouldDecorate(html) {
  return /<main[^>]+class="[^"]*(post-page|legal-page|category-page)[^"]*"/i.test(html) &&
    !/class="common-footer"/i.test(html);
}

function decorateHtml(html) {
  let next = html
    .replace(/\.\/styles\.css(\?[^"']*)?(["'])/g, './styles.css?v=20260624c$2')
    .replace(/href="\/styles\.css(\?[^"']*)?"/g, 'href="/styles.css?v=20260624c"');

  if (!/google-adsense-account/i.test(next)) {
    next = next.replace(/<head>/i, `<head>\n  ${ADSENSE_META}`);
  }

  if (!/ca-pub-4558482087323814/i.test(next)) {
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

  return new Response(decorateHtml(html), {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
