# Global Project Rules (Portfolio)

## Tech Stack
- **Frontend:** React.js with TypeScript.
- **Styling:** Tailwind CSS.
- **Testing:** Playwright (E2E).
- **Package Manager:** npm (or pnpm/yarn).

## Project Structure (Mandatory)
- **Production Code:** All React components and logic MUST go inside the `src/` directory.
- **E2E Tests:** All Playwright test files MUST go inside an `e2e/` directory at the root level (e.g., `e2e/tests/`, `e2e/pages/`). Do NOT create test files or folders in the root directory or inside `src/`.

## Code and Behavior Guidelines (Mandatory)
1. **Strict Typing:** The use of the `any` type is strictly forbidden (absolutely no `:: any` or loose `any` throughout the code). All TypeScript must be strongly typed with well-defined interfaces or types.
2. **No Hallucinations:** Never invent variables, methods, or properties that do not exist. Always check the official documentation before suggesting a solution or implementing an API.
3. **Review-Driven Method:** Development follows the Pair Programming philosophy. You (AI) must plan and explain what you are going to do. Wait for my approval before generating or modifying files in bulk or running terminal commands.
4. **Visual Test-Driven Development (TDD) Workflow:** You must strictly follow these 3 steps for every new feature:
   - **Step 1:** Write the E2E test in the `e2e/tests/` folder.
   - **Step 2:** Run the test in the terminal and show me the failure log.
   - **Step 3:** ONLY AFTER the test fails, write the React/Tailwind code in `src/` to make it pass.
5. **Small Changes:** Keep changes granular. Avoid modifying too many files at the same time.