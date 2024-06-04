
import ListingMapV4 from "@/components/listing-half-map/listing-map-v4";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Listing - Map V4 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const ListingMapPage4 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <ListingMapV4 />
    </>
  );
};

export default ListingMapPage4
