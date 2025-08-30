// ChannelPage.tsx
import { useAppState } from "@/hooks/useAppState";
import TopSongs from "../albums/TopSongs";
import Layout from "../layouts/Layout";

// export default function ChannelPage() {
//   return (
//     <div className="relative min-h-screen ">
//       {/* Background image */}
//       <img
//         src="https://lh3.googleusercontent.com/w5H5wFxyQLVlmcNALQsFXahPlmH9jKaWiVQyVAiiUb5XtidxKyQW7SA_pxld5dHtpenzIqcqeXSnO2k=w1920-h800-p-l90-rj"
//         alt="Channel Background"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Overlay tối */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Gradient fade ở dưới */}
//       <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black via-black/70 to-transparent" />

//       {/* Nội dung trang: header + sidebar + content */}
//       <div className="relative z-10 ">
//         <Layout isBackground={true}>
//           <div className="p-8 text-white pt-120">
//             <h1 className="text-4xl font-bold">Hòa Minzy</h1>
//             <p className="text-gray-200 mt-2">
//               21,8 Tr khán thính giả mỗi tháng
//             </p>
//             <p className="mt-4 max-w-2xl">
//               Nguyễn Thị Hòa, thường được biết đến với nghệ danh Hòa Minzy, sinh
//               năm 1995, là một nữ ca sĩ kiêm diễn viên người Việt Nam.
//             </p>

//             <div className="flex gap-4 mt-6">
//               <button className="px-4 py-2 bg-white text-black rounded-full font-semibold">
//                 Trộn bài
//               </button>
//               <button className="px-4 py-2 bg-white/20 text-white rounded-full font-semibold">
//                 Đã đăng ký 2,98 Tr
//               </button>
//             </div>
//           </div>
//           <TopSongs />
//         </Layout>
//       </div>
//     </div>
//   );
// }

export default function ChannelPage() {
  const { scrollY } = useAppState();
  const overlayOpacity = Math.min(scrollY / 400, 1);
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
        <div className="relative z-10 pt-[400px] w-[1280px]">
          <h1 className="text-4xl font-bold">Hòa Minzy</h1>

          <p className="text-gray-200 mt-2">21,8 Tr khán thính giả mỗi tháng</p>

          <p className="mt-4 max-w-2xl">
            Nguyễn Thị Hòa, thường được biết đến với nghệ danh Hòa Minzy, sinh
            năm 1995, là một nữ ca sĩ kiêm diễn viên người Việt Nam.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 bg-white text-black rounded-full font-semibold">
              Trộn bài
            </button>

            <button className="px-4 py-2 bg-white/20 text-white rounded-full font-semibold">
              Đã đăng ký 2,98 Tr
            </button>
          </div>
          <TopSongs />
          <TopSongs />
        </div>
      </div>
    </Layout>
  );
}
