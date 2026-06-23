var LABELS = {
  youth: "\uCCAD\uB144\uC9C0\uC6D0",
  smallbiz: "\uC18C\uC0C1\uACF5\uC778",
  startup: "\uCC3D\uC5C5\uC9C0\uC6D0",
  housing: "\uC8FC\uAC70\uC9C0\uC6D0",
  welfare: "\uBCF5\uC9C0\uD61C\uD0DD",
  local: "\uC9C0\uC5ED\uBCC4 \uC9C0\uC6D0\uAE08",
  open: "\uC2E0\uCCAD\uC911",
  deadline: "\uB9C8\uAC10\uC784\uBC15",
  period: "\uAE30\uAC04",
  end: "\uB9C8\uAC10",
  check: "\uACF5\uC2DD \uACF5\uACE0 \uD655\uC778"
};

window.SUPPORT_PROGRAMS = [
  ["youth-rent", "\uCCAD\uB144 \uC6D4\uC138 \uD55C\uC2DC \uD2B9\uBCC4\uC9C0\uC6D0", "youth", "open", LABELS.period, LABELS.check, "\uB9CC 19~34\uC138 \uCCAD\uB144", "\uC6D4 \uCD5C\uB300 20\uB9CC\uC6D0", "\uBCF5\uC9C0\uB85C", "https://www.bokjiro.go.kr/"],
  ["kua-youth", "\uAD6D\uBBFC\uCDE8\uC5C5\uC9C0\uC6D0\uC81C\uB3C4", "youth", "open", LABELS.period, "\uC0C1\uC2DC \uC2E0\uCCAD \uD655\uC778", "\uCDE8\uC5C5 \uC900\uBE44 \uCCAD\uB144", "\uAD6C\uC9C1\uCD09\uC9C4\uC218\uB2F9", "\uACE0\uC6A924", "https://www.work24.go.kr/"],
  ["youth-leap-account", "\uCCAD\uB144\uB3C4\uC57D\uACC4\uC88C", "youth", "open", LABELS.period, "\uC6D4\uBCC4 \uC2E0\uCCAD \uD655\uC778", "\uC18C\uB4DD\uC694\uAC74 \uCDA9\uC871 \uCCAD\uB144", "\uC815\uBD80\uAE30\uC5EC\uAE08", "\uC11C\uBBFC\uAE08\uC735\uC9C4\uD765\uC6D0", "https://ylaccount.kinfa.or.kr/"],
  ["youth-job", "\uCCAD\uB144 \uCDE8\uC5C5\uC131\uACF5\uC218\uB2F9", "youth", "deadline", LABELS.end, LABELS.check, "\uCDE8\uC5C5\uC9C0\uC6D0 \uCC38\uC5EC \uCCAD\uB144", "\uCD5C\uB300 150\uB9CC\uC6D0", "\uACE0\uC6A924", "https://www.work24.go.kr/"],
  ["youth-saving", "\uCCAD\uB144\uB0B4\uC77C\uC800\uCD95\uACC4\uC88C", "youth", "open", LABELS.period, "\uBCF5\uC9C0\uB85C \uD655\uC778", "\uADFC\uB85C \uC911\uC778 \uCCAD\uB144", "\uC790\uC0B0\uD615\uC131 \uC9C0\uC6D0", "\uBCF5\uC9C0\uB85C", "https://www.bokjiro.go.kr/"],

  ["smallbiz-digital", "\uC18C\uC0C1\uACF5\uC778 \uB514\uC9C0\uD138 \uC804\uD658 \uC9C0\uC6D0", "smallbiz", "open", LABELS.period, "\uAE30\uAD00\uBCC4 \uACF5\uACE0 \uD655\uC778", "\uC18C\uC0C1\uACF5\uC778", "\uCD5C\uB300 100\uB9CC\uC6D0", "\uC18C\uC0C1\uACF5\uC77824", "https://www.sbiz24.kr/"],
  ["smallbiz-fund", "\uC18C\uC0C1\uACF5\uC778 \uC815\uCC45\uC790\uAE08", "smallbiz", "open", LABELS.period, "\uC790\uAE08\uBCC4 \uD655\uC778", "\uC18C\uC0C1\uACF5\uC778", "\uC815\uCC45\uC790\uAE08 \uC735\uC790", "\uC18C\uC0C1\uACF5\uC778\uC815\uCC45\uC790\uAE08", "https://ols.semas.or.kr/"],
  ["smallbiz-electric", "\uC18C\uC0C1\uACF5\uC778 \uC804\uAE30\uC694\uAE08 \uC9C0\uC6D0", "smallbiz", "open", LABELS.period, LABELS.check, "\uC804\uAE30\uC694\uAE08 \uBD80\uB2F4 \uC18C\uC0C1\uACF5\uC778", "\uC804\uAE30\uC694\uAE08 \uC77C\uBD80 \uC9C0\uC6D0", "\uC18C\uC0C1\uACF5\uC77824", "https://www.sbiz24.kr/"],
  ["smallbiz-online", "\uC18C\uC0C1\uACF5\uC778 \uC628\uB77C\uC778 \uD310\uB85C\uC9C0\uC6D0", "smallbiz", "open", LABELS.period, "\uC18C\uC0C1\uACF5\uC77824 \uD655\uC778", "\uC628\uB77C\uC778 \uC9C4\uCD9C \uD76C\uB9DD \uC0AC\uC5C5\uC790", "\uD310\uB85C\u00B7\uB9C8\uCF00\uD305 \uC9C0\uC6D0", "\uC18C\uC0C1\uACF5\uC77824", "https://www.sbiz24.kr/"],

  ["startup-basic", "\uCD08\uAE30 \uCC3D\uC5C5\uD328\uD0A4\uC9C0", "startup", "open", LABELS.period, "K-Startup \uD655\uC778", "\uC608\uBE44\uCC3D\uC5C5\uC790", "\uC0AC\uC5C5\uD654 \uC790\uAE08", "K-Startup", "https://www.k-startup.go.kr/"],
  ["startup-pre", "\uC608\uBE44\uCC3D\uC5C5\uD328\uD0A4\uC9C0", "startup", "open", LABELS.period, "K-Startup \uD655\uC778", "\uC608\uBE44\uCC3D\uC5C5\uC790", "\uC0AC\uC5C5\uD654 \uC9C0\uC6D0", "K-Startup", "https://www.k-startup.go.kr/"],
  ["startup-leap", "\uCC3D\uC5C5 \uB3C4\uC57D\uD328\uD0A4\uC9C0", "startup", "deadline", LABELS.end, "K-Startup \uD655\uC778", "\uCC3D\uC5C5\uAE30\uC5C5", "\uCD5C\uB300 3\uC5B5\uC6D0", "K-Startup", "https://www.k-startup.go.kr/"],
  ["tips", "TIPS \uD504\uB85C\uADF8\uB7A8", "startup", "open", LABELS.period, LABELS.check, "\uAE30\uC220\uCC3D\uC5C5 \uC2A4\uD0C0\uD2B8\uC5C5", "R&D \uC9C0\uC6D0", "TIPS", "https://www.jointips.or.kr/"],

  ["jeonse", "\uBC84\uD300\uBAA9 \uC804\uC138\uC790\uAE08\uB300\uCD9C", "housing", "open", LABELS.period, "\uC0C1\uD488\uBCC4 \uD655\uC778", "\uBB34\uC8FC\uD0DD \uC138\uB300\uC8FC", "\uC804\uC138\uC790\uAE08 \uB300\uCD9C", "\uC8FC\uD0DD\uB3C4\uC2DC\uAE30\uAE08", "https://nhuf.molit.go.kr/"],
  ["newlywed", "\uC2E0\uD63C\uBD80\uBD80 \uC804\uC138\uC790\uAE08 \uC9C0\uC6D0", "housing", "open", LABELS.period, "\uC9C0\uC790\uCCB4 \uD655\uC778", "\uC2E0\uD63C\uBD80\uBD80", "\uC774\uC790 \uC77C\uBD80 \uC9C0\uC6D0", "\uC815\uBD8024", "https://www.gov.kr/"],
  ["housing-benefit", "\uC8FC\uAC70\uAE09\uC5EC", "housing", "open", LABELS.period, "\uC0C1\uC2DC \uC2E0\uCCAD \uD655\uC778", "\uC18C\uB4DD\uC778\uC815\uC561 \uAE30\uC900 \uAC00\uAD6C", "\uC784\uCC28\uB8CC \uC9C0\uC6D0", "\uBCF5\uC9C0\uB85C", "https://www.bokjiro.go.kr/"],

  ["eitc", "\uADFC\uB85C\uC7A5\uB824\uAE08", "welfare", "open", LABELS.period, "\uAD6D\uC138\uCCAD \uD655\uC778", "\uC18C\uB4DD\uC694\uAC74 \uCDA9\uC871 \uAC00\uAD6C", "\uAC00\uAD6C\uBCC4 \uC9C0\uAE09", "\uAD6D\uC138\uCCAD \uD648\uD0DD\uC2A4", "https://www.hometax.go.kr/"],
  ["culture", "\uBB38\uD654\uB204\uB9AC\uCE74\uB4DC", "welfare", "open", LABELS.period, "\uC5F0\uB3C4\uBCC4 \uD655\uC778", "\uAE30\uCD08\uC0DD\uD65C\uC218\uAE09\uC790", "\uBB38\uD654\u00B7\uC5EC\uD589 \uBC14\uC6B0\uCC98", "\uBB38\uD654\uB204\uB9AC", "https://www.mnuri.kr/"],
  ["energy", "\uC5D0\uB108\uC9C0\uBC14\uC6B0\uCC98", "welfare", "open", LABELS.period, LABELS.check, "\uCDE8\uC57D\uACC4\uCE35 \uAC00\uAD6C", "\uC5D0\uB108\uC9C0\uBE44 \uC9C0\uC6D0", "\uC5D0\uB108\uC9C0\uBC14\uC6B0\uCC98", "https://www.energyv.or.kr/"],

  ["seoul-youth", "\uC11C\uC6B8\uC2DC \uCCAD\uB144\uC218\uB2F9", "local", "open", LABELS.period, "\uC11C\uC6B8\uC2DC \uD655\uC778", "\uC11C\uC6B8 \uAC70\uC8FC \uCCAD\uB144", "\uD65C\uB3D9\uC9C0\uC6D0\uAE08", "\uCCAD\uB144\uBABD\uB545\uC815\uBCF4\uD1B5", "https://youth.seoul.go.kr/"],
  ["gg-youth", "\uACBD\uAE30\uB3C4 \uCCAD\uB144\uAE30\uBCF8\uC18C\uB4DD", "local", "open", LABELS.period, "\uACBD\uAE30\uB3C4 \uD655\uC778", "\uACBD\uAE30\uB3C4 \uAC70\uC8FC \uCCAD\uB144", "\uBD84\uAE30\uBCC4 \uC9C0\uC6D0", "\uC7A1\uC544\uBC14", "https://apply.jobaba.net/"],
  ["busan-youth", "\uBD80\uC0B0 \uCCAD\uB144 \uC9C0\uC6D0\uAE08", "local", "open", LABELS.period, "\uBD80\uC0B0\uC2DC \uD655\uC778", "\uBD80\uC0B0 \uAC70\uC8FC \uCCAD\uB144", "\uD65C\uB3D9\uBE44 \uC9C0\uC6D0", "\uBD80\uC0B0\uAD11\uC5ED\uC2DC", "https://www.busan.go.kr/"]
].map(function (item) {
  var categoryKey = item[2];
  var statusKey = item[3];
  return {
    slug: item[0],
    title: item[1],
    categoryKey: categoryKey,
    category: LABELS[categoryKey],
    categoryTone: item[2] === "youth" ? "blue" : item[2] === "smallbiz" || item[2] === "local" ? "mint" : item[2] === "startup" ? "orange" : "purple",
    status: LABELS[statusKey],
    statusTone: statusKey === "deadline" ? "amber" : "green",
    group: statusKey === "deadline" ? "deadline" : "open",
    periodLabel: item[4],
    period: item[5],
    target: item[6],
    amount: item[7],
    sourceName: item[8],
    sourceUrl: item[9],
    link: "./article.html?slug=" + item[0],
    updatedAt: "2026-06-23"
  };
});
