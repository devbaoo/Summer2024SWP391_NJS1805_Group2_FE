
import ListingDetailsV3 from "@/components/listing-details-v3";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Listing Single – Details V3 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const ListingDetailsPage3 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <ListingDetailsV3 />
    </>
  );
};

export default ListingDetailsPage3
