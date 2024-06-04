
import ListingMapV1 from "@/components/listing-half-map/listing-map-v1";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Listing - Map V1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const ListingMapPage1 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <ListingMapV1 />
    </>
  );
};

export default ListingMapPage1
