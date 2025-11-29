# CSS 变量和 Class 参考清单

## 🎨 颜色变量

### 主色系统
```css
/* 深红 - 主色 */
#8B0000
/* 使用示例 */
bg-[#8B0000]        /* 深红背景 */
text-[#8B0000]      /* 深红文字 */
border-[#8B0000]    /* 深红边框 */
hover:bg-[#700000]  /* 悬停时更深的红色 */

/* 墨黑 - 辅色 */
#0B0B0B
/* 使用示例 */
text-[#0B0B0B]      /* 墨黑文字 */
bg-[#0B0B0B]        /* 墨黑背景 */

/* 象牙白 - 背景色 */
#F8F4F0
/* 使用示例 */
bg-[#F8F4F0]        /* 象牙白背景 */

/* 金色点缀 */
#D4AF37
/* 使用示例 */
text-[#D4AF37]      /* 金色文字 */
bg-[#D4AF37]        /* 金色背景 */

/* 文字灰 */
#4A4A4A
/* 使用示例 */
text-[#4A4A4A]      /* 灰色文字 */
```

### 透明度变体
```css
/* 深红透明度 */
bg-[#8B0000]/10     /* 10% 透明度 */
bg-[#8B0000]/20     /* 20% 透明度 */
bg-[#8B0000]/50     /* 50% 透明度 */

/* 墨黑透明度 */
bg-[#0B0B0B]/10     /* 10% 透明度 */
bg-[#0B0B0B]/20     /* 20% 透明度 */
border-[#0B0B0B]/10 /* 10% 透明边框 */

/* 白色透明度 */
bg-white/10         /* 10% 白色 */
bg-white/20         /* 20% 白色 */
border-white/20     /* 20% 白色边框 */
```

## 📐 间距系统

### 内边距（Padding）
```css
p-2    /* 8px */
p-4    /* 16px */
p-6    /* 24px */
p-8    /* 32px */
p-12   /* 48px */
px-4   /* 水平 16px */
px-6   /* 水平 24px */
px-8   /* 水平 32px */
px-12  /* 水平 48px */
py-2   /* 垂直 8px */
py-4   /* 垂直 16px */
py-6   /* 垂直 24px */
py-12  /* 垂直 48px */
py-24  /* 垂直 96px */
```

### 外边距（Margin）
```css
mb-2   /* 底部 8px */
mb-4   /* 底部 16px */
mb-6   /* 底部 24px */
mb-8   /* 底部 32px */
mb-12  /* 底部 48px */
mt-4   /* 顶部 16px */
mt-6   /* 顶部 24px */
mt-8   /* 顶部 32px */
```

### 间距（Gap）
```css
gap-2  /* 8px */
gap-3  /* 12px */
gap-4  /* 16px */
gap-6  /* 24px */
gap-8  /* 32px */
gap-12 /* 48px */
```

## 🔲 圆角系统

```css
rounded      /* 4px */
rounded-lg   /* 8px */
rounded-xl   /* 12px */
rounded-2xl  /* 16px */
rounded-3xl  /* 24px */
rounded-full /* 完全圆形 */
```

## 📦 容器和布局

### 最大宽度
```css
max-w-7xl    /* 1280px - 主容器 */
max-w-4xl    /* 896px - 表单容器 */
max-w-2xl    /* 672px - 文本容器 */
```

### 网格系统
```css
grid                    /* 网格布局 */
grid-cols-1             /* 1 列 */
grid-cols-2             /* 2 列 */
grid-cols-3             /* 3 列 */
sm:grid-cols-2          /* 小屏幕 2 列 */
md:grid-cols-2          /* 中屏幕 2 列 */
lg:grid-cols-3          /* 大屏幕 3 列 */
```

### Flexbox
```css
flex                    /* Flex 布局 */
flex-col                /* 垂直方向 */
flex-row                /* 水平方向 */
items-center            /* 垂直居中 */
justify-between         /* 两端对齐 */
justify-center          /* 居中对齐 */
gap-4                   /* 间距 16px */
```

## 🎭 阴影系统

```css
shadow-sm    /* 小阴影 */
shadow-md    /* 中等阴影 */
shadow-lg    /* 大阴影 */
shadow-xl    /* 超大阴影 */
shadow-2xl   /* 最大阴影 */
hover:shadow-xl  /* 悬停时大阴影 */
```

## 📝 文字样式

### 字号
```css
text-xs      /* 12px */
text-sm      /* 14px */
text-base    /* 16px */
text-lg      /* 18px */
text-xl      /* 20px */
text-2xl     /* 24px */
text-3xl     /* 30px */
text-4xl     /* 36px */
text-5xl     /* 48px */
text-6xl     /* 60px */
```

### 响应式字号
```css
text-4xl md:text-5xl lg:text-6xl  /* 响应式标题 */
text-base md:text-lg              /* 响应式正文 */
```

