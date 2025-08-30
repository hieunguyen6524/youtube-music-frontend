import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MenuIcon, Search } from "lucide-react";
import type React from "react";

type HeaderProps = {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  isTop: boolean;
};

export default function Header({ setShowSidebar, isTop }: HeaderProps) {
  return (
    <header
      className={`${
        !isTop && "bg-black"
      } h-16 flex items-center justify-between px-2 text-white shadow-sm fixed top-0 left-0 right-0 z-50`}
    >
      {/* Left section (menu + logo) */}
      <div className="w-56 flex items-center gap-2 ">
        <Button
          variant="ghost"
          className="text-white/80 hover:text-white hover:bg-black/20 
             dark:hover:bg-white/20 justify-center transition-colors"
          onClick={() => setShowSidebar((prev) => !prev)}
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
        <div className="flex flex-1 justify-center max-w-lg  rounded-lg overflow-hidden">
          <div className="relative w-full text-white font-semibold">
            <Input
              type="text"
              placeholder="Tìm bài hát, đĩa nhạc, nghệ sĩ, podcast..."
              className="w-full h-10 pl-10 pr-4 py-2 bg-zinc-700 opacity-50 focus:bg-black focus:opacity-100  focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
          </div>
        </div>

        {/* User */}
        <div className="flex items-center gap-2 ">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-gray-800"
          >
            Đăng nhập
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
