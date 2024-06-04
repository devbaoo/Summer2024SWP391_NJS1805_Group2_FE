import MapHeader from "@/components/listing-style/map-header";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Listing - Map Header || MomMilk88",
  description: "MomMilk88",
};

const MapHeaderPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MapHeader />
    </>
  );
};

export default MapHeaderPage;
