import { PlusIcon, CompassIcon, HomeIcon, BookmarkIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  showSidebar: boolean;
  isScrolling: boolean;
  player: boolean;
}

function Sidebar({ showSidebar, isScrolling, player }: SidebarProps) {
  const navigate = useNavigate();
  return (
    <aside
      className={`${showSidebar ? "w-56" : "w-20"}
    ${
      player || showSidebar || isScrolling ? "bg-black" : "bg-transparent"
    } fixed top-0 left-0 h-full  border-zinc-800 pt-16 p-2 flex flex-col gap-2 transition-all duration-300`}
    >
      {/* Trang chủ (active) */}
      <Button
        variant="ghost"
        className="text-white/80 hover:text-white hover:bg-black/20 
             dark:hover:bg-white/20 justify-start transition-colors"
        onClick={() => navigate("/home")}
      >
        <HomeIcon size={20} />
        {showSidebar && <span>Trang chủ</span>}
      </Button>
      <Button
        variant="ghost"
        className="text-white/80 hover:text-white hover:bg-black/20 
             dark:hover:bg-white/20 justify-start transition-colors"
      >
        <CompassIcon size={20} />
        {showSidebar && <span>Khám phá</span>}
      </Button>

      <Button
        variant="ghost"
        className="text-white/80 hover:text-white hover:bg-black/20 
             dark:hover:bg-white/20 justify-start transition-colors"
      >
        <BookmarkIcon size={20} />
        {showSidebar && <span>Thư viện</span>}
      </Button>

      {/* Divider */}
      {showSidebar && <hr className="border-zinc-400 my-2 mx-5" />}

      {/* Danh sách phát mới */}
      {showSidebar && (
        <Button
          variant="ghost"
          className="text-white/80 hover:text-white hover:bg-black/20 
             dark:hover:bg-white/20 justify-start transition-colors"
        >
          <PlusIcon /> Danh sách phát mới
        </Button>
      )}

      {/* Playlist mẫu */}
      {showSidebar && (
        <div className="mt-3 pl-2 flex flex-col gap-2 text-zinc-400 text-sm overflow-y-auto">
          <div>
            <p className="text-white">Nhạc đã thích</p>
            <p className="text-xs text-zinc-500">Danh sách tự động</p>
          </div>
          <div>
            <p className="text-white">[HOT HOT!!!] Đón Xem Conan...</p>
            <p className="text-xs text-zinc-500">POPS Anime</p>
          </div>
          <div>
            <p className="text-white">Tập podcast để thưởng thức...</p>
            <p className="text-xs text-zinc-500">Danh sách tự động</p>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
