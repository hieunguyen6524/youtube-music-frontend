import AlbumSection from "@/components/albums/AlbumSection";
import QuickPlaySection from "@/components/albums/QuickPlaySection";
import Layout from "@/components/layouts/Layout";

function HomePage() {
  return (
    <Layout>
      <div className="flex flex-col pt-16 ">
        <AlbumSection />
        <QuickPlaySection />
        <AlbumSection />
        <QuickPlaySection />
      </div>
    </Layout>
  );
}

export default HomePage;
