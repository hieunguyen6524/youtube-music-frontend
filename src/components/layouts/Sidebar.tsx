import { PlusIcon, ListMusicIcon, CompassIcon, HomeIcon } from "lucide-react";
import { Button } from "../ui/button";

interface SidebarProps {
  showSidebar: boolean;
}

function Sidebar({ showSidebar }: SidebarProps) {
  return (
    <aside
      className={`${
        showSidebar ? "w-56" : "w-20"
      } bg-black border-r border-zinc-800 p-2 flex flex-col gap-2 transition-all duration-300`}
    >
      {/* Trang chủ (active) */}
      <Button
        variant="ghost"
        className=" text-white hover:bg-gray-800 justify-start "
      >
        <HomeIcon size={20} />
        {showSidebar && <span>Trang chủ</span>}
      </Button>
      <Button
        variant="ghost"
        className=" text-white hover:bg-gray-800 justify-start  "
      >
        <CompassIcon size={20} />
        {showSidebar && <span>Khám phá</span>}
      </Button>
      <Button
        variant="ghost"
        className=" text-white hover:bg-gray-800 justify-start "
      >
        <ListMusicIcon size={20} />
        {showSidebar && <span>Thư viện</span>}
      </Button>

      {/* Divider */}
      {showSidebar && <hr className="border-zinc-700 my-2 mx-5" />}

      {/* Danh sách phát mới */}
      {showSidebar && (
        <Button
          variant="ghost"
          className=" text-white hover:bg-gray-800 justify-start "
        >
          <PlusIcon /> Danh sách phát mới
        </Button>
      )}

      {/* Playlist mẫu */}
      {showSidebar && (
        <div className=" mt-3 pl-2 flex flex-col gap-2 text-zinc-400 text-sm overflow-y-scroll">
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
