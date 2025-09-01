import { createContext, useState } from "react";

import type { AppStateContextType } from "@/types/appStateTypes";

const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined
);

function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <AppStateContext.Provider
      value={{
        scrollY,
        setScrollY,
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export { AppStateContext, AppStateProvider };
