import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const isDev = import.meta.env.DEV;

const httpLink = new HttpLink({
    // In dev: use relative path → goes through Vite proxy (bypasses CORS)
    // In prod: use the full API URL from env
    uri: isDev ? '/graphql' : (import.meta.env.VITE_GRAPHQL_API_URL || ''),
    headers: {
        'ngrok-skip-browser-warning': 'true',
    },
});

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

