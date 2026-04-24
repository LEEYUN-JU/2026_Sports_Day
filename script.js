// 언어 변경 함수
// Change language function
function setLang(lang) {
  document.querySelectorAll('.lang').forEach(el => {
    el.style.display = 'none';
  });

  document.querySelector('.' + lang).style.display = 'block';
}

// 기본 언어 설정 (영어)
// Default language (English)
setLang('en');
