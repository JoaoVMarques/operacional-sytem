# Portfolio

## 🚀 Technologies

- **Frontend:** [React.js](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **E2E Testing:** [Playwright](https://playwright.dev/)

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended), along with your preferred package manager (`npm`, `yarn`, or `pnpm`).

### Installation

1. Clone the repository and navigate into the project directory.

2. Install the core dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers (for E2E testing):
   ```bash
   npx playwright install --with-deps
   ```

## 🛠️ Scripts

- `npm run dev` - Starts the Vite development server on `http://localhost:5173`.
- `npm run build` - TypeScript compilation and Vite production build.
- `npm run preview` - Locally previews the production build.
- `npm run test:e2e` - Runs Playwright End-to-End tests in the CLI.
- `npx playwright test --ui` - Opens the Playwright UI mode for interactive testing and debugging.

## 🏗️ Project Structure

- **`/src`**: Contains all React components, global styles (`index.css`), and frontend logic.
- **`/e2e`**: Houses Playwright UI automation tests, configurations, and reports.

## 📝 Development Workflow

This project strictly follows a **Visual Test-Driven Development (TDD)** methodology:
1. **Write the E2E Test:** Create the test in the `/e2e` folder.
2. **Watch it Fail:** Run the test in the terminal and inspect the failure log.
3. **Implement:** Write the React/Tailwind code in `/src` to make the test pass.
