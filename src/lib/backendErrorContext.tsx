import { createContext, useContext, useState, useCallback } from "react";

interface BackendErrorContextValue {
  error: Error | null;
  setError: (error: Error | null) => void;
  clearError: () => void;
}

const BackendErrorContext = createContext<BackendErrorContextValue>({
  error: null,
  setError: () => {},
  clearError: () => {},
});

export const useBackendError = () => useContext(BackendErrorContext);

// Module-level callback registered by the provider so Apollo (a singleton)
// can call it without a direct React dependency
let _globalErrorSetter: ((error: Error | null) => void) | null = null;

export const registerGlobalErrorSetter = (
  fn: (error: Error | null) => void
) => {
  _globalErrorSetter = fn;
};

export const triggerGlobalError = (error: Error) => {
  _globalErrorSetter?.(error);
};

export const BackendErrorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [error, setError] = useState<Error | null>(null);

  const stableSetError = useCallback((newError: Error | null) => {
    setError(newError);
    registerGlobalErrorSetter(stableSetError);
  }, []);

  // Register setter on mount so Apollo link can access it
  registerGlobalErrorSetter(stableSetError);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return (
    <BackendErrorContext.Provider value={{ error, setError: stableSetError, clearError }}>
      {children}
    </BackendErrorContext.Provider>
  );
};
