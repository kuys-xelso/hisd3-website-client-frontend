import { createRouter as createTanStackRouter, Link } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { AlertCircle, ArrowLeft } from 'lucide-react'

// Global error boundary fallback for routes
const DefaultErrorComponent = ({ error }: { error: Error }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 min-h-[60vh] text-center">
      <AlertCircle className="h-16 w-16 text-destructive mb-6" />
      <h1 className="text-3xl font-bold mb-2">Oops! Something went wrong.</h1>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        We're sorry, an unexpected error occurred while loading this page. Our team has been notified.
      </p>
      {process.env.NODE_ENV === 'development' && error?.message && (
        <div className="bg-destructive/10 text-destructive p-4 rounded-md overflow-x-auto max-w-2xl mb-6 text-sm text-left font-mono">
          {error.message}
        </div>
      )}
      <button
        onClick={() => window.location.reload()}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8"
      >
        Refresh Page
      </button>
    </div>
  )
}

// Global 404 fallback for missing routes
const DefaultNotFoundComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 min-h-[60vh] text-center">
      <img src="/404-not-found.svg" alt="404 Not Found" className="w-64 h-auto mb-8 opacity-90" />
      <h1 className="text-3xl font-bold mb-2 text-primary">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        We searched everywhere, but we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
    </div>
  )
}

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultErrorComponent: DefaultErrorComponent,
    defaultNotFoundComponent: DefaultNotFoundComponent,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
