fetch('/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;
  });

fetch('/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
  });

// 우클릭 방지
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// 드래그 선택 방지
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// 키보드 단축키 방지
document.addEventListener('keydown', function(e) {
  if (
    (e.ctrlKey && (e.key === 'c' || e.key === 's' || e.key === 'u')) ||
    e.key === 'F12'
  ) {
    e.preventDefault();
  }
});

// 이미지 드래그 방지
document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});