function camelProp(name) {
  return String(name || "").replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function generateCSS(display, groups) {
  const lines = ['.container {', `  display: ${display};`];
  for (const group of groups) {
    if (group.css && group.value) lines.push(`  ${group.css}: ${group.value};`);
  }
  lines.push('}');
  return lines.join('\n');
}

export function applyPlayground(root = document) {
  const playground = root.querySelector('[data-playground]');
  if (!playground) return;

  const stage = playground.querySelector('[data-stage]');
  const output = playground.querySelector('[data-output]');
  if (!stage || !output) return;

  const display = playground.dataset.display || 'flex';
  const groups = [...playground.querySelectorAll('[data-group]')].map((el) => ({
    el,
    key: el.dataset.group,
    prop: el.dataset.prop || camelProp(el.dataset.css),
    css: el.dataset.css,
    value: el.dataset.default || el.querySelector('.active')?.dataset.value || '',
  }));

  function render() {
    stage.style.display = display;
    for (const group of groups) {
      if (group.prop) stage.style[group.prop] = group.value;
    }
    output.textContent = generateCSS(display, groups);
  }

  for (const group of groups) {
    group.el.addEventListener('click', (event) => {
      const button = event.target.closest('[data-value]');
      if (!button || !group.el.contains(button)) return;
      group.value = button.dataset.value;
      group.el.querySelectorAll('[data-value]').forEach((pill) => {
        const active = pill === button;
        pill.classList.toggle('active', active);
        pill.setAttribute('aria-pressed', String(active));
      });
      render();
    });
  }

  render();
}

if (typeof document !== 'undefined') {
  applyPlayground();
}
