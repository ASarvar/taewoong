import Layout from "@/src/layout/Layout";
import Gallery from "@/src/components/Gallery";
import { imageSets } from "../images"; // Import the image data
import GalleryLayout from "@/src/components/GalleryLayout";


const CityPage = ({ params }) => {
  const { city } = params;
  const images = imageSets[city] || [];

  return (
    <Layout>
      {/* Use the new PageBanner component */}
      <GalleryLayout city={city} />

      {/* Gallery Start */}
      <Gallery images={images} />
      {/* Gallery End */}
    </Layout>
  );
};

export async function generateStaticParams() {
  return [
    { city: "samarkand" },
    { city: "bukhara" },
    { city: "aral" },
    { city: "kyzylkum" },
    { city: "amirsoy" },
    { city: "khiva" },
  ];
}

export default CityPage;
