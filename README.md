# 颐和堂 - 现代精品中餐厅单页面网站

一个生产就绪的 React 单文件组件，使用 Tailwind CSS 构建，专为现代精品中餐厅设计。

## 📋 功能特性

- ✅ 完全响应式设计（移动端、平板、桌面）
- ✅ 现代精品设计风格（大量留白、精致排版）
- ✅ 完整的可访问性支持（ARIA、键盘导航、语义化标签）
- ✅ 性能优化（图片懒加载、SVG 图标、最小 DOM）
- ✅ SEO 友好（结构化数据、meta 标签）
- ✅ 流畅的动画和交互效果
- ✅ 可编辑的内容结构（所有文字和图片使用变量）

## 🎨 设计规范

### 颜色方案
- **主色**：深红 `#8B0000`
- **辅色**：墨黑 `#0B0B0B`
- **背景**：象牙白 `#F8F4F0`
- **金色点缀**：`#D4AF37`
- **文字灰**：`#4A4A4A`

### 响应式断点
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px

### 字体建议
- **标题**：serif 字体（如：Playfair Display, Noto Serif SC）
- **正文**：sans-serif 字体（如：Inter, Noto Sans SC）

## 📦 安装和设置

### 1. 安装依赖

```bash
npm install react react-dom framer-motion
npm install -D tailwindcss postcss autoprefixer
```

### 2. 初始化 Tailwind CSS

```bash
npx tailwindcss init -p
```

在 `tailwind.config.js` 中添加内容路径：

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./RestaurantLanding.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. 创建 CSS 入口文件

创建 `src/index.css` 或 `styles.css`：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. 导入组件

在你的主应用文件中：

```jsx
import RestaurantLanding from './RestaurantLanding';
import './styles.css';

function App() {
  return <RestaurantLanding />;
}
```

## 🖼️ 替换图片资源

### 图片资源列表

所有图片应放置在 `public/assets/` 目录下：

| 文件名 | 建议尺寸 | 用途 | 说明 |
|--------|---------|------|------|
| `logo.svg` | 200x60 | Logo | SVG 格式，透明背景 |
| `hero.jpg` | 1920x1080 | Hero 主图 | 高质量食物摆盘 |
| `dish-1.jpg` 到 `dish-6.jpg` | 800x600 | 菜品图片 | 正方形或 4:3 比例 |
| `gallery-1.jpg` 到 `gallery-6.jpg` | 1200x800 | 画廊图片 | 16:9 或 3:2 比例 |
| `chef.jpg` | 800x1000 | 主厨照片 | 竖版人像 |

### 图片优化建议

1. **格式选择**：
   - Logo：使用 SVG
   - 照片：使用 WebP 或优化的 JPEG
   - 考虑提供 `@2x` 版本用于高分辨率屏幕

2. **压缩工具**：
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

3. **懒加载**：
   - 组件已实现 `loading="lazy"` 属性
   - Hero 图片使用 `loading="eager"` 优先加载

## 📝 编辑内容

### 修改餐厅信息

编辑 `RestaurantLanding.jsx` 文件中的 `restaurantData` 对象：

```jsx
const restaurantData = {
  name: '你的餐厅名',
  subtitle: '副标题',
  tagline: '标语',
  // ... 其他内容
};
```

### 修改菜单

在 `restaurantData.menu.dishes` 数组中添加或修改菜品：

```jsx
{
  title: '菜品名称',
  description: '菜品描述',
  price: '¥价格',
  image: '/assets/dish-X.jpg',
  category: '分类', // 用于筛选功能
}
```

### 修改联系方式

更新 `restaurantData.contact` 对象中的信息。

## 🔌 集成预约后端

### 方法 1：使用表单提交

修改预约表单的 `onSubmit` 处理函数：

```jsx
onSubmit={async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  try {
    const response = await fetch('/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        time: formData.get('time'),
        guests: formData.get('guests'),
        message: formData.get('message'),
      }),
    });
    
    if (response.ok) {
      alert('预约成功！我们会尽快与您联系。');
      e.target.reset();
    } else {
      alert('预约失败，请稍后重试。');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('发生错误，请稍后重试。');
  }
}}
```

### 方法 2：使用第三方服务

#### 使用 Google Forms
1. 创建 Google 表单
2. 获取表单提交 URL
3. 修改表单 action 属性

