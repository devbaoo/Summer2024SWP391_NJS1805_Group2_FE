import Gallery from "@/components/gallery";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Gallery || MomMilk88",
  description: "MomMilk88",
};

const PageGallery = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Gallery />
    </>
  );
};

export default PageGallery;
