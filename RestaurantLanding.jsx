import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ============================================
 * 现代精品中餐厅单页面网站
 * ============================================
 * 
 * 【要替换的资源列表】
 * - /assets/logo.svg - 餐厅 Logo（建议：SVG 格式，透明背景）
 * - /assets/hero.jpg - Hero 区域主图（建议：1920x1080，高质量食物摆盘）
 * - /assets/dish-1.jpg 到 dish-6.jpg - 菜品图片（建议：800x600，正方形或 4:3）
 * - /assets/gallery-1.jpg 到 gallery-6.jpg - 画廊图片（建议：1200x800）
 * - /assets/chef.jpg - 主厨照片（建议：800x1000，竖版）
 * 
 * 【可视化规范】
 * 颜色：
 * - 主色：深红 #8B0000 (primary-red)
 * - 辅色：墨黑 #0B0B0B (primary-black)
 * - 背景：象牙白 #F8F4F0 (ivory-bg)
 * - 金色点缀：#D4AF37 (gold-accent)
 * - 文字灰：#4A4A4A (text-gray)
 * 
 * 字体：
 * - 标题：serif 字体（如：Playfair Display, Noto Serif SC）
 * - 正文：sans-serif 字体（如：Inter, Noto Sans SC）
 * - 字号：标题 4xl-5xl，副标题 2xl-3xl，正文 base
 * 
 * 间距：
 * - 容器最大宽度：max-w-7xl (1280px)
 * - 内边距：px-6 (24px) 移动端，px-8 (32px) 桌面端
 * - 区块间距：py-12 (48px) 到 py-24 (96px)
 * - 元素间距：gap-4 (16px) 到 gap-8 (32px)
 * 
 * Breakpoints：
 * - sm: 640px
 * - md: 768px
 * - lg: 1024px
 */

// ============================================
// 内容数据（可替换为 CMS 数据）
// ============================================
const restaurantData = {
  name: '颐和堂',
  subtitle: '中式私厨',
  tagline: '现代中餐 · 致礼东方',
  hero: {
    label: '传统与匠心',
    title: '颐和堂 — 精致中式私厨',
    description: '在这里，每一道菜都讲述一个来自东方的故事。甄选时令食材，配以现代烹饪技法，营造温暖而高雅的用餐体验。',
    ctaPrimary: '立即预约',
    ctaSecondary: '查看菜单',
    hours: '周一 - 周日 11:30 — 22:00',
    address: '示例市 凤凰路 88 号',
  },
  menu: {
    title: '我们的菜单',
    description: '甄选当季食材，结合传统手法与现代演绎，呈现多款招牌与创新菜式。',
    dishes: [
      {
        title: '脆皮烤乳猪',
        description: '外皮酥脆，肉质鲜嫩，配以秘制酱汁',
        price: '¥298',
        image: '/assets/dish-1.jpg',
        category: '招牌',
      },
      {
        title: '黄酒焖海参',
        description: '慢火入味，口感滑嫩，营养丰富',
        price: '¥198',
        image: '/assets/dish-2.jpg',
        category: '海鲜',
      },
      {
        title: '龙井虾仁',
        description: '清新香气，爽滑弹牙，茶香四溢',
        price: '¥168',
        image: '/assets/dish-3.jpg',
        category: '清淡',
      },
      {
        title: '东坡肉',
        description: '肥而不腻，入口即化，传统经典',
        price: '¥128',
        image: '/assets/dish-4.jpg',
        category: '招牌',
      },
      {
        title: '清蒸石斑鱼',
        description: '鲜嫩原味，配以特调豉油',
        price: '¥228',
        image: '/assets/dish-5.jpg',
        category: '海鲜',
      },
      {
        title: '桂花糖藕',
        description: '香甜软糯，江南风味',
        price: '¥68',
        image: '/assets/dish-6.jpg',
        category: '甜品',
      },
    ],
  },
  gallery: {
    title: '用餐环境',
    description: '精心设计的空间，融合传统与现代美学',
    images: [
      { src: '/assets/gallery-1.jpg', alt: '餐厅主厅' },
      { src: '/assets/gallery-2.jpg', alt: '包间环境' },
      { src: '/assets/gallery-3.jpg', alt: '雅座区域' },
      { src: '/assets/gallery-4.jpg', alt: '吧台设计' },
      { src: '/assets/gallery-5.jpg', alt: '装饰细节' },
      { src: '/assets/gallery-6.jpg', alt: '户外露台' },
    ],
  },
  about: {
    title: '关于颐和堂',
    description: '颐和堂创立于 2018 年，致力于将传统中餐与现代烹饪理念相结合。我们的主厨拥有超过 20 年的烹饪经验，曾在多家米其林餐厅任职。',
    chef: {
      name: '张师傅',
      role: '行政主厨',
      bio: '专注中式料理 20 余年，擅长将传统技法与现代创新融合',
      image: '/assets/chef.jpg',
    },
  },
  contact: {
    phone: '+86 138-0000-0000',
    email: 'reservations@yihetang.com',
    address: '示例市 凤凰路 88 号',
    hours: '周一 - 周日 11:30 — 22:00',
  },
};

