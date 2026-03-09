# GraphQL Codegen Documentation

This project uses [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) to automatically generate TypeScript types for your GraphQL queries and mutations. This ensures full type safety and provides excellent autocompletion in your IDE.

## How it works

1.  **Schema**: It fetches the latest schema from your backend (via the ngrok URL).
2.  **Documents**: It scans your `src/graphql/**/*.ts` files for any GraphQL operations defined with `gql`.
3.  **Generation**: It creates a `generated/` folder inside `src/graphql/` containing types and a type-safe `gql` function.

## Commands

You can find these scripts in `package.json`:

- `npm run codegen`: Runs the generator once. Use this whenever the backend schema changes or you add a new query.
- `npm run codegen:watch`: Runs the generator in watch mode. It will automatically re-generate types as you save changes to your `.ts` files.

## How to use the generated types

Instead of using `gql` from `@apollo/client`, you should now use the **generated** `gql` function.

### Example:

**Before (Manual typing):**
```typescript
import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react';

const MY_QUERY = gql`
  query GetTeam {
    team { name }
  }
`;

// TypeScript doesn't know what 'data' is here unless you manual type it
const { data } = useQuery(MY_QUERY); 
```

**After (With Codegen):**
```typescript
import { gql } from '@/graphql/generated'; // Use the generated gql!
import { useQuery } from '@apollo/client/react';

const MY_QUERY = gql`
  query GetTeam {
    team { name }
  }
`;

// 'data' is now automatically typed! 
// data.team[0].name will have autocompletion.
const { data } = useQuery(MY_QUERY);
```

## Benefits
- **No more `any`**: Your data is strictly typed based on the schema.
- **Instant Feedback**: If you query a field that doesn't exist, your IDE will show an error immediately.
- **Efficiency**: No need to manually write `interface` or `type` definitions for your GraphQL responses.
