import { useState } from "react";
import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Player from "./Player";
import PlayerPage from "./WatchPage";

import { AnimatePresence, motion } from "framer-motion";
import { useAppState } from "@/hooks/useAppState";

type LayoutProps = {
  children: ReactNode;
  isBackground?: boolean;
};

export default function Layout({
  children,
  isBackground = false,
}: LayoutProps) {
  const { showSidebar } = useAppState();
  const [player, setPlayer] = useState(false);

  // width khi mở/tắt sidebar (header-left cũng sẽ theo width này)
  const sidebarWidth = showSidebar ? "w-56" : "w-20";

  const [isScrolling, setIsScrolling] = useState(true);

  return (
    <div
      className={`flex flex-col h-screen text-white ${
        !isBackground && "bg-black"
      }`}
    >
      {/* Header */}
      <div className="relative z-50">
        <Header isScrolling={isScrolling} player={player} />
      </div>

      {/* Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`${sidebarWidth} relative z-40`}>
          <Sidebar
            player={player}
            showSidebar={showSidebar}
            isScrolling={isScrolling}
          />
        </div>

        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden relative top-0 left-0 right-0 bottom-0 z-10">
          {/* Main content */}
          <main
            className="flex-1 overflow-y-auto"
            onScroll={(e) =>
              setIsScrolling((e.target as HTMLElement).scrollTop > 0)
            }
          >
            {children}
          </main>

          {/* PlayerPage Overlay chỉ đè lên children */}
          <AnimatePresence>
            {player && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 right-0 top-0 bg-[#111] z-40"
              >
                <PlayerPage />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Thanh Player luôn dưới cùng */}
      <Player openPlayerPage={setPlayer} />
    </div>
  );
}
