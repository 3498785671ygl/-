# 快速开始指南

## 🚀 5 分钟快速启动

### 方法 1: 使用 Vite（推荐）

```bash
# 1. 创建项目
npm create vite@latest restaurant-website -- --template react
cd restaurant-website

# 2. 安装依赖
npm install
npm install framer-motion

# 3. 安装 Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. 配置 Tailwind
# 复制 tailwind.config.js.example 的内容到 tailwind.config.js
# 或手动配置（参考 README.md）

# 5. 创建 CSS 文件
# 在 src/index.css 中添加：
# @tailwind base;
# @tailwind components;
# @tailwind utilities;

# 6. 复制组件
# 将 RestaurantLanding.jsx 复制到 src/ 目录

# 7. 更新 App.jsx
# import RestaurantLanding from './RestaurantLanding';
# import './index.css';
# 
# function App() {
#   return <RestaurantLanding />;
# }

# 8. 启动开发服务器
npm run dev

# 9. 构建生产版本
npm run build
```

### 方法 2: 使用 Create React App

```bash
# 1. 创建项目
npx create-react-app restaurant-website
cd restaurant-website

# 2. 安装依赖
npm install framer-motion

# 3. 安装 Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. 配置 Tailwind（同上）

# 5. 在 src/index.css 中添加 Tailwind 指令

# 6. 复制组件到 src/

# 7. 更新 App.js

# 8. 启动
npm start

# 9. 构建
npm run build
```

## 📁 项目结构

```
restaurant-website/
├── public/
│   └── assets/          # 图片资源目录
│       ├── logo.svg
│       ├── hero.jpg
│       ├── dish-1.jpg
│       └── ...
├── src/
│   ├── RestaurantLanding.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ⚙️ 必需配置

### 1. Tailwind 配置

创建或更新 `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/RestaurantLanding.jsx"
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#8B0000',
        'primary-black': '#0B0B0B',
        'ivory-bg': '#F8F4F0',
        'gold-accent': '#D4AF37',
      },
    },
  },
  plugins: [],
}
```

### 2. CSS 入口文件

在 `src/index.css` 中添加：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. 主应用文件

更新 `src/App.jsx`:

```jsx
import React from 'react';
import RestaurantLanding from './RestaurantLanding';
import './index.css';

function App() {
  return <RestaurantLanding />;
}

export default App;
```

## 🖼️ 添加图片

1. 在 `public` 目录下创建 `assets` 文件夹
2. 将图片放入 `public/assets/` 目录
3. 确保文件名与代码中的路径匹配

参考 `image-assets-guide.md` 了解详细的图片要求。

## ✏️ 自定义内容

编辑 `RestaurantLanding.jsx` 中的 `restaurantData` 对象：

```jsx
const restaurantData = {
  name: '你的餐厅名',
  subtitle: '副标题',
  // ... 修改其他内容
};
```

## 🎨 自定义颜色

### 方法 1: 直接替换颜色值

在组件中搜索并替换：
- `#8B0000` → 你的主色
- `#0B0B0B` → 你的辅色
- `#F8F4F0` → 你的背景色

### 方法 2: 使用 Tailwind 配置

在 `tailwind.config.js` 中扩展颜色：

```javascript
theme: {
  extend: {
    colors: {
      'your-primary': '#YOUR_COLOR',
    },
  },
}
```

然后在组件中使用 `bg-your-primary`。

## 🔧 常见问题

### Q: Tailwind 样式不生效？
**A**: 检查：
1. `tailwind.config.js` 中的 `content` 路径是否正确
2. CSS 文件是否导入了 Tailwind 指令
3. CSS 文件是否在入口文件中导入

### Q: 动画不工作？
**A**: 确保已安装 `framer-motion`:
```bash
npm install framer-motion
```

### Q: 图片不显示？
**A**: 检查：
1. 图片路径是否正确（相对于 `public` 目录）
2. 图片文件是否存在
3. 文件名是否匹配（注意大小写）

### Q: 如何部署？
**A**: 
1. 运行 `npm run build`
2. 将 `dist` 或 `build` 文件夹部署到静态托管服务
3. 参考 README.md 中的部署章节

## 📚 下一步

- 阅读 `README.md` 了解完整文档
- 查看 `css-variables-reference.md` 了解样式系统
- 参考 `image-assets-guide.md` 准备图片
- 查看 `seo-meta-example.html` 和 `seo-json-ld-example.json` 配置 SEO

## 🎯 快速检查清单

- [ ] 项目已创建
- [ ] 依赖已安装
- [ ] Tailwind CSS 已配置
- [ ] 组件文件已复制
- [ ] 图片资源已准备（至少占位符）
- [ ] 内容已自定义
- [ ] 开发服务器运行正常
- [ ] 样式显示正确
- [ ] 响应式布局正常

完成以上步骤后，你的网站应该可以正常运行了！🎉

