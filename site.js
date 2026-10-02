const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.dataset.open = String(open);
  menu.querySelector('span').textContent = open ? '−' : '+';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  nav.dataset.open = 'false';
  menu.querySelector('span').textContent = '+';
}));
document.querySelectorAll('[data-tab-group]').forEach(group => {
  const tabs = [...group.querySelectorAll(':scope > .tab-list [role="tab"]')];
  const select = tab => {
    tabs.forEach(candidate => {
      const chosen = candidate === tab;
      candidate.setAttribute('aria-selected', String(chosen));
      candidate.tabIndex = chosen ? 0 : -1;
      document.getElementById(candidate.getAttribute('aria-controls')).hidden = !chosen;
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault(); select(tabs[next]); tabs[next].focus();
      }
    });
  });
});
const dialog = document.querySelector('.figure-dialog');
document.querySelectorAll('.figure-expand').forEach(button => {
  button.addEventListener('click', () => {
    const figure = button.closest('figure');
    const image = button.querySelector('img');
    const expanded = document.querySelector('#expanded-figure');
    expanded.src = image.src; expanded.alt = image.alt;
    document.querySelector('#expanded-caption').textContent = figure.querySelector('figcaption')?.textContent || '';
    document.querySelector('#figure-download').href = image.src;
    dialog.showModal();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
document.querySelector('.copy-citation').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(document.querySelector('#bibtex').textContent);
    status.textContent = 'Citation copied.';
  } catch {
    const selection = window.getSelection(); const range = document.createRange();
    range.selectNodeContents(document.querySelector('#bibtex'));
    selection.removeAllRanges(); selection.addRange(range);
    status.textContent = 'Citation selected. Use your device’s copy command.';
  }
});
