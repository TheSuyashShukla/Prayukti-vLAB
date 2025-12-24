# Prayukti vLAB - MMMUT Digital Logic & Design (DLD)

**Prayukti vLAB** is a scalable virtual laboratory prototype built for Madan Mohan Malaviya University of Technology (MMMUT). This repository contains the Monorepo for the DLD (Digital Logic Design) subject simulation.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), Tailwind CSS, Shadcn UI, React Flow, Zustand
- **Backend**: Express.js, MongoDB (Mongoose)
- **Repo Manager**: Turborepo

## Prerequisites

- Node.js (v18+)
- MongoDB (Local or Atlas)
- npm or pnpm

## Installation

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    npm install
    # or
    pnpm install
    ```
3.  **Environment Setup**:
    - `apps/api/.env` is created automatically. ensure `MONGO_URI` is correct.

## Running Locally

To start both Frontend and Backend concurrently:

```bash
npm run dev
```

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## Features Implemented

1.  **Landing Page**: Visual replica of MMMUT official website.
2.  **Authentication**: Restricted login for `@mmmut.ac.in` domain.
3.  **Student Dashboard**: View enrolled subjects (DLD).
4.  **DLD Labs**: List of practicals with theory and procedure.
5.  **Simulation Engine**:
    - Drag & drop components (AND, OR, NOT, Input, Output).
    - Wiring support.
    - Real-time logic evaluation (Truth table verification).
    - Save Circuit functionality (Persists to MongoDB).

## Folder Structure

- `frontend`: Next.js frontend application (formerly `apps/web`).
- `backend`: Express.js backend API (formerly `apps/api`).
- `packages/ui`: Shared UI components.

## Testing the Prototype

1.  Go to `http://localhost:3000`.
2.  Click "Enter Virtual Lab".
3.  Login with any email ending in `@mmmut.ac.in` (e.g., `student@mmmut.ac.in`).
4.  Navigate to DLD Subject -> Select Practical 1.
5.  Read Theory and click "Enter Simulation".
6.  Drag Gates from the toolbar, connect them using handles.
7.  Toggle "Input" nodes to see "Output" nodes change color (Red = High/1, Gray = Low/0).
8.  Click "Save Circuit" to save your work.

---
*Built by Antigravity*
