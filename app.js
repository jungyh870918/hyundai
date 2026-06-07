/* ── NAV scroll shadow ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', scrollY > 10);
});

/* ── Tab switch (Report II 비율 조정안 등) ── */
function switchT(group, id, btn) {
  document.querySelectorAll('[id^="' + group + '-"]').forEach(p => p.classList.remove('on'));
  btn.closest('.tab-nav').querySelectorAll('.tbtn').forEach(b => b.classList.remove('on'));
  document.getElementById(group + '-' + id).classList.add('on');
  btn.classList.add('on');
}

/* ── Scroll reveal ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('shown'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
