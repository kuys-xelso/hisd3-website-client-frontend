import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { ApolloProvider } from "@apollo/client/react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MeshBackground } from "@/components/layout/MeshBackground";

import { apolloClient } from "../lib/apollo";
import {
  BackendErrorProvider,
  useBackendError,
} from "../lib/backendErrorContext";
import { ErrorPage } from "@/components/ErrorPage";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Hospital Information System Designed by Doctors for Doctors",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/hisd3-logo.svg",
      },
    ],
  }),
  shellComponent: RootDocument,
  errorComponent: ({ error }) => {
    const err = error instanceof Error ? error : new Error("An unexpected error occurred");
    return (
      <RootDocument>
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <ErrorPage error={err} title="Application Error" />
          </main>
          <Footer />
        </div>
      </RootDocument>
    );
  },
});
function AppContent({ children }: { children: React.ReactNode }) {
  const { error, clearError } = useBackendError();

  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {error ? <ErrorPage error={error} onRetry={clearError} /> : children}
      </main>
      <Footer />
    </div>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ApolloProvider client={apolloClient}>
          <BackendErrorProvider>
            <MeshBackground />
            <AppContent>{children}</AppContent>
          </BackendErrorProvider>
        </ApolloProvider>
        <Scripts />
      </body>
    </html>
  );
}