// ============================================
// 主组件
// ============================================
export default function ChineseRestaurantLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('全部');

  // 获取所有分类
  const categories = ['全部', ...new Set(restaurantData.menu.dishes.map(d => d.category))];

  // 筛选菜品
  const filteredDishes = selectedCategory === '全部'
    ? restaurantData.menu.dishes
    : restaurantData.menu.dishes.filter(d => d.category === selectedCategory);

  // 平滑滚动
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F4F0] text-[#0B0B0B] antialiased leading-relaxed">
      {/* ============================================
          HEADER
          ============================================ */}
      <header className="sticky top-0 z-50 bg-[#F8F4F0]/95 backdrop-blur-sm border-b border-[#0B0B0B]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/assets/logo.svg" 
              alt={`${restaurantData.name} 标志`} 
              className="h-12 w-auto" 
              loading="eager"
            />
            <div>
              <h1 className="text-base font-semibold tracking-tight">
                {restaurantData.name} · {restaurantData.subtitle}
              </h1>
              <p className="text-xs text-[#4A4A4A]">{restaurantData.tagline}</p>
            </div>
          </div>
          
          <nav aria-label="主导航" className="hidden md:flex gap-8 text-sm">
            <a 
              href="#menu" 
              onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}
              className="hover:text-[#8B0000] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B0000] rounded px-2 py-1"
            >
              菜单
            </a>
            <a 
              href="#gallery" 
              onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}
              className="hover:text-[#8B0000] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B0000] rounded px-2 py-1"
            >
              画廊
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className="hover:text-[#8B0000] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B0000] rounded px-2 py-1"
            >
              关于
            </a>
            <a 
              href="#reserve" 
              onClick={(e) => { e.preventDefault(); scrollToSection('reserve'); }}
              className="hover:text-[#8B0000] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B0000] rounded px-2 py-1"
            >
              预约
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="hover:text-[#8B0000] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B0000] rounded px-2 py-1"
            >
              联系
            </a>
          </nav>

          {/* 移动端菜单按钮 */}
          <button
            aria-label="打开菜单"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-[#8B0000] rounded"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#0B0B0B]/10 bg-[#F8F4F0]"
            aria-label="移动端导航"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
              {['菜单', '画廊', '关于', '预约', '联系'].map((item) => (
                <a
                  key={item}
                  href={`#${item === '菜单' ? 'menu' : item === '画廊' ? 'gallery' : item === '关于' ? 'about' : item === '预约' ? 'reserve' : 'contact'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item === '菜单' ? 'menu' : item === '画廊' ? 'gallery' : item === '关于' ? 'about' : item === '预约' ? 'reserve' : 'contact');
                  }}
                  className="block py-2 hover:text-[#8B0000] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B0000] rounded px-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </header>

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="z-10 space-y-6"
          >
            <p className="text-sm uppercase tracking-widest text-[#8B0000] font-medium">
              {restaurantData.hero.label}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-[#0B0B0B]">
              {restaurantData.hero.title}
            </h2>
            <p className="text-base md:text-lg text-[#4A4A4A] max-w-xl leading-relaxed">
              {restaurantData.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#reserve"
                onClick={(e) => { e.preventDefault(); scrollToSection('reserve'); }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#8B0000] text-white font-medium shadow-lg hover:bg-[#700000] hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#8B0000]/50"
              >
                {restaurantData.hero.ctaPrimary}
              </a>
              <a
                href="#menu"
                onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#0B0B0B]/20 text-[#0B0B0B] font-medium hover:border-[#8B0000] hover:text-[#8B0000] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#8B0000]/50"
              >
                {restaurantData.hero.ctaSecondary}
              </a>
            </div>

            <div className="pt-6 space-y-2 text-sm text-[#4A4A4A]">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>营业时间：{restaurantData.hero.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>地址：{restaurantData.hero.address}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/assets/hero.jpg"
              alt="颐和堂招牌菜摆盘"
              className="w-full h-[400px] md:h-[500px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/20 to-transparent" aria-hidden="true" />
          </motion.div>
        </div>

        {/* 装饰性元素 */}
        <div className="absolute -right-32 -bottom-32 w-96 h-96 opacity-5" aria-hidden="true">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="#8B0000" />
          </svg>
        </div>
      </section>

      {/* ============================================
          MENU SECTION
          ============================================ */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#0B0B0B]">
              {restaurantData.menu.title}
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
              {restaurantData.menu.description}
            </p>
          </motion.div>

          {/* 分类筛选 */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8B0000] ${
                  selectedCategory === category
                    ? 'bg-[#8B0000] text-white shadow-lg'
                    : 'bg-[#F8F4F0] text-[#4A4A4A] hover:bg-[#8B0000]/10'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 菜品网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F8F4F0] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0B0B0B] px-3 py-1 rounded-full text-xs font-semibold">
                    {dish.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-[#0B0B0B]">{dish.title}</h3>
                    <span className="text-lg font-bold text-[#8B0000] ml-4">{dish.price}</span>
                  </div>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">{dish.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          GALLERY SECTION
          ============================================ */}
      <section id="gallery" className="py-24 bg-[#F8F4F0]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#0B0B0B]">
              {restaurantData.gallery.title}
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
              {restaurantData.gallery.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantData.gallery.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT SECTION
          ============================================ */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[#0B0B0B]">
                {restaurantData.about.title}
              </h2>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8">
                {restaurantData.about.description}
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#0B0B0B] mb-2">
                    {restaurantData.about.chef.name} — {restaurantData.about.chef.role}
                  </h3>
                  <p className="text-[#4A4A4A]">{restaurantData.about.chef.bio}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={restaurantData.about.chef.image}
                alt={`${restaurantData.about.chef.name}，${restaurantData.about.chef.role}`}
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          RESERVATION SECTION
          ============================================ */}
      <section id="reserve" className="py-24 bg-[#0B0B0B] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">预约用餐</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              提前预约，享受更贴心的服务体验
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // 这里可以集成预约后端 API
              alert('预约功能需要集成后端 API');
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  姓名 <span className="text-[#8B0000]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  电话 <span className="text-[#8B0000]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  placeholder="请输入您的电话"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">
                  日期 <span className="text-[#8B0000]">*</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">
                  时间 <span className="text-[#8B0000]">*</span>
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-medium mb-2">
                人数 <span className="text-[#8B0000]">*</span>
              </label>
              <select
                id="guests"
                name="guests"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
              >
                <option value="">请选择人数</option>
                <option value="1">1 人</option>
                <option value="2">2 人</option>
                <option value="3-4">3-4 人</option>
                <option value="5-6">5-6 人</option>
                <option value="7+">7 人以上</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                备注
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent resize-none"
                placeholder="特殊要求或备注信息（可选）"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 rounded-full bg-[#8B0000] text-white font-medium hover:bg-[#700000] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#8B0000]/50 shadow-lg"
            >
              提交预约
            </button>
          </motion.form>
        </div>
      </section>

      {/* ============================================
          CONTACT SECTION
          ============================================ */}
      <section id="contact" className="py-24 bg-[#F8F4F0]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#0B0B0B]">联系我们</h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
              欢迎随时与我们取得联系
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#8B0000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#0B0B0B]">电话</h3>
              <a href={`tel:${restaurantData.contact.phone}`} className="text-[#4A4A4A] hover:text-[#8B0000] transition-colors">
                {restaurantData.contact.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#8B0000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#0B0B0B]">邮箱</h3>
              <a href={`mailto:${restaurantData.contact.email}`} className="text-[#4A4A4A] hover:text-[#8B0000] transition-colors">
                {restaurantData.contact.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#8B0000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#0B0B0B]">地址</h3>
              <p className="text-[#4A4A4A]">{restaurantData.contact.address}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center p-8 bg-white rounded-2xl shadow-md"
          >
            <h3 className="text-lg font-semibold mb-4 text-[#0B0B0B]">营业时间</h3>
            <p className="text-[#4A4A4A] text-lg">{restaurantData.contact.hours}</p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="bg-[#0B0B0B] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{restaurantData.name}</h3>
              <p className="text-gray-400 text-sm">{restaurantData.tagline}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">快速链接</h4>
              <nav className="space-y-2" aria-label="页脚导航">
                {['菜单', '画廊', '关于', '预约', '联系'].map((item) => (
                  <a
                    key={item}
                    href={`#${item === '菜单' ? 'menu' : item === '画廊' ? 'gallery' : item === '关于' ? 'about' : item === '预约' ? 'reserve' : 'contact'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item === '菜单' ? 'menu' : item === '画廊' ? 'gallery' : item === '关于' ? 'about' : item === '预约' ? 'reserve' : 'contact');
                    }}
                    className="block text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000] rounded px-2 py-1"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">联系信息</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>{restaurantData.contact.phone}</p>
                <p>{restaurantData.contact.email}</p>
                <p>{restaurantData.contact.address}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {restaurantData.name}. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

