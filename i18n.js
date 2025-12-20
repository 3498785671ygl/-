// 多语言配置和管理系统 - 完整语言覆盖版本
const i18n = {
  currentLang: localStorage.getItem('lang') || 'zh',
  
  messages: {
    zh: {
      // 导航栏
      menuNav: '菜单',
      galleryNav: '图集',
      aboutNav: '关于',
      reserveNav: '预约',
      contactNav: '联系',
      
      // Hero
      heroTitle: '颐和堂 — 精致中式私厨',
      heroDesc: '在这里，每一道菜都讲述一个来自东方的故事。甄选时令食材，配以现代烹饪技法，营造温暖而高雅的用餐体验。',
      heroBtn1: '立即预约',
      heroBtn2: '查看菜单',
      openingHours: '营业时间：周一 - 周日 11:30 — 22:00',
      openingHoursLabel: '营业时间：',
      addressLabel: '地址：',
      address: '地址：果燃省 果燃市 对抗路 17 号',
      
      // Menu
      menuTitle: '我们的菜单',
      menuDesc: '甄选当季食材，结合传统手法与现代演绎，呈现多款招牌与创新菜式。',
      filterAll: '全部',
      filterAppetizer: '前菜',
      filterMain: '主菜',
      filterSignature: '招牌菜',
      filterBeverage: '饮品与酒水',
      
      // Category
      appetizersTitle: '前菜',
      appetizersSubtitle: 'Appetizers',
      mainsTitle: '主菜',
      mainsSubtitle: 'Main Courses',
      signatureTitle: '招牌菜',
      signatureSubtitle: 'Signature Dishes',
      beverageTitle: '饮品与酒水',
      beverageDesc: '精选茶饮与佳酿，为您的用餐体验增添雅致与韵味',
      
      // Gallery
      galleryTitle: '图集',
      galleryDesc: '记录每一道菜品的精致瞬间，感受中式料理的艺术之美',
      
      // About
      aboutLabel: '关于我们',
      aboutTitle: '颐和堂的故事',
      aboutP1: '在1997年的果燃省果燃市，颐和堂创立于对传统中餐文化的深度理解与现代烹饪理念的创新融合。我们相信，每一道菜都承载着深厚的文化底蕴，每一次用餐都是一次与东方美学的对话。',
      aboutP2: '我们甄选全球优质食材，结合传统烹饪技法与现代呈现方式，致力于为每一位客人提供精致而温暖的中式私厨体验。在这里，传统不再是束缚，而是创新的源泉。',
      aboutP3: '从食材的挑选到菜品的呈现，每一个细节都经过精心打磨。我们追求的不只是味觉的满足，更是对中式料理艺术的全新诠释。',
      aboutExp: '年经验',
      aboutDishes: '道菜品',
      aboutCustomers: '满意客户',
      
      // Contact
      contactTitle: '联系我们',
      contactDesc: '欢迎随时与我们取得联系',
      contactPhone: '电话',
      contactEmail: '邮箱',
      contactAddress: '地址',
      
      // Reserve
      reserveTitle: '预约用餐',
      reserveDesc: '提前预约，享受专属服务与精致用餐体验',
      reserveName: '姓名',
      reservePhone: '联系电话',
      reserveDate: '用餐日期',
      reserveGuests: '用餐人数',
      reserveRequirements: '特殊要求',
      reserveSubmit: '提交预约',
      reserveNamePlaceholder: '请输入您的姓名',
      reservePhonePlaceholder: '请输入联系电话',
      reserveGuestsPlaceholder: '请选择人数',
      reserveGuest1: '1人',
      reserveGuest2: '2人',
      reserveGuest34: '3-4人',
      reserveGuest56: '5-6人',
      reserveGuest7Plus: '7人以上',
      reserveReqPlaceholder: '如有特殊要求或备注，请在此填写',
      reserveSuccess: '预约成功！感谢您的预约，我们将尽快与您联系。',
      reserveError: '预约失败，请重试',
      reserveConfirm: '确定',
      
      // Cart
      cart: '购物车',
      cartTitle: '已选菜品',
      cartEmpty: '购物车为空',
      cartClear: '清空',
      cartClose: '关闭',
      
      // Search
      searchPlaceholder: '搜索菜品…',
      searchNotFound: '未找到',
      
      // Language
      langZh: '中',
      langEn: 'EN',
    },
    en: {
      // Navigation
      menuNav: 'Menu',
      galleryNav: 'Gallery',
      aboutNav: 'About',
      reserveNav: 'Reserve',
      contactNav: 'Contact',
      
      // Hero
      heroTitle: 'Yihe Tang — Exquisite Chinese Cuisine',
      heroDesc: 'Here, every dish tells a story from the East. We carefully select seasonal ingredients, blending traditional techniques with modern culinary innovation, to create a warm and elegant dining experience.',
      heroBtn1: 'Reserve Now',
      heroBtn2: 'View Menu',
      openingHours: 'Hours: Mon-Sun 11:30 AM — 10:00 PM',
      openingHoursLabel: 'Hours: ',
      addressLabel: 'Address: ',
      address: 'Address: 17 Dialogue Road, Guoran City, Guoran Province',
      
      // Menu
      menuTitle: 'Our Menu',
      menuDesc: 'Carefully selected seasonal ingredients, combining traditional techniques with modern interpretations, presenting signature and innovative dishes.',
      filterAll: 'All',
      filterAppetizer: 'Appetizers',
      filterMain: 'Main',
      filterSignature: 'Signature',
      filterBeverage: 'Beverages',
      
      // Category
      appetizersTitle: 'Appetizers',
      appetizersSubtitle: 'Appetizers',
      mainsTitle: 'Main Courses',
      mainsSubtitle: 'Main Courses',
      signatureTitle: 'Signature Dishes',
      signatureSubtitle: 'Signature Dishes',
      beverageTitle: 'Beverages & Wines',
      beverageDesc: 'Selected teas and fine wines to add elegance and charm to your dining experience.',
      
      // Gallery
      galleryTitle: 'Gallery',
      galleryDesc: 'Capturing the refined moments of each dish, experiencing the artistry of Chinese cuisine.',
      
      // About
      aboutLabel: 'About Us',
      aboutTitle: 'Yihe Tang Story',
      aboutP1: 'Founded in 1997 in Guoran City, Guoran Province, Yihe Tang was born from a deep understanding of traditional Chinese culinary culture and an innovative fusion with modern cooking philosophy. We believe that every dish carries profound cultural heritage, and every dining experience is a dialogue with Eastern aesthetics.',
      aboutP2: 'We carefully select premium ingredients from around the world, combining traditional cooking techniques with modern presentation methods, dedicated to providing each guest with an exquisite and warm Chinese fine dining experience. Here, tradition is no longer a constraint but a source of innovation.',
      aboutP3: 'From ingredient selection to dish presentation, every detail is meticulously crafted. We pursue not just culinary satisfaction, but a new interpretation of Chinese cuisine as an art form.',
      aboutExp: 'Years Experience',
      aboutDishes: 'Dishes',
      aboutCustomers: 'Satisfied Customers',
      
      // Contact
      contactTitle: 'Contact Us',
      contactDesc: 'Feel free to reach out to us anytime',
      contactPhone: 'Phone',
      contactEmail: 'Email',
      contactAddress: 'Address',
      
      // Reserve
      reserveTitle: 'Make a Reservation',
      reserveDesc: 'Reserve in advance to enjoy exclusive service and exquisite dining experience',
      reserveName: 'Name',
      reservePhone: 'Phone',
      reserveDate: 'Date',
      reserveGuests: 'Guests',
      reserveRequirements: 'Special Requests',
      reserveSubmit: 'Submit',
      reserveNamePlaceholder: 'Please enter your name',
      reservePhonePlaceholder: 'Please enter your phone number',
      reserveGuestsPlaceholder: 'Please select number of guests',
      reserveGuest1: '1 Guest',
      reserveGuest2: '2 Guests',
      reserveGuest34: '3-4 Guests',
      reserveGuest56: '5-6 Guests',
      reserveGuest7Plus: '7+ Guests',
      reserveReqPlaceholder: 'Please enter any special requests or notes',
      reserveSuccess: 'Reservation successful! Thank you for your reservation, we will contact you shortly.',
      reserveError: 'Reservation failed, please try again',
      reserveConfirm: 'OK',
      
      // Cart
      cart: 'Cart',
      cartTitle: 'Selected Dishes',
      cartEmpty: 'Cart is empty',
      cartClear: 'Clear',
      cartClose: 'Close',
      
      // Search
      searchPlaceholder: 'Search dishes…',
      searchNotFound: 'Not found',
      
      // Language
      langZh: '中',
      langEn: 'EN',
    }
  },
  
  t(key) {
    return this.messages[this.currentLang][key] || key;
  },
  
  setLang(lang) {
    if (lang === this.currentLang) return;
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.updatePageContent();
    this.updateSearch();
  },
  
  updatePageContent() {
    // 更新所有带data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
        el.placeholder = text;
      } else if (el.tagName === 'OPTION') {
        el.textContent = text;
      } else {
        el.textContent = text;
      }
    });
    
    // 更新关于我们段落内容
    const aboutP1 = document.getElementById('aboutP1');
    const aboutP2 = document.getElementById('aboutP2');
    const aboutP3 = document.getElementById('aboutP3');
    if (aboutP1) aboutP1.textContent = this.t('aboutP1');
    if (aboutP2) aboutP2.textContent = this.t('aboutP2');
    if (aboutP3) aboutP3.textContent = this.t('aboutP3');
    
    // 更新营业时间和地址文本（如果分离了标签和内容）
    const openingHourSpan = document.getElementById('openingHourSpan');
    const addressSpan = document.getElementById('addressSpan');
    if (openingHourSpan) openingHourSpan.textContent = this.t('openingHours');
    if (addressSpan) addressSpan.textContent = this.t('address');
    
    // 更新统计数字的标签
    const expLabel = document.getElementById('expLabel');
    const dishesLabel = document.getElementById('dishesLabel');
    const customersLabel = document.getElementById('customersLabel');
    if (expLabel) expLabel.textContent = this.t('aboutExp');
    if (dishesLabel) dishesLabel.textContent = this.t('aboutDishes');
    if (customersLabel) customersLabel.textContent = this.t('aboutCustomers');
    
    // 更新预约成功弹窗文本
    const reservationModalText = document.getElementById('reservationModalText');
    if (reservationModalText) {
      reservationModalText.textContent = this.t('reserveSuccess');
    }
    const reservationModalBtn = document.getElementById('reservationModalBtn');
    if (reservationModalBtn) {
      reservationModalBtn.textContent = this.t('reserveConfirm');
    }
    
    // 更新语言按钮状态
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.textContent = this.currentLang === 'zh' ? 'EN' : '中';
    }
  },
  
  updateSearch() {
    const input = document.getElementById('menu-search');
    if (input) {
      input.placeholder = this.t('searchPlaceholder');
    }
  },
  
  init() {
    this.setupLanguageButton();
    this.updatePageContent();
  },
  
  setupLanguageButton() {
    let langBtn = document.getElementById('lang-toggle-btn');
    if (!langBtn) {
      langBtn = document.createElement('button');
      langBtn.id = 'lang-toggle-btn';
      langBtn.className = 'nav-link inline-flex items-center gap-1 px-3 py-2 rounded-full hover:bg-[#D4AF37]/10 transition-colors';
      langBtn.title = '切换语言 / Toggle Language';
      langBtn.style.fontSize = '0.85rem';
      langBtn.style.fontWeight = '500';
      langBtn.style.letterSpacing = '0.05em';
      langBtn.textContent = this.currentLang === 'zh' ? 'EN' : '中';
      
      langBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.setLang(this.currentLang === 'zh' ? 'en' : 'zh');
      });
      
      // 添加到导航栏，在购物车按钮前
      const nav = document.querySelector('nav');
      if (nav) {
        const wishlistBtn = nav.querySelector('#wishlist-button');
        if (wishlistBtn) {
          nav.insertBefore(langBtn, wishlistBtn);
        } else {
          nav.appendChild(langBtn);
        }
      }
    }
  }
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  i18n.init();
});
