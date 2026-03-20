# Global Project Rules (Portfolio)

## Tech Stack
- **Frontend:** React.js with TypeScript.
- **Styling:** Tailwind CSS.
- **Testing:** Playwright (E2E).
- **Package Manager:** npm (or pnpm/yarn).
- **Zustand:** For state management.

## Project Structure (Mandatory)
```
e2e/
  tests/ -- all tests
src/
  main.tsx -- React entrypoint
  App.tsx -- React main component
  apps/ -- all apps/windows separate each folder
  store/ -- global state management
  components/ -- generics components
  data/ -- project data
```

## Code and Behavior Guidelines (Mandatory)
1. **Strict Typing:** The use of the `any` type is strictly forbidden (absolutely no `:: any` or loose `any` throughout the code). All TypeScript must be strongly typed with well-defined interfaces or types.
2. **No Hallucinations:** Never invent variables, methods, or properties that do not exist. Always check the official documentation before suggesting a solution or implementing an API.
3. **Review-Driven Method:** Development follows the Pair Programming philosophy. You (AI) must plan and explain what you are going to do. Wait for my approval before generating or modifying files in bulk or running terminal commands.
4. **Visual Test-Driven Development (TDD) Workflow:** You must strictly follow these 3 steps for every new feature (skip if the feature is only visual and doesn't need a test):
   - **Step 1:** Write the E2E test in the `e2e/tests/` folder.
   - **Step 2:** Run the test in the terminal and show me the failure log.
   - **Step 3:** ONLY AFTER the test fails, write the React/Tailwind code in `src/` to make it pass.
5. **Small Changes:** Keep changes granular. Avoid modifying too many files at the same time.
6. **Linter Compliance (ESLint):** The project uses ESLint. You MUST write code that strictly complies with the rules defined in our `.eslintrc.json`. Before marking a code generation task as complete or asking for my final review, you must run the linting command (e.g., `npm run lint -- --fix` or `npx eslint . --fix`) in the background to self-correct any spacing, formatting, or strict equality issues. Never present code that fails the linter.

## Styling Guidelines (Tailwind CSS)
1. **Dynamic Inline Styles:** Strictly reserve inline `style={{}}` attributes ONLY for values that are highly dynamic and cannot be known at build time (e.g., dynamic theme hex codes from global state). Use standard Tailwind classes for everything else.
2. **Interactive States (CSS over JS):** Heavily utilize Tailwind's `group`, `group-hover`, `group-focus`, and `peer` modifiers for component interactions (like hovering a card to highlight an image) instead of using React `onMouseEnter`/`onMouseLeave` state, whenever possible.
3. **OS UI Paradigms:** For unbuntu/OS components, utilize Tailwind's modern modifiers for glassmorphism (e.g., `bg-black/30 backdrop-blur-md border border-white/10`) and depth (e.g., `ring`, `shadow-2xl`) to maintain the desktop operating system aesthetic.
4. **Class Formatting & Linter Compliance:** Keep Tailwind `className` strings on a single line by default. ONLY break the string into multiple lines if it is strictly necessary to resolve a linter error (e.g., exceeding maximum line length). When breaking is required, you MUST use template literals with spaces inside the braces `{ \`...\` }` and group the classes logically onto new indented lines.
   - **Example of correct multiline formatting:**
     ```tsx
     <h1
       className={ `text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text 
         bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 animate-pulse` }
     >
       Title
     </h1>
     ```

## Tests
1. **Instead of "page.goto('http://localhost:5173/')" use "await page.goto('/')"**