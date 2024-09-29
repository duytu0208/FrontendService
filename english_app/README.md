my-personal-site/
├── public/                     # Chứa tài nguyên tĩnh
│   └── images/                 # Hình ảnh cho các trang
├── src/
│   ├── components/             # Chứa các component dùng chung
│   │   ├── Layout.tsx          # Component layout chung
│   │   ├── Navbar.tsx          # Thanh điều hướng
│   ├── pages/                  # Các trang của ứng dụng
│   │   ├── about.tsx           # Trang giới thiệu bản thân
│   │   ├── blog.tsx            # Trang blog
│   │   └── knowledge/          # Thư mục cho các topic chia sẻ kiến thức
│   │       ├── index.tsx       # Trang chính của chia sẻ kiến thức
│   │       ├── [topic].tsx     # Trang chi tiết cho từng topic
│   ├── styles/                 # Chứa file CSS module
│   │   ├── globals.css         # CSS chung cho toàn bộ app
│   │   ├── Layout.module.css   # CSS cho Layout component
│   │   ├── Navbar.module.css   # CSS cho Navbar
│   ├── utils/                  # Chứa các hàm utility (nếu có)
│   └── hooks/                  # Custom React hooks (nếu cần)
├── .eslintrc.js                # Cấu hình ESLint
├── .prettierrc                 # Cấu hình Prettier
├── tsconfig.json               # Cấu hình TypeScript
├── next.config.js              # Cấu hình Next.js
└── package.json



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
