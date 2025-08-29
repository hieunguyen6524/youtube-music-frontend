import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MenuIcon, Search } from "lucide-react";
import type React from "react";

type HeaderProps = {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setShowSidebar }: HeaderProps) {
  return (
    <header className="h-16 flex items-center justify-between p-2 border-b border-gray-800 bg-[#121212] text-white shadow-sm ">
      {/* Logo */}
      <div className="flex w-1/2 justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className=" text-white hover:bg-gray-800 "
            onClick={() => setShowSidebar((prev) => !prev)}
          >
            <MenuIcon size={24} />
          </Button>

          <a href="/">
            <img
              src="/ytmusic.svg"
              alt="YouTube Music Logo"
              className="w-18 cursor-pointer"
            />
          </a>
        </div>

        <div className="flex items-center w-3/2 max-w-lg">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Tìm bài hát, đĩa nhạc, nghệ sĩ, podcast..."
              className="w-3/3 h-10 pl-10 pr-4 py-2 bg-gray-900 text-white border-gray-700 rounded-b-md focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* User avatar and login */}
      <div className="flex items-center gap-2">
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
    </header>
  );
}
