import { Outlet } from "react-router-dom";

export default function AuthenLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex w-full max-w-md flex-col items-center gap-6 p-6">
        <div className="w-full rounded-xl overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
