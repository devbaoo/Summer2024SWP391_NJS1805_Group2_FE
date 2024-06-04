import GridV6 from "@/components/listing-grid/grid-v6";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Simple Listing – Grid V6 || MomMilk88",
  description: "MomMilk88",
};

const ListingGridPage6 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <GridV6 />
    </>
  );
};

export default ListingGridPage6;
