import ListingMapV1 from "@/components/listing-half-map/listing-map-v1";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Listing - Map V1 || MomMilk88",
  description: "MomMilk88",
};

const ListingMapPage1 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ListingMapV1 />
    </>
  );
};

export default ListingMapPage1;
