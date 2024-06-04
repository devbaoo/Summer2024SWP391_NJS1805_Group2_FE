
import AgencyV2 from "@/components/agency-view/agency-v2";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Simple Listing – AgencyV2 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const AgencyV2Page = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <AgencyV2 />
    </>
  );
};

export default AgencyV2Page
