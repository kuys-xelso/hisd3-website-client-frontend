import { createContext, useContext, useState, useCallback } from "react";

interface BackendErrorContextValue {
  hasError: boolean;
  setHasError: (value: boolean) => void;
  clearError: () => void;
}

const BackendErrorContext = createContext<BackendErrorContextValue>({
  hasError: false,
  setHasError: () => {},
  clearError: () => {},
});

export const useBackendError = () => useContext(BackendErrorContext);

// Module-level callback registered by the provider so Apollo (a singleton)
// can call it without a direct React dependency
let _globalErrorSetter: ((value: boolean) => void) | null = null;

export const registerGlobalErrorSetter = (
  fn: (value: boolean) => void
) => {
  _globalErrorSetter = fn;
};

export const triggerGlobalError = () => {
  _globalErrorSetter?.(true);
};

export const BackendErrorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hasError, setHasError] = useState(false);

  const stableSetHasError = useCallback((value: boolean) => {
    setHasError(value);
    registerGlobalErrorSetter(stableSetHasError);
  }, []);

  // Register setter on mount so Apollo link can access it
  registerGlobalErrorSetter(stableSetHasError);

  const clearError = useCallback(() => {
    setHasError(false);
  }, []);

  return (
    <BackendErrorContext.Provider value={{ hasError, setHasError: stableSetHasError, clearError }}>
      {children}
    </BackendErrorContext.Provider>
  );
};
