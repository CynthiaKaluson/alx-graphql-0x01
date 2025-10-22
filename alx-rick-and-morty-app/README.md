# ALX Rick and Morty App

A Next.js application with Apollo Client integration for querying the Rick and Morty GraphQL API.

## Features

- Next.js with TypeScript
- Apollo Client for GraphQL
- Tailwind CSS for styling
- ESLint for code quality
- GraphQL queries for Rick and Morty API

## Setup

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
alx-rick-and-morty-app/
├── src/
│   ├── graphql/
│   │   ├── apolloClient.ts
│   │   └── queries.ts
│   ├── pages/
│   │   ├── _app.tsx
│   │   └── index.tsx
│   └── styles/
│       └── globals.css
├── package.json
└── tsconfig.json
\`\`\`

## GraphQL Integration

- **Apollo Client**: Configured to connect to Rick and Morty GraphQL API
- **Queries**: Pre-defined GraphQL queries for episodes data
- **Type Safety**: TypeScript interfaces for GraphQL responses

## API Endpoint

\`https://rickandmortyapi.com/graphql\`
