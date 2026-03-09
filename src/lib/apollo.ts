import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_API_URL || '',
    headers: {
        'ngrok-skip-browser-warning': 'true',
    },
});

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

