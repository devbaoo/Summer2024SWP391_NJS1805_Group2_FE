import GridV5 from "@/components/listing-grid/grid-v5";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Simple Listing – Grid V5 || MomMilk88",
  description: "MomMilk88",
};

const ListingGridPage5 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <GridV5 />
    </>
  );
};

export default ListingGridPage5;
