import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { CombinedGraphQLErrors } from '@apollo/client/errors';
import { ErrorLink } from '@apollo/client/link/error';
import { triggerGlobalError } from './backendErrorContext';

const isDev = import.meta.env.DEV;

const httpLink = new HttpLink({
    uri: isDev ? '/graphql' : (import.meta.env.VITE_GRAPHQL_API_URL || ''),
    headers: {
        'ngrok-skip-browser-warning': 'true',
    },
});

const errorLink = new ErrorLink(({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
        // GraphQL errors from the server — only trigger for internal server errors
        const hasServerError = error.errors.some((err) => {
            const code = (err.extensions?.code as string) || '';
            return code === 'INTERNAL_SERVER_ERROR' || !code;
        });
        if (hasServerError) {
            triggerGlobalError();
        }
    } else {
        // Network error — backend is unreachable
        triggerGlobalError();
    }
});

export const apolloClient = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
});
