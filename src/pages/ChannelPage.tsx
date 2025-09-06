// ChannelPage.tsx
import TopSongs from "../components/albums/TopSongs";
import Layout from "../components/layouts/Layout";
import { useEffect, useState } from "react";

export default function ChannelPage() {
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    function test(e: Event) {
      const calcualtex = Math.min((e.target as HTMLElement).scrollTop / 400, 1);
      setOverlayOpacity(calcualtex);
    }
    document.documentElement.addEventListener("scroll", test, true);
  }, []);

  return (
    <Layout>
      <div className="relative flex justify-center">
        {/* Banner */}
        <div className="fixed top-0 left-0 right-0 h-2/3 -z-10">
          <img
            src="https://lh3.googleusercontent.com/w5H5wFxyQLVlmcNALQsFXahPlmH9jKaWiVQyVAiiUb5XtidxKyQW7SA_pxld5dHtpenzIqcqeXSnO2k=w1920-h800-p-l90-rj"
            className="w-full h-full object-cover"
            alt="banner"
          />
          {/* <div className="absolute inset-0 bg-black/30" /> */}
          <div
            className="absolute inset-0 bg-black transition-opacity duration-100"
            style={{ opacity: overlayOpacity }}
          />
          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Nội dung channel */}
        <div className="flex flex-col gap-10 items-center z-10 pt-[400px] w-5/6">
          <div className="w-full">
            <h1 className="text-4xl font-bold">Hòa Minzy</h1>
            <p className="text-gray-200 mt-2">
              21,8 Tr khán thính giả mỗi tháng
            </p>
            <p className="mt-4 max-w-2xl">
              Nguyễn Thị Hòa, thường được biết đến với nghệ danh Hòa Minzy, sinh
              năm 1995, là một nữ ca sĩ kiêm diễn viên người Việt Nam.
            </p>

            <div className="flex gap-4 mt-6 ">
              <button className="px-4 py-2 bg-white text-black rounded-full font-semibold">
                Trộn bài
              </button>

              <button className="px-4 py-2 bg-white/20 text-white rounded-full font-semibold">
                Đã đăng ký 2,98 Tr
              </button>
            </div>
          </div>

          <div className=" pr-50">
            <TopSongs />
          </div>
        </div>
      </div>
    </Layout>
  );
}
