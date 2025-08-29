import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type AlbumSectionProps = {
  id: number;
  title: string;
  artist: string;
  type: string; // "Đĩa đơn" | "Đĩa nhạc" | ...
  cover: string;
};

const albums: AlbumSectionProps[] = [
  {
    id: 1,
    title: "Nỗi đau giữa hòa bình",
    artist: "Hòa Minzy",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/QJtcEQWHoUzY73CrMQkqncrCMcA0E3jHtGw32Ll6m-rcty2VQTF2JGIPtAcfvsVQMPk1bsY2lc1GgRs=w544-h544-l90-rj",
  },
  {
    id: 2,
    title: "Đừng Làm Trái Tim Anh Đau",
    artist: "Sơn Tùng M-TP",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/wnhSwf3pm3Bz5w4HAT-KELF7JBC92oLFgjAl4KTQO4ze46D1DGZqYgTv-UW6QuEmmeE8uBFR-EyMiP8=w544-h544-l90-rj",
  },
  {
    id: 3,
    title: "Phép màu",
    artist: "MAYDAYs",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/ozsO4hId6yzw9WqIxwiEmCqfcwj3rz2JMarYtcy2BajMFyvyLFV697UNm3fGQBGp0604waYNJaippxoU=w544-h544-l90-rj",
  },
  {
    id: 4,
    title: "Phép màu",
    artist: "MAYDAYs",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/ozsO4hId6yzw9WqIxwiEmCqfcwj3rz2JMarYtcy2BajMFyvyLFV697UNm3fGQBGp0604waYNJaippxoU=w544-h544-l90-rj",
  },
  {
    id: 5,
    title: "Phép màu",
    artist: "MAYDAYs",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/ozsO4hId6yzw9WqIxwiEmCqfcwj3rz2JMarYtcy2BajMFyvyLFV697UNm3fGQBGp0604waYNJaippxoU=w544-h544-l90-rj",
  },
  {
    id: 6,
    title: "Phép màu",
    artist: "MAYDAYs",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/ozsO4hId6yzw9WqIxwiEmCqfcwj3rz2JMarYtcy2BajMFyvyLFV697UNm3fGQBGp0604waYNJaippxoU=w544-h544-l90-rj",
  },
  {
    id: 7,
    title: "Phép màu",
    artist: "MAYDAYs",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/ozsO4hId6yzw9WqIxwiEmCqfcwj3rz2JMarYtcy2BajMFyvyLFV697UNm3fGQBGp0604waYNJaippxoU=w544-h544-l90-rj",
  },
  {
    id: 8,
    title: "Phép màu",
    artist: "MAYDAYs",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/ozsO4hId6yzw9WqIxwiEmCqfcwj3rz2JMarYtcy2BajMFyvyLFV697UNm3fGQBGp0604waYNJaippxoU=w544-h544-l90-rj",
  },
  {
    id: 9,
    title: "Phép màu",
    artist: "MAYDAYs",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/ozsO4hId6yzw9WqIxwiEmCqfcwj3rz2JMarYtcy2BajMFyvyLFV697UNm3fGQBGp0604waYNJaippxoU=w544-h544-l90-rj",
  },
  {
    id: 10,
    title: "Phép màu",
    artist: "MAYDAYs",
    type: "Bài hát",
    cover:
      "https://lh3.googleusercontent.com/ozsO4hId6yzw9WqIxwiEmCqfcwj3rz2JMarYtcy2BajMFyvyLFV697UNm3fGQBGp0604waYNJaippxoU=w544-h544-l90-rj",
  },
];

// export default function AlbumSection() {
//   return (
//     <div className="relative px-6 py-4">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-2xl font-bold">Đĩa đơn và đĩa nhạc mới</h2>
//         <div className="flex items-center gap-2">
//           <button className="px-3 py-1 rounded-full bg-zinc-800 text-sm hover:bg-zinc-700">
//             Xem thêm
//           </button>
//           <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700">
//             <ChevronLeft size={20} />
//           </button>
//           <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700">
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Scrollable row */}
//       <div className="group relative overflow-x-auto overflow-y-hidden ">
//         <div className="group flex gap-4 pb-4 overflow-hidden hover:overflow-auto">
//           {albums.map((album) => (
//             <motion.div
//               key={album.id}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.2 }}
//               className="min-w-[160px] cursor-pointer"
//             >
//               <div className="w-full aspect-square rounded-md overflow-hidden">
//                 <img
//                   src={album.cover}
//                   alt={album.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3 className="mt-2 text-sm font-semibold truncate">
//                 {album.title}
//               </h3>
//               <p className="text-xs text-zinc-400 truncate">
//                 {album.type} • {album.artist}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function AlbumSection() {
  return (
    <div className=" px-6 py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-5xl font-bold">Chọn nhanh đài phát</h2>
        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 rounded-full bg-zinc-800 text-sm font-medium hover:bg-zinc-700">
            Xem thêm
          </button>
          <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700">
            <ChevronLeft />
          </button>
          <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Scrollable row */}

      <div className="group relative flex gap-4 pb-4 overflow-x-auto scroll-smooth">
        {albums.map((album) => (
          <motion.div
            key={album.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="min-w-[250px] cursor-pointer "
          >
            <div className="w-full aspect-square rounded-md overflow-hidden">
              <img
                src={album.cover}
                alt={album.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-2 text-sm font-semibold truncate">
              {album.title}
            </h3>
            <p className="text-xs text-zinc-400 truncate">
              {album.type} • {album.artist}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
