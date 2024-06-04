
import Gallery from "@/components/gallery";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Gallery || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const PageGallery = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Gallery />
    </>
  );
};

export default PageGallery