### 字重
```css
font-normal   /* 400 */
font-medium   /* 500 */
font-semibold /* 600 */
font-bold     /* 700 */
```

### 字体系列
```css
font-serif    /* 衬线字体（标题） */
font-sans     /* 无衬线字体（正文） */
```

### 行高
```css
leading-tight    /* 1.25 */
leading-normal   /* 1.5 */
leading-relaxed  /* 1.625 */
leading-loose    /* 2 */
```

### 字间距
```css
tracking-tight   /* -0.025em */
tracking-normal  /* 0 */
tracking-wide    /* 0.025em */
tracking-wider   /* 0.05em */
tracking-widest  /* 0.1em */
```

## 🎬 动画和过渡

### 过渡
```css
transition-all          /* 所有属性过渡 */
transition-colors       /* 颜色过渡 */
transition-transform    /* 变换过渡 */
duration-300            /* 300ms */
duration-500            /* 500ms */
ease-out                /* 缓出 */
```

### 变换
```css
hover:scale-110         /* 悬停放大 110% */
hover:scale-105         /* 悬停放大 105% */
group-hover:scale-110   /* 组悬停放大 */
```

### 透明度
```css
opacity-0               /* 完全透明 */
opacity-5               /* 5% 不透明 */
opacity-10              /* 10% 不透明 */
opacity-20              /* 20% 不透明 */
opacity-50              /* 50% 不透明 */
opacity-100             /* 完全不透明 */
hover:opacity-100       /* 悬停时完全不透明 */
```

## 🎯 交互状态

### 悬停效果
```css
hover:bg-[#8B0000]      /* 悬停背景 */
hover:text-[#8B0000]    /* 悬停文字 */
hover:brightness-95     /* 悬停亮度 */
hover:shadow-xl         /* 悬停阴影 */
hover:border-[#8B0000]  /* 悬停边框 */
```

### 焦点状态
```css
focus:outline-none              /* 移除默认轮廓 */
focus:ring-2                    /* 2px 焦点环 */
focus:ring-4                    /* 4px 焦点环 */
focus:ring-[#8B0000]            /* 深红焦点环 */
focus:ring-[#8B0000]/50        /* 50% 透明焦点环 */
focus:border-transparent        /* 透明边框 */
```

## 📱 响应式断点

### 显示/隐藏
```css
hidden              /* 隐藏 */
block               /* 显示 */
md:block            /* 中屏幕及以上显示 */
md:hidden           /* 中屏幕及以上隐藏 */
lg:block            /* 大屏幕显示 */
```

### 响应式布局
```css
flex-col md:flex-row        /* 移动端垂直，桌面端水平 */
grid-cols-1 md:grid-cols-2  /* 移动端 1 列，桌面端 2 列 */
text-center md:text-left    /* 移动端居中，桌面端左对齐 */
```

## 🖼️ 图片和媒体

### 对象适配
```css
object-cover        /* 覆盖（裁剪） */
object-contain      /* 包含（完整显示） */
object-center       /* 居中 */
```

### 宽高比
```css
aspect-[4/3]        /* 4:3 比例 */
aspect-[16/9]       /* 16:9 比例 */
aspect-square       /* 1:1 比例 */
```

## 🎨 背景渐变

```css
bg-gradient-to-t            /* 从上到下 */
bg-gradient-to-b            /* 从下到上 */
from-[#0B0B0B]/20          /* 起始颜色 20% 透明 */
to-transparent              /* 结束透明 */
```

## 📍 定位

```css
relative              /* 相对定位 */
absolute              /* 绝对定位 */
sticky                /* 粘性定位 */
top-0                 /* 顶部 0 */
bottom-0              /* 底部 0 */
left-0                /* 左侧 0 */
right-0               /* 右侧 0 */
z-10                  /* z-index 10 */
z-50                  /* z-index 50 */
```

## 🔤 文本变换

```css
uppercase             /* 大写 */
lowercase             /* 小写 */
capitalize            /* 首字母大写 */
```

## 📋 常用组合类

### 按钮样式
```css
/* 主按钮 */
px-8 py-4 rounded-full bg-[#8B0000] text-white font-medium shadow-lg hover:bg-[#700000] transition-all duration-300

/* 次要按钮 */
px-8 py-4 rounded-full border-2 border-[#0B0B0B]/20 text-[#0B0B0B] font-medium hover:border-[#8B0000] hover:text-[#8B0000] transition-all duration-300
```

### 卡片样式
```css
bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300
```

### 输入框样式
```css
w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent
```

### 标题样式
```css
text-3xl md:text-4xl font-serif mb-4 text-[#0B0B0B]
```

### 正文样式
```css
text-[#4A4A4A] text-lg leading-relaxed
```

