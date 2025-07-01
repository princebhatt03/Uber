Uber Clone – MERN Stack ✨
<div align="center"> <img src="docs/screenshots/cover.png" alt="Uber Clone Banner" width="75%" /> </div>
A full-stack clone of the core Uber experience—book a ride, watch the driver move in real-time, pay securely, and review your trip.
Built end-to-end with the MERN stack plus a handful of real-time & mapping goodies.

Demo
Web – Rider dashboard	Web – Driver dashboard
<img src="docs/screenshots/rider-flow.gif" width="100%"/>	<img src="docs/screenshots/driver-flow.gif" width="100%"/>

Tip: Replace the GIFs above with your own screen-captures.
docs/screenshots/* is already git-ignored so you can drop media in freely.

Key Features
Two-sided Platform – Separate flows for Riders and Drivers, plus an Admin panel

Live Geolocation & Tracking – Socket.io streams driver coordinates; Mapbox renders animated markers

Real-Time Matching – Drivers receive a ride-request modal with live countdown

Price Estimation – Haversine distance + surge factor = dynamic fare

Secure JWT Auth – Refresh tokens & role-based route guards

Payment Gateway – Stripe checkout (test cards ready)

Trip History & Ratings – Both parties can view, filter, and review past trips

Mobile-Ready PWA – Add to Home Screen on Android/iOS, offline splash

Tech Stack
Layer	Tech
Frontend	React 18, Vite, React Router 6, Tailwind CSS, Zustand for global state, Mapbox GL JS
Backend	Node.js 20, Express 5, Socket.io 4, Stripe SDK, Cloudinary (driver avatars)
Database	MongoDB Atlas, Mongoose 7, Redis (pub/sub & session cache)
Dev Tools	TypeScript, ESLint + Prettier, Husky + lint-staged, Vitest, GitHub Actions CI
Deployment	Render (Backend & Web), Cloudflare R2 (static), Railway (Redis)

Folder Structure
```
uber-clone/
├── backend/
│   ├── src/
│   │   ├── config/           # DB, Redis, Cloudinary, Stripe
│   │   ├── controllers/      # Route handlers (auth, rides, payments, admin)
│   │   ├── models/           # Mongoose schemas
│   │   ├── routes/           # Express routers, versioned (/api/v1)
│   │   ├── sockets/          # Socket.io event handlers
│   │   ├── middleware/       # Auth, error, validation
│   │   ├── utils/            # helpers (distance, surge, logger)
│   │   ├── tests/            # Vitest API tests
│   │   └── server.ts         # Entry – creates HTTP & WebSocket servers
│   ├── .env.example
│   └── tsconfig.json
├── frontend/
│   ├── public/               # Static index.html, manifest.json
│   └── src/
│       ├── assets/           # Images, icons
│       ├── components/       # Reusable UI (MapView, RideCard, Loader)
│       ├── pages/            # Rider pages, Driver pages, Admin pages
│       ├── hooks/            # useAuth, useSocket, useMapbox
│       ├── store/            # Zustand slices
│       ├── services/         # Axios API wrappers
│       ├── routes/           # Protected & role-based routes
│       ├── App.tsx
│       └── main.tsx
├── docs/
│   └── screenshots/          # GIFs & PNGs for README
├── scripts/                  # Seed data, migration helpers
└── README.md                 # You are here

```

Getting Started

```

# 1. Clone & install
git clone https://github.com/princebhatt03/uber-clone.git
cd uber-clone
npm run setup        # runs `npm i` in both /backend & /frontend

# 2. Configure env
cp backend/.env.example backend/.env
cp frontend/.env.local.example frontend/.env.local
# → Add your Mapbox token, Stripe keys, etc.

# 3. Seed some users & rides
npm run seed

# 4. Start in dev (concurrently)
npm run dev

# Frontend → http://localhost:5173
# Backend  → http://localhost:5000


```
