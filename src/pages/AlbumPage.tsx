import AlbumInfo from "@/components/albums/AlbumInfo";
import AlbumSection from "@/components/albums/AlbumSection";
import TrackList from "@/components/albums/TrackList";
import Layout from "@/components/layouts/Layout";

export default function AlbumPage() {
  return (
    <Layout>
      <div className="relative flex justify-center">
        {/* Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Ảnh nền phóng to + blur */}
          <img
            src="https://lh3.googleusercontent.com/QJtcEQWHoUzY73CrMQkqncrCMcA0E3jHtGw32Ll6m-rcty2VQTF2JGIPtAcfvsVQMPk1bsY2lc1GgRs=w544-h544-l90-rj"
            className="w-full h-full object-cover scale-110 blur-2xl"
            alt="banner"
          />
          {/* Overlay tối để dễ nhìn chữ */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Gradient từ dưới lên */}
          <div className="absolute inset-x-0 bottom-0 h-[1000px] bg-gradient-to-t from-black via-black/100 to-transparent" />
        </div>

        {/* Nội dung */}
        <div className="flex pt-[100px] w-full">
          {/* Album Info */}
          <AlbumInfo />

          {/* Tracklist */}
          <div className="w-1/2">
            <TrackList />
            <div className="mt-10 -m-8">
              <AlbumSection />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
