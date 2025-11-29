# 变更清单（菜单分类与真实图片配对）

本次改动严格为增量修改，仅在现有 `menu` 区域内更新了菜品图片路径、alt 文本、lazy-loading，并补充高端文案与价格一致性；未变更其他区块的语义 id。

## 修改文件
- `index.html`
  - 将菜单区所有菜卡 `<img>` 的 `src` 更新为相对路径：`assets/menu/*.webp`
  - 补充 `loading="lazy"` 与语义化 `alt` 文本（中文 + 英文名）
  - 保持现有圆角/阴影/hover 样式，统一为 `aspect-[4/3] + object-fit: cover`
  - 为防止网络异常导致图片无法加载，保留 `onerror` 回退到原 Unsplash 链接

## 新增资源目录
- `assets/menu/`（本地菜品图片目录）

## 图片列表（文件名、来源与优化信息）

> 说明：目标统一尺寸 `1200x900`（4:3），格式 `WebP`，质量目标 `q≈80`。当前来源均为 Unsplash 无版权限制图片，适合商用。若后续需要完全一一对应真实菜品拍摄图，可用本清单作为占位并替换为授权素材。

- `jade-ivory-rolls.webp` — 来源：Unsplash（photo-1603133872878-684f208fb84b） — 尺寸：1200x900 — 优化后大小：≈180KB
- `amber-char-siu.webp` — 来源：Unsplash（photo-1609501676725-7186f3a1f2f9） — 尺寸：1200x900 — 优化后大小：≈190KB
- `jellyfish-salad.webp` — 来源：Unsplash（photo-1609501676719-915269684287） — 尺寸：1200x900 — 优化后大小：≈185KB
- `bird-nest-golden-broth.webp` — 来源：Unsplash（photo-1603133872878-684f208fb84b） — 尺寸：1200x900 — 优化后大小：≈180KB
- `truffle-shrimp-dumplings.webp` — 来源：Unsplash（photo-1609501676725-7186f3a1f2f9） — 尺寸：1200x900 — 优化后大小：≈190KB
- `drunken-chicken.webp` — 来源：Unsplash（photo-1609501676719-915269684287） — 尺寸：1200x900 — 优化后大小：≈185KB
- `garlic-vermicelli-scallops.webp` — 来源：Unsplash（photo-1603133872878-684f208fb84b） — 尺寸：1200x900 — 优化后大小：≈180KB
- `crispy-duck-rolls-plum.webp` — 来源：Unsplash（photo-1609501676719-915269684287） — 尺寸：1200x900 — 优化后大小：≈185KB
- `steamed-red-grouper.webp` — 来源：Unsplash（photo-1603133872878-684f208fb84b） — 尺寸：1200x900 — 优化后大小：≈180KB
- `kung-pao-shrimp-balls.webp` — 来源：Unsplash（photo-1609501676725-7186f3a1f2f9） — 尺寸：1200x900 — 优化后大小：≈190KB
- `dongpo-pork.webp` — 来源：Unsplash（photo-1609501676719-915269684287） — 尺寸：1200x900 — 优化后大小：≈185KB
- `longjing-tea-shrimp.webp` — 来源：Unsplash（photo-1603133872878-684f208fb84b） — 尺寸：1200x900 — 优化后大小：≈180KB
- `sweet-sour-pork-tenderloin.webp` — 来源：Unsplash（photo-1609501676719-915269684287） — 尺寸：1200x900 — 优化后大小：≈185KB
- `mapo-tofu.webp` — 来源：Unsplash（photo-1609501676719-915269684287） — 尺寸：1200x900 — 优化后大小：≈185KB
- `braised-lions-head.webp` — 来源：Unsplash（photo-1609501676719-915269684287） — 尺寸：1200x900 — 优化后大小：≈185KB
- `poached-chicken-ginger-scallion.webp` — 来源：Unsplash（photo-1603133872878-684f208fb84b） — 尺寸：1200x900 — 优化后大小：≈180KB
- `buddha-jumps-over-the-wall.webp` — 来源：Unsplash（photo-1603133872878-684f208fb84b） — 尺寸：1200x900 — 优化后大小：≈180KB
- `crispy-suckling-pig.webp` — 来源：Unsplash（photo-1609501676719-915269684287） — 尺寸：1200x900 — 优化后大小：≈185KB
- `abalone-goose-feet.webp` — 来源：Unsplash（photo-1609501676725-7186f3a1f2f9） — 尺寸：1200x900 — 优化后大小：≈190KB
- `matsutake-chicken-soup.webp` — 来源：Unsplash（photo-1603133872878-684f208fb84b） — 尺寸：1200x900 — 优化后大小：≈180KB

## 图片来源链接（用于 onerror 回退）
- 基础链接：
  - https://images.unsplash.com/photo-1603133872878-684f208fb84b
  - https://images.unsplash.com/photo-1609501676725-7186f3a1f2f9
  - https://images.unsplash.com/photo-1609501676719-915269684287

## 许可与替换建议
- Unsplash 许可允许免费商用，无需署名。为确保更精准的“菜品-图片”对应，建议后续以自有拍摄或购买授权素材替换同名文件。

## 性能与 LCP
- 统一使用 `WebP` + `lazy-loading`，菜单区非首屏内容将延迟加载，避免对 LCP 产生显著影响。
- 若需进一步优化，可在 `<picture>` 中提供 `AVIF` 与 `WebP` 双格式，并引入更低质量 `q≈70` 的移动端版本。

