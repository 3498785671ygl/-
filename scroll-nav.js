// 导航栏滚动显示/隐藏功能
const headerController = {
  header: null,
  lastScrollTop: 0,
  isHidden: false,
  
  init() {
    this.header = document.querySelector('header');
    if (!this.header) return;
    
    // 添加CSS类用于动画
    if (!document.getElementById('header-scroll-style')) {
      const style = document.createElement('style');
      style.id = 'header-scroll-style';
      style.textContent = `
        header {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
        }
        header.header-hidden {
          transform: translateY(-100%);
          opacity: 0;
        }
      `;
      document.head.appendChild(style);
    }
    
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
  },
  
  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingDown = scrollTop > this.lastScrollTop;
    
    if (scrollTop === 0) {
      // 在页面顶部，始终显示
      if (this.isHidden) this.show();
    } else if (isScrollingDown && !this.isHidden) {
      // 向下滚动，隐藏（全页面生效）
      this.hide();
    } else if (!isScrollingDown && this.isHidden) {
      // 向上滚动，显示（全页面生效）
      this.show();
    }
    
    this.lastScrollTop = scrollTop;
  },
  
  hide() {
    if (!this.isHidden && this.header) {
      this.header.classList.add('header-hidden');
      this.isHidden = true;
    }
  },
  
  show() {
    if (this.isHidden && this.header) {
      this.header.classList.remove('header-hidden');
      this.isHidden = false;
    }
  }
};

// 增强搜索功能支持多语言
const multiLangSearch = {
  init() {
    const input = document.getElementById('menu-search');
    if (!input) return;
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.performSearch();
      }
    });
    
    const icon = input.parentElement?.querySelector('span');
    if (icon) {
      icon.addEventListener('click', (e) => {
        e.preventDefault();
        this.performSearch();
      });
    }
  },
  
  getCards() {
    const menuCards = Array.from(document.querySelectorAll('#menu .menu-card'));
    const beverageCards = Array.from(document.querySelectorAll('#beverages .menu-card'));
    return menuCards.concat(beverageCards);
  },
  
  matchText(card, term) {
    const t = term.trim().toLowerCase();
    if (!t) return false;
    
    // 获取中文名称
    const nameZh = (card.querySelector('h3')?.textContent || '').toLowerCase();
    // 获取英文名称
    const nameEn = (card.querySelector('.text-xs.text-xs')?.textContent || '').toLowerCase();
    
    return nameZh.includes(t) || nameEn.includes(t);
  },
  
  ensureSectionVisible(card) {
    const content = card.closest('.menu-category-content');
    if (content && content.classList.contains('collapsed')) {
      content.classList.remove('collapsed');
      content.style.maxHeight = '';
      const cid = content.id?.replace('content-', '');
      if (typeof window.categoryStates === 'object' && cid) {
        window.categoryStates[cid] = true;
      }
    }
    
    const beveragesSection = document.getElementById('beverages');
    if (beveragesSection && beveragesSection.contains(card)) {
      beveragesSection.classList.remove('hidden');
      beveragesSection.style.display = '';
      beveragesSection.style.visibility = 'visible';
    }
  },
  
  highlightAndCenter(card) {
    this.ensureStyle();
    document.querySelectorAll('.search-highlight').forEach(el => {
      el.classList.remove('search-highlight');
    });
    
    card.classList.add('search-highlight');
    
    const headerOffset = 100; // 考虑隐藏的header高度
    const rect = card.getBoundingClientRect();
    const target = window.pageYOffset + rect.top - headerOffset - (window.innerHeight / 2 - rect.height / 2);
    
    window.scrollTo({
      top: Math.max(0, target),
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      card.classList.remove('search-highlight');
    }, 3500);
  },
  
  ensureStyle() {
    if (document.getElementById('search-highlight-style')) return;
    
    const style = document.createElement('style');
    style.id = 'search-highlight-style';
    style.textContent = `
      @keyframes searchGlow {
        0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        10% { box-shadow: 0 0 20px 6px rgba(212, 175, 55, 0.6); }
        90% { box-shadow: 0 0 16px 4px rgba(212, 175, 55, 0.4); }
        100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
      }
      .search-highlight {
        animation: searchGlow 3.5s ease-in-out;
        border-radius: 1rem;
      }
    `;
    document.head.appendChild(style);
  },
  
  performSearch() {
    const input = document.getElementById('menu-search');
    if (!input) return;
    
    const term = input.value.trim();
    if (!term) return;
    
    const cards = this.getCards();
    const matches = cards.filter(c => this.matchText(c, term));
    
    if (matches.length === 0) {
      const oldPh = input.placeholder;
      input.value = '';
      input.placeholder = i18n.t('searchNotFound');
      setTimeout(() => {
        input.placeholder = oldPh;
      }, 1500);
      return;
    }
    
    // 找到距离视口最近的菜品
    let closestCard = matches[0];
    let minDistance = Math.abs(matches[0].getBoundingClientRect().top);
    
    matches.forEach(card => {
      const distance = Math.abs(card.getBoundingClientRect().top);
      if (distance < minDistance) {
        minDistance = distance;
        closestCard = card;
      }
    });
    
    this.ensureSectionVisible(closestCard);
    this.highlightAndCenter(closestCard);
  }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 初始化导航栏滚动控制
  headerController.init();
  
  // 初始化多语言搜索
  multiLangSearch.init();
});
