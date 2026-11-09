const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
// All content comes from data.js, which only I edit, but escape anyway.
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

$('#yr').textContent = new Date().getFullYear();

// ---------- Theme ----------
const root = document.documentElement;
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
const isDark = () => (root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) === 'dark';
$('#theme').addEventListener('click', () => {
  root.dataset.theme = isDark() ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
});

// ---------- Modal ----------
const modal = $('#modal');
const mBody = $('#m-body');
let lastFocus = null;

function openModal(html) {
  lastFocus = document.activeElement;
  mBody.innerHTML = html;
  modal.showModal();
  modal.scrollTop = 0;
}
$('#m-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); }); // backdrop click
modal.addEventListener('close', () => { if (lastFocus) lastFocus.focus(); });

const tools = list => list && list.length
  ? `<div class="tags">${list.map(t => `<span>${esc(t)}</span>`).join('')}</div>` : '';

function experienceHTML(x) {
  return `
    <p class="kicker">${esc(x.dates)} · ${esc(x.place)}</p>
    <h3 id="m-title">${esc(x.role)}</h3>
    <p class="sub">${esc(x.org)}</p>
    ${x.metrics.length ? `<ul class="metrics">${x.metrics.map(m => `<li>${esc(m)}</li>`).join('')}</ul>` : ''}
    ${x.sections.map(s => `<h4>${esc(s.h)}</h4><ul>${s.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`).join('')}
    ${tools(x.tools)}`;
}

function projectHTML(p) {
  return `
    <p class="kicker">${esc(p.sub)}</p>
    <h3 id="m-title">${esc(p.title)}</h3>
    <p class="overview">${esc(p.overview)}</p>
    <h4>What I did</h4>
    <ul>${p.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
    ${tools(p.tools)}`;
}

// ---------- Experience rows ----------
const expList = $('#exp-list');
EXPERIENCE.forEach(x => {
  const b = el('button', 'row');
  b.type = 'button';
  b.innerHTML = `
    <span class="when">${esc(x.dates)}</span>
    <span class="what">
      <strong>${esc(x.role)}</strong><em>${esc(x.org)}</em>
      <span class="blurb">${esc(x.summary)}</span>
    </span>
    <span class="more">Details <i aria-hidden="true">→</i></span>`;
  b.addEventListener('click', () => openModal(experienceHTML(x)));
  expList.appendChild(b);
});

// ---------- Projects ----------
const grid = $('#proj-grid');
const cards = PROJECTS.map(p => {
  const b = el('button', 'card');
  b.type = 'button';
  b.dataset.t = p.t.join(' ');
  b.innerHTML = `
    <span class="card-sub">${esc(p.sub)}</span>
    <strong>${esc(p.title)}</strong>
    <span class="blurb">${esc(p.summary)}</span>
    <span class="more">View project <i aria-hidden="true">→</i></span>`;
  b.addEventListener('click', () => openModal(projectHTML(p)));
  grid.appendChild(b);
  return b;
});

const chips = document.querySelectorAll('.chip');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.toggle('active', c === chip));
  const f = chip.dataset.f;
  cards.forEach(c => { c.hidden = f !== 'all' && !c.dataset.t.split(' ').includes(f); });
}));

// ---------- Skills ----------
$('#skill-list').innerHTML = SKILLS.map(s =>
  `<div><h3>${esc(s.h)}</h3><div class="tags">${s.p.map(t => `<span>${esc(t)}</span>`).join('')}</div></div>`).join('');

// ---------- Scroll reveal ----------
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.classList.add('js-reveal');
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.08 });
  reveals.forEach(r => io.observe(r));
}
