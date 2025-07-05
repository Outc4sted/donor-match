## Donor Match

1. git clone
2. pnpm i
3. pnpm env:docker
4. docker compose up -d postgres
5. Add .env.local to ./apps/api/.dmno with Clerk keys
   1. CLERK_PUBLISHABLE_KEY
   2. CLERK_SECRET_KEY
   3. CLERK_JWT_KEY
6. pnpm dev
