document.addEventListener('DOMContentLoaded', function(){
  const input = document.getElementById('menu-search');
  if (!input) return;

  function getCards(){
    const menuCards = Array.from(document.querySelectorAll('#menu .menu-card'));
    const beverageCards = Array.from(document.querySelectorAll('#beverages .menu-card'));
    return menuCards.concat(beverageCards);
  }

  function matchText(card, term){
    const t = term.trim().toLowerCase();
    const name = (card.querySelector('h3')?.textContent || '').toLowerCase();
    const en = (card.querySelector('.p-6 .text-xs')?.textContent || '').toLowerCase();
    return t && (name.includes(t) || en.includes(t));
  }

  function ensureSectionVisible(card){
    const content = card.closest('.menu-category-content');
    if (content && content.classList.contains('collapsed')) {
      content.classList.remove('collapsed');
      content.style.maxHeight = '';
      const cid = content.id?.replace('content-','');
      if (typeof window.categoryStates === 'object' && cid) { window.categoryStates[cid] = true; }
    }
    const beveragesSection = document.getElementById('beverages');
    if (beveragesSection && beveragesSection.contains(card)) {
      beveragesSection.classList.remove('hidden');
      beveragesSection.style.display = '';
      beveragesSection.style.visibility = 'visible';
    }
  }

  function highlightAndCenter(card){
    ensureStyle();
    document.querySelectorAll('.search-highlight').forEach(el=>el.classList.remove('search-highlight'));
    card.classList.add('search-highlight');
    const headerOffset = 80;
    const rect = card.getBoundingClientRect();
    const target = window.pageYOffset + rect.top - headerOffset - (window.innerHeight/2 - rect.height/2);
    window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
    setTimeout(()=>{ card.classList.remove('search-highlight'); }, 3500);
  }

  function ensureStyle(){
    if (document.getElementById('search-highlight-style')) return;
    const style = document.createElement('style');
    style.id = 'search-highlight-style';
    style.textContent = `
      @keyframes searchGlow { 0%{ box-shadow: 0 0 0 0 rgba(212,175,55,.0); } 10%{ box-shadow: 0 0 20px 6px rgba(212,175,55,.6); } 90%{ box-shadow: 0 0 16px 4px rgba(212,175,55,.4); } 100%{ box-shadow: 0 0 0 0 rgba(212,175,55,0); } }
      .search-highlight { animation: searchGlow 3.5s ease-in-out; border-radius: 1rem; }
    `;
    document.head.appendChild(style);
  }

  function doSearch(){
    const term = input.value.trim();
    if (!term) return;
    const cards = getCards();
    const match = cards.find(c => matchText(c, term));
    if (!match) {
      const oldPh = input.placeholder;
      input.value = '';
      input.placeholder = '未找到';
      setTimeout(()=>{ input.placeholder = oldPh; }, 1500);
      return;
    }
    ensureSectionVisible(match);
    highlightAndCenter(match);
  }

  input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); doSearch(); } });
  const icon = input.parentElement?.querySelector('span');
  if (icon) { icon.addEventListener('click', e => { e.preventDefault(); doSearch(); }); }
});
