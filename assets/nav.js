// 共用翻頁邏輯
// 使用方式：每頁 html 在載入此檔之前，先用 inline script 定義：
//   const CURRENT_PAGE = 42;
//   const TOTAL_PAGES  = 10000;

function goToPage() {
  const val = parseInt($('#jumpInput').val());
  if (val >= 1 && val <= TOTAL_PAGES) {
    window.location.href = 'page_' + String(val).padStart(4, '0') + '.html';
  }
}

$('#jumpInput').on('keydown', function (e) {
  if (e.key === 'Enter') goToPage();
});

$(document).on('keydown', function (e) {
  if (e.key === 'ArrowLeft' && CURRENT_PAGE > 1) {
    window.location.href = 'page_' + String(CURRENT_PAGE - 1).padStart(4, '0') + '.html';
  }
  if (e.key === 'ArrowRight' && CURRENT_PAGE < TOTAL_PAGES) {
    window.location.href = 'page_' + String(CURRENT_PAGE + 1).padStart(4, '0') + '.html';
  }
});
