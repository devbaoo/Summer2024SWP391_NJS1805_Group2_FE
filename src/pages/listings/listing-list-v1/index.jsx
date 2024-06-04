import ListV1 from "@/components/listing-list/list-v1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Simple Listing – List V1 || MomMilk88",
  description: "MomMilk88",
};

const ListingPage1 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ListV1 />
    </>
  );
};

export default ListingPage1;
