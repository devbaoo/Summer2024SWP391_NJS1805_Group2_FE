
import ListV1 from "@/components/listing-list/list-v1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Simple Listing – List V1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const ListingPage1 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <ListV1 />
    </>
  );
};

export default ListingPage1
