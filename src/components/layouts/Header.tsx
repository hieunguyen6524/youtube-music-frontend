// import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

import { useAppState } from "@/hooks/useAppState";
import { SearchBox } from "./SearchBox";

type HeaderProps = {
  isTransparent: boolean;
  player: boolean;
};

export default function Header({ isTransparent, player }: HeaderProps) {
  const { showSidebar, setShowSidebar } = useAppState();

  return (
    <header
      className={`${
        player || !isTransparent ? "bg-black" : null
      } h-16 flex items-center justify-between px-2 text-white shadow-sm fixed top-0 left-0 right-0 z-50`}
    >
      {/* Left section (menu + logo) */}
      <div className="w-56 flex items-center gap-2 ">
        <Button
          variant="ghost"
          className="text-white/80 hover:text-white hover:bg-black/20 
             dark:hover:bg-white/20 justify-center transition-colors"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <MenuIcon size={24} />
        </Button>
        <a href="/home">
          <img
            src="/ytmusic.svg"
            alt="YouTube Music Logo"
            className="w-18 cursor-pointer"
          />
        </a>
      </div>

      {/* Search */}
      <div className="flex flex-1 justify-between">
        <SearchBox />

        {/* User */}
        <div className="flex items-center gap-2 px-10">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-gray-800"
          >
            Đăng nhập
          </Button>
          <Avatar className="h-8 w-8 ">
            <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
