import { useState } from "react";

import { ArtistCard } from "./ArtistCard";
import { TrackItem } from "./TrackItem";
import { TabButton } from "../watch/TabButton";

import { SongList } from "./SongList";
import type { Song } from "@/types/song";

const demoSongs: Song[] = [
  {
    id: "1",
    title: "Không Thể Cùng Nhau Suốt Kiếp (cùng với Mr. Siro)",
    artist: "Hòa Minzy",
    album: "Không Thể Cùng Nhau Suốt Kiếp",
    duration: "5:01",
    plays: "48 Tr",
    image:
      "https://lh3.googleusercontent.com/QJtcEQWHoUzY73CrMQkqncrCMcA0E3jHtGw32Ll6m-rcty2VQTF2JGIPtAcfvsVQMPk1bsY2lc1GgRs=w544-h544-l90-rj",
  },
  {
    id: "2",
    title: "Rời Bỏ",
    artist: "Hòa Minzy",
    album: "Rời Bỏ",
    duration: "4:38",
    plays: "94 Tr",
    image:
      "https://lh3.googleusercontent.com/x3ek9bnHB0ahVNWjPGUC4zOkwwhhikJqcls94z-dIfwlUv6sf_7wjLR1mdgVML4ArkMG-bltY5n9Xjxjnw=w544-h544-l90-rj",
  },
  {
    id: "2",
    title: "Rời Bỏ",
    artist: "Hòa Minzy",
    album: "Rời Bỏ",
    duration: "4:38",
    plays: "94 Tr",
    image:
      "https://lh3.googleusercontent.com/x3ek9bnHB0ahVNWjPGUC4zOkwwhhikJqcls94z-dIfwlUv6sf_7wjLR1mdgVML4ArkMG-bltY5n9Xjxjnw=w544-h544-l90-rj",
  },
  {
    id: "2",
    title: "Rời Bỏ",
    artist: "Hòa Minzy",
    album: "Rời Bỏ",
    duration: "4:38",
    plays: "94 Tr",
    image:
      "https://lh3.googleusercontent.com/x3ek9bnHB0ahVNWjPGUC4zOkwwhhikJqcls94z-dIfwlUv6sf_7wjLR1mdgVML4ArkMG-bltY5n9Xjxjnw=w544-h544-l90-rj",
  },
  {
    id: "2",
    title: "Rời Bỏ",
    artist: "Hòa Minzy",
    album: "Rời Bỏ",
    duration: "4:38",
    plays: "94 Tr",
    image:
      "https://lh3.googleusercontent.com/x3ek9bnHB0ahVNWjPGUC4zOkwwhhikJqcls94z-dIfwlUv6sf_7wjLR1mdgVML4ArkMG-bltY5n9Xjxjnw=w544-h544-l90-rj",
  },
];

export default function ArtistSection() {
  const [activeTab, setActiveTab] = useState<
    "all" | "album" | "song" | "artist" | "playlist" | "disk"
  >("all");

  return (
    <div className="flex flex-1 justify-center pt-16">
      <div className="flex flex-col gap-5 w-[800px] h-full ">
        <div className="flex gap-1 py-2">
          <TabButton
            label="Tất cả"
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
            fit
            rounded="rounded-md"
          />
          <TabButton
            label="Bài hát"
            active={activeTab === "song"}
            onClick={() => setActiveTab("song")}
            fit
            rounded="rounded-md"
          />
          <TabButton
            label="Đĩa nhạc"
            active={activeTab === "disk"}
            onClick={() => setActiveTab("disk")}
            fit
            rounded="rounded-md"
          />
          <TabButton
            label="Danh sách phát của cộng đồng"
            active={activeTab === "album"}
            onClick={() => setActiveTab("album")}
            fit
            rounded="rounded-md"
          />

          <TabButton
            label="Nghệ sĩ"
            active={activeTab === "artist"}
            onClick={() => setActiveTab("artist")}
            fit
            rounded="rounded-md"
          />
          <TabButton
            label="Play list"
            active={activeTab === "playlist"}
            onClick={() => setActiveTab("playlist")}
            fit
            rounded="rounded-md"
          />
        </div>
        <div className="relative flex gap-2 justify-between">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Ảnh nền phóng to + blur */}
            <img
              src="https://lh3.googleusercontent.com/w5H5wFxyQLVlmcNALQsFXahPlmH9jKaWiVQyVAiiUb5XtidxKyQW7SA_pxld5dHtpenzIqcqeXSnO2k=w1920-h800-p-l90-rj"
              className="w-full h-full object-cover scale-100 blur-3xl"
              alt="banner"
            />
            <div className="absolute inset-0 bg-black/20" />
            {/* <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-black via-black/100 to-transparent" /> */}
          </div>

          <div className="flex justify-center pl-2">
            <ArtistCard />
          </div>

          {/* Right: Tracks */}
          <div className=" flex flex-col gap-2 w-1/2 bg-black/20 py-2 pl-2">
            <TrackItem
              image="https://lh3.googleusercontent.com/QJtcEQWHoUzY73CrMQkqncrCMcA0E3jHtGw32Ll6m-rcty2VQTF2JGIPtAcfvsVQMPk1bsY2lc1GgRs=w544-h544-l90-rj"
              title="Nỗi Đau Giữa Hòa Bình"
              artist="Hoà Minzy và Nguyễn Văn Chung"
              views="12 Tr"
            />
            <TrackItem
              image="https://lh3.googleusercontent.com/MSkQ5tD5erkL6LZad-fQAciq1Ztv0j2F1IPNg8IhrVPSmvDSvjKyrBIJpQFn-QZDMh8LWSoG2__P1Rj3=w544-h544-l90-rj"
              title="Bắc Bling (Bắc Ninh) (Prod. by Masew)"
              artist="Hoà Minzy, NSƯT"
              views="271 Tr"
            />
            <TrackItem
              image="https://lh3.googleusercontent.com/HQo6igEtZq-pfw8YDnobNqIZIGnmgIidy2PJuzrESJgKXZPrNsqe-fKmKm0IvrWPoYTHVw9X_csVbZxSIQ=w544-h544-l90-rj"
              title="Bật Tình Yêu Lên"
              artist="Tăng Duy Tân và Hoà Minzy"
              views="20 Tr"
            />
          </div>
        </div>
        {/* <TopSongs /> */}
        <SongList songs={demoSongs} onShowAll={() => console.log("Show all")} />
      </div>
    </div>
  );
}
