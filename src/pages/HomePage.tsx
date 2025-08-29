import AlbumSection from "@/components/albums/AlbumSection";
import QuickPlaySection from "@/components/albums/QuickPlaySection";

function HomePage() {
  return (
    <div className="flex flex-col">
      <AlbumSection />
      <QuickPlaySection />
      <AlbumSection />
      <QuickPlaySection />
    </div>
  );
}

export default HomePage;
