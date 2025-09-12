import { createContext, useState } from "react";

import type { AppStateContextType } from "@/types/appStateTypes";

const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined
);

function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppStateContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export { AppStateContext, AppStateProvider };
