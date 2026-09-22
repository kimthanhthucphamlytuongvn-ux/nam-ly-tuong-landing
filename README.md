# Nấm Lý Tưởng — Next.js Landing Page

Chuyển đổi 1:1 từ bản HTML/CSS/JS thuần (Premium Dark Glassmorphism + Neon
Ambient Glow) sang Next.js 14 (App Router) + TypeScript + TailwindCSS +
Framer Motion.

> **Lưu ý quan trọng:** source code này được viết trong môi trường **không
> có Node.js/npm cài sẵn**, nên chưa thể chạy `npm install` / `next build`
> để tự kiểm chứng. Cấu trúc và cú pháp đã được rà soát kỹ thủ công, nhưng
> bạn cần tự `npm install && npm run dev` ở máy có Node.js để xác nhận lần
> cuối trước khi deploy production.

## Cài đặt

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build production
npm run start   # chạy bản build
npm run lint    # kiểm tra ESLint
npm run type-check  # kiểm tra TypeScript không cần build
```

Yêu cầu Node.js ≥ 18.17.

## Cấu trúc thư mục

```
src/
  app/
    layout.tsx      # root layout: font Tinos (Times New Roman), metadata, AmbientGlow
    page.tsx         # ghép các section lại thành trang chủ
    globals.css      # design tokens (CSS variables) + .glass, .eyebrow, .ambient-blob
  components/
    layout/          # Header (nav + mobile menu + sticky scroll), Footer
    sections/        # 1 file = 1 khối nội dung của landing page
    ui/               # thành phần dùng lại nhiều nơi: Button, GlassCard, Chip,
                      #   ProductCard, StatTile, Reveal (fade-in khi cuộn), AmbientGlow
    icons/            # icon SVG dạng component (Mushroom, Leaf, Check, Badge, Store)
  lib/
    data.ts           # TOÀN BỘ nội dung/copy của trang (sản phẩm, timeline, USP,
                      #   OCOP, danh sách siêu thị...) — sửa nội dung ở đây, không
                      #   sửa trong component
    types.ts          # type cho dữ liệu ở trên
    cn.ts             # helper nối className (thay clsx tối giản)
```

## Vì sao tách như vậy (để dễ bảo trì / mở rộng)

- **Data-driven**: sản phẩm, timeline, USP, giá trị 4S, chứng nhận OCOP,
  danh sách siêu thị đều là mảng dữ liệu trong `lib/data.ts`. Muốn đổi/thêm
  sản phẩm, sửa mảng `products` — không cần đụng vào JSX.
- **Server Components mặc định**: các section (Hero, ProblemSection,
  StorySection, UspSection, ValuesSection, TrustSection, OfferSection,
  Footer) không có `"use client"` — chúng render trên server, nhẹ hơn.
  Chỉ những phần thực sự cần tương tác/browser API mới là Client
  Component: `Header` (trạng thái cuộn trang + menu mobile), `ProductsSection`
  (bộ lọc danh mục), `Reveal`/`Button`/`ProductCard`/`Chip` (Framer Motion).
- **`.glass` vẫn là CSS thường** (trong `globals.css`, đặt trong
  `@layer components`) thay vì cố nhồi hết vào Tailwind utility, vì kỹ
  thuật viền gradient neon dùng `mask-composite` không có utility tương ứng
  gọn gàng. Đặt trong `@layer components` để mọi Tailwind utility (vd. đổi
  màu viền khi active) luôn thắng trong cascade, không bị `.glass` đè lên.

## Hiệu ứng chuyển động (Framer Motion)

- `Reveal` — fade + trượt lên khi phần tử cuộn vào khung nhìn
  (`whileInView`, chạy một lần, tự tắt khi `prefers-reduced-motion`).
- `Button` — nhấc nhẹ khi hover, co lại khi bấm (`whileHover` / `whileTap`).
- `ProductCard` — nhấc khi hover; khi đổi bộ lọc danh mục, thẻ sản phẩm
  fade/scale ra-vào mượt qua `AnimatePresence`.
- `Header` — theo dõi `scrollY` bằng `useScroll`/`useMotionValueEvent` để
  làm đậm nền kính khi cuộn xuống; menu mobile trượt mở bằng
  `AnimatePresence` + chiều cao animate.

## Việc còn cần bạn xác nhận trước khi lên production

- **Hotline**: đang dùng số thật `0989.333.415 – 0936.195.322`
  (`src/lib/data.ts` → `CONTACT`).
- **Tên miền**: chưa có, footer đang ghi "namlytuong.vn (sắp ra mắt)" —
  cập nhật khi có domain thật.
- **Ảnh sản phẩm**: hiện dùng icon SVG minh hoạ (nấm/lá) thay cho ảnh thật
  vì chưa có ảnh chụp sản phẩm. Khi có ảnh thật, thay `<Icon />` trong
  `ui/ProductCard.tsx` bằng `next/image`.
- **Logo**: `public/logo.jpg` — nếu có bản PNG nền trong suốt, dùng sẽ đẹp
  hơn khung nền trắng bo góc hiện tại.
