import { useState } from "react";
import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Player from "./Player";
import PlayerPage from "./PlayerPage";

import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [player, setPlayer] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[#111] text-white">
      {/* Header */}
      <Header setShowSidebar={setShowSidebar} />

      {/* Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar showSidebar={showSidebar} />

        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          <main className="flex-1 overflow-y-auto p-4">{children}</main>

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
