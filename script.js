document.getElementById('yr').textContent = new Date().getFullYear();

// Theme toggle (remembered when storage is available)
const root = document.documentElement;
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
document.getElementById('theme').addEventListener('click', () => {
  const dark = getComputedStyle(root).getPropertyValue('--bg').trim() === '#0b1730';
  root.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
});

// Project filters
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.toggle('active', c === chip));
  const f = chip.dataset.f;
  cards.forEach(card => { card.hidden = f !== 'all' && !card.dataset.t.split(' ').includes(f); });
}));
