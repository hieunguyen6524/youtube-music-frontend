type TrackItemProps = {
  image: string;
  title: string;
  artist: string;
  views: string;
};

export function TrackItem({ image, title, artist, views }: TrackItemProps) {
  return (
    <div className="flex items-center gap-3 hover:bg-white/5 rounded-md px-2 py-1 cursor-pointer transition">
      {/* Thumbnail */}
      <img src={image} alt={title} className="w-12 h-12 rounded object-cover" />

      {/* Info */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* để truncate hoạt động */}
        <span className="text-white font-medium">{title}</span>
        <span className=" text-sm text-gray-400 flex items-center justify-between gap-1 min-w-0">
          <span>Bài hát</span>
          <span>•</span>
          <span className="truncate w-3/7 ">{artist}</span>
          <span>•</span>
          <span>{views} lượt phát</span>
        </span>
      </div>
    </div>
  );
}
