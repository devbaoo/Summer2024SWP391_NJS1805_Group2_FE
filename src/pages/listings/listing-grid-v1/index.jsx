
import GridV1 from "@/components/listing-grid/grid-v1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Simple Listing – Grid V1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const ListingGridPage1 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <GridV1 />
    </>
  );
};

export default ListingGridPage1
