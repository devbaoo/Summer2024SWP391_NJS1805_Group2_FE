import AgencyV2 from "@/components/agency-view/agency-v2";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Simple Listing – AgencyV2 || MomMilk88",
  description: "MomMilk88",
};

const AgencyV2Page = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <AgencyV2 />
    </>
  );
};

export default AgencyV2Page;
