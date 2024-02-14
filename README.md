## Full eCommerce made with Next.js

This project was made for a customer that has not paid me, so I will let here for everyone to use

## Functionalities

- Products view
- Single product view and dynamic options
- Add to cart
- Edit / remove on cart
- Checkout
- API for checkout and products
- Well designed database (with Prisma)
- Etc...

## How to run

```bash
npm install
npx prisma migrate dev
npx prisma generate
npm run dev
```

- Dont forget to change .env variables!
- This project uses SQUARE api for checkout and MySQL for database
- The images will be tracked from /public folder, so you only need to set the remaining path on DB
