(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
  const theme = document.querySelector('.theme-toggle');
  if (theme) theme.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    theme.setAttribute('aria-pressed', String(document.body.classList.contains('light-mode')));
  });
  const search = document.querySelector('.header-search input');
  if (search) search.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const query = search.value.trim();
      window.location.href = 'directory.html' + (query ? '?q=' + encodeURIComponent(query) : '');
    }
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();