#### 使用第三方预约系统
- [OpenTable](https://www.opentable.com/)
- [Resy](https://resy.com/)
- [Tock](https://www.exploretock.com/)

集成示例：

```jsx
<a
  href="https://www.opentable.com/your-restaurant"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#8B0000] text-white font-medium"
>
  立即预约
</a>
```

## 🚀 部署为静态站点

### 方法 1：使用 Create React App

```bash
# 创建项目
npx create-react-app restaurant-website
cd restaurant-website

# 复制组件文件
cp RestaurantLanding.jsx src/

# 安装依赖
npm install framer-motion

# 构建
npm run build

# 部署 build 文件夹到任何静态托管服务
```

### 方法 2：使用 Vite

```bash
# 创建项目
npm create vite@latest restaurant-website -- --template react
cd restaurant-website

# 安装依赖
npm install
npm install framer-motion

# 复制组件文件
cp RestaurantLanding.jsx src/

# 构建
npm run build

# 部署 dist 文件夹
```

### 方法 3：使用 Next.js（SSG）

```bash
# 创建项目
npx create-next-app restaurant-website
cd restaurant-website

# 安装依赖
npm install framer-motion

# 在 pages/index.js 中使用组件
# 构建
npm run build

# 导出静态站点
npm run export
```

### 推荐的托管服务

- **Vercel**：`vercel deploy`
- **Netlify**：拖拽 `build` 文件夹到 Netlify
- **GitHub Pages**：使用 `gh-pages` 包
- **Cloudflare Pages**：连接 Git 仓库自动部署

## 🎯 SEO 优化

### 1. 添加 Meta 标签

在 HTML `<head>` 中添加（参考 `seo-meta-example.html`）：

```html
<title>颐和堂 - 精致中式私厨 | 现代中餐体验</title>
<meta name="description" content="颐和堂致力于将传统中餐与现代烹饪理念相结合，提供精致的中式私厨体验。">
<meta name="keywords" content="中餐厅,私厨,精致中餐,米其林,预约">
```

### 2. 添加结构化数据

参考 `seo-json-ld-example.json` 文件，在页面中添加 JSON-LD 脚本。

### 3. Open Graph 标签

```html
<meta property="og:title" content="颐和堂 - 精致中式私厨">
<meta property="og:description" content="现代中餐体验，传统与创新的完美融合">
<meta property="og:image" content="https://yourdomain.com/assets/hero.jpg">
<meta property="og:url" content="https://yourdomain.com">
```

## ♿ 可访问性检查清单

- ✅ 所有图片都有 `alt` 文本
- ✅ 导航链接有 `aria-label`
- ✅ 表单字段有 `label` 和 `id` 关联
- ✅ 按钮有焦点状态（`focus:ring`）
- ✅ 颜色对比度符合 WCAG AA 标准
- ✅ 键盘导航支持（Tab、Enter、Esc）

## 🎨 CSS Class 说明

### 常用工具类

- `bg-[#8B0000]` - 深红背景
- `text-[#0B0B0B]` - 墨黑文字
- `bg-[#F8F4F0]` - 象牙白背景
- `text-[#4A4A4A]` - 灰色文字
- `rounded-2xl` - 大圆角（16px）
- `rounded-full` - 完全圆形
- `shadow-lg` - 大阴影
- `hover:scale-110` - 悬停放大效果
- `transition-all duration-300` - 平滑过渡动画

### 响应式类

- `hidden md:block` - 移动端隐藏，桌面端显示
- `grid-cols-1 md:grid-cols-2` - 响应式网格
- `text-4xl md:text-5xl` - 响应式文字大小

## 📚 变量清单

所有可编辑的变量都在 `restaurantData` 对象中：

- `restaurantData.name` - 餐厅名称
- `restaurantData.subtitle` - 副标题
- `restaurantData.tagline` - 标语
- `restaurantData.hero.*` - Hero 区域内容
- `restaurantData.menu.*` - 菜单内容
- `restaurantData.gallery.*` - 画廊内容
- `restaurantData.about.*` - 关于我们内容
- `restaurantData.contact.*` - 联系信息

## 🐛 常见问题

### Q: 动画不工作？
A: 确保已安装 `framer-motion`：`npm install framer-motion`

### Q: Tailwind 样式不生效？
A: 检查 `tailwind.config.js` 中的 `content` 路径是否正确

### Q: 图片不显示？
A: 确保图片路径正确，图片文件存在于 `public/assets/` 目录

### Q: 如何修改颜色？
A: 在组件中搜索颜色值（如 `#8B0000`）并替换，或使用 Tailwind 配置扩展主题

## 📄 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**提示**：这是一个单文件组件，可以直接复制到你的项目中使用。所有内容都通过 `restaurantData` 对象管理，便于后续集成 CMS 系统。

