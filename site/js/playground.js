export function generateCSS(state) {
  const lines = ['.container {', '  display: flex;'];
  if (state.direction !== 'row') lines.push(`  flex-direction: ${state.direction};`);
  if (state.wrap !== 'nowrap') lines.push(`  flex-wrap: ${state.wrap};`);
  if (state.justify !== 'flex-start') lines.push(`  justify-content: ${state.justify};`);
  if (state.alignItems !== 'stretch') lines.push(`  align-items: ${state.alignItems};`);
  if (state.alignContent !== 'normal') lines.push(`  align-content: ${state.alignContent};`);
  if (state.gap > 0) lines.push(`  gap: ${state.gap}px;`);
  lines.push('}');
  return lines.join('\n');
}

export function applyPlayground(root = document) {
  const stage = root.querySelector('[data-flex-stage]');
  const output = root.querySelector('[data-flex-output]');
  const gapSlider = root.querySelector('#gap-slider');
  const gapValue = root.querySelector('.gap-value');
  if (!stage || !output) return;

  const state = {
    direction: 'row',
    wrap: 'nowrap',
    justify: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'normal',
    gap: 0,
  };

  function render() {
    stage.style.flexDirection = state.direction;
    stage.style.flexWrap = state.wrap;
    stage.style.justifyContent = state.justify;
    stage.style.alignItems = state.alignItems;
    stage.style.alignContent = state.alignContent;
    stage.style.gap = `${state.gap}px`;
    output.textContent = generateCSS(state);
    if (gapValue) gapValue.textContent = `${state.gap}px`;
  }

  root.querySelectorAll('[data-group]').forEach((group) => {
    group.addEventListener('click', (event) => {
      const button = event.target.closest('[data-value]');
      if (!button || !group.contains(button)) return;
      state[group.dataset.group] = button.dataset.value;
      group.querySelectorAll('[data-value]').forEach((pill) => {
        const active = pill === button;
        pill.classList.toggle('active', active);
        pill.setAttribute('aria-pressed', String(active));
      });
      render();
    });
  });

  if (gapSlider) {
    gapSlider.addEventListener('input', () => {
      state.gap = Number(gapSlider.value);
      render();
    });
  }

  render();
}

if (typeof document !== 'undefined') {
  applyPlayground();
}
