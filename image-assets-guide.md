# 图片资源指南

## 📸 所需图片清单

### 1. Logo
- **文件**: `logo.svg`
- **格式**: SVG（推荐）或 PNG
- **尺寸**: 200x60px（或按比例）
- **背景**: 透明
- **用途**: 网站头部 Logo
- **建议来源**: 
  - 专业设计师设计
  - [Canva](https://www.canva.com/) 创建
  - [LogoMaker](https://www.logomaker.com/)

### 2. Hero 主图
- **文件**: `hero.jpg`
- **格式**: JPEG 或 WebP
- **尺寸**: 1920x1080px（16:9 比例）
- **质量**: 高质量，文件大小控制在 500KB 以内
- **内容**: 精美的食物摆盘，体现餐厅品质
- **建议来源**:
  - [Unsplash](https://unsplash.com/) - 搜索 "chinese food", "fine dining"
  - [Pexels](https://www.pexels.com/) - 搜索 "chinese cuisine"
  - [Pixabay](https://pixabay.com/) - 免费高质量图片
  - 专业摄影师拍摄

### 3. 菜品图片（6 张）
- **文件**: `dish-1.jpg` 到 `dish-6.jpg`
- **格式**: JPEG 或 WebP
- **尺寸**: 800x600px（4:3 比例）或 800x800px（正方形）
- **质量**: 高质量，每张控制在 200KB 以内
- **内容**: 各道招牌菜品的精美摆盘
- **建议来源**:
  - 餐厅实际拍摄（最佳）
  - [Foodiesfeed](https://www.foodiesfeed.com/) - 免费食物图片
  - [Unsplash](https://unsplash.com/) - 搜索具体菜品名称
  - 专业美食摄影师

**菜品图片建议内容**:
- `dish-1.jpg`: 脆皮烤乳猪
- `dish-2.jpg`: 黄酒焖海参
- `dish-3.jpg`: 龙井虾仁
- `dish-4.jpg`: 东坡肉
- `dish-5.jpg`: 清蒸石斑鱼
- `dish-6.jpg`: 桂花糖藕

### 4. 画廊图片（6 张）
- **文件**: `gallery-1.jpg` 到 `gallery-6.jpg`
- **格式**: JPEG 或 WebP
- **尺寸**: 1200x800px（3:2 比例）或 1200x675px（16:9 比例）
- **质量**: 高质量，每张控制在 300KB 以内
- **内容**: 餐厅环境、装饰、氛围
- **建议来源**:
  - 餐厅实际拍摄（最佳）
  - [Unsplash](https://unsplash.com/) - 搜索 "restaurant interior", "fine dining"
  - [Pexels](https://www.pexels.com/) - 搜索 "restaurant decor"

**画廊图片建议内容**:
- `gallery-1.jpg`: 餐厅主厅全景
- `gallery-2.jpg`: 包间环境
- `gallery-3.jpg`: 雅座区域
- `gallery-4.jpg`: 吧台设计
- `gallery-5.jpg`: 装饰细节（如中式元素）
- `gallery-6.jpg`: 户外露台或窗景

### 5. 主厨照片
- **文件**: `chef.jpg`
- **格式**: JPEG 或 WebP
- **尺寸**: 800x1000px（竖版，4:5 比例）
- **质量**: 高质量，控制在 300KB 以内
- **内容**: 主厨专业形象照
- **建议来源**:
  - 专业摄影师拍摄（最佳）
  - [Unsplash](https://unsplash.com/) - 搜索 "chef portrait"
  - [Pexels](https://www.pexels.com/) - 搜索 "professional chef"

## 🎨 图片优化建议

### 1. 格式选择
- **Logo**: 优先使用 SVG（矢量，无损缩放）
- **照片**: 
  - 现代浏览器：WebP（更好的压缩比）
  - 兼容性：JPEG（更广泛支持）
  - 考虑提供两种格式，使用 `<picture>` 标签

### 2. 压缩工具
- **在线工具**:
  - [TinyPNG](https://tinypng.com/) - 智能压缩
  - [Squoosh](https://squoosh.app/) - Google 开发，功能强大
  - [Compressor.io](https://compressor.io/) - 简单易用

- **桌面工具**:
  - [ImageOptim](https://imageoptim.com/) - Mac
  - [FileOptimizer](https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer) - Windows
  - [GIMP](https://www.gimp.org/) - 免费图像编辑器

### 3. 响应式图片
考虑为高分辨率屏幕提供 `@2x` 版本：

```
/assets/
  hero.jpg          (1920x1080)
  hero@2x.jpg       (3840x2160)
  dish-1.jpg        (800x600)
  dish-1@2x.jpg     (1600x1200)
```

在代码中使用：
```jsx
<img
  src="/assets/hero.jpg"
  srcSet="/assets/hero.jpg 1x, /assets/hero@2x.jpg 2x"
  alt="..."
/>
```

### 4. 懒加载
组件已实现懒加载，但 Hero 图片使用 `loading="eager"` 优先加载。

### 5. 占位符
开发阶段可以使用占位符服务：
- [Placeholder.com](https://placeholder.com/)
- [Lorem Picsum](https://picsum.photos/)
- [PlaceImg](https://placeimg.com/)

示例：
```jsx
<img src="https://picsum.photos/800/600?random=1" alt="菜品" />
```

## 📁 目录结构

建议的目录结构：

```
public/
  assets/
    logo.svg
    hero.jpg
    dish-1.jpg
    dish-2.jpg
    dish-3.jpg
    dish-4.jpg
    dish-5.jpg
    dish-6.jpg
    gallery-1.jpg
    gallery-2.jpg
    gallery-3.jpg
    gallery-4.jpg
    gallery-5.jpg
    gallery-6.jpg
    chef.jpg
```

## 🔍 图片 SEO 优化

### Alt 文本
所有图片都应包含描述性的 `alt` 文本：

```jsx
<img 
  src="/assets/dish-1.jpg" 
  alt="脆皮烤乳猪 - 外皮酥脆，肉质鲜嫩，配以秘制酱汁" 
/>
```

### 文件名
使用描述性的文件名：
- ✅ `dish-crispy-roast-pig.jpg`
- ❌ `IMG_1234.jpg`

### 图片标题
考虑添加 `title` 属性提供额外信息：

```jsx
<img 
  src="/assets/dish-1.jpg" 
  alt="脆皮烤乳猪" 
  title="招牌菜 - 脆皮烤乳猪，¥298"
/>
```

## 📊 性能指标

### 目标文件大小
- Hero 图片: < 500KB
- 菜品图片: < 200KB/张
- 画廊图片: < 300KB/张
- Logo: < 50KB（SVG 通常 < 10KB）

### 加载时间目标
- 首屏内容（Hero）: < 2 秒
- 完整页面: < 5 秒（3G 网络）

### 测试工具
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

## 🎯 图片内容建议

### Hero 图片
- 突出餐厅特色
- 高质量食物摆盘
- 良好的光线和构图
- 体现精致和高端感

### 菜品图片
- 统一的光线和角度
- 清晰的焦点
- 诱人的摆盘
- 体现食材新鲜度

### 环境图片
- 展示餐厅氛围
- 体现设计风格
- 包含中式元素
- 营造舒适感

## 💡 专业拍摄建议

如果计划专业拍摄：

1. **准备清单**:
   - 所有招牌菜品
   - 餐厅各个区域
   - 主厨工作照
   - 细节装饰

2. **拍摄要求**:
   - 使用专业相机（至少 24MP）
   - 良好的自然光或专业灯光
   - 统一的拍摄风格
   - 后期调色统一

3. **后期处理**:
   - 统一色调和风格
   - 适当锐化
   - 优化文件大小
   - 保持色彩准确

## 📝 检查清单

在部署前确认：
- [ ] 所有图片文件已准备
- [ ] 图片已优化压缩
- [ ] 所有图片都有 alt 文本
- [ ] 文件名清晰描述内容
- [ ] 图片尺寸符合要求
- [ ] 文件大小在目标范围内
- [ ] 图片质量清晰
- [ ] 响应式图片已准备（如需要）

