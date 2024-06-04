
import AgencyV1 from "@/components/agency-view/agency-v1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Simple Listing – AgencyV1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const AgencyV1Page = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <AgencyV1 />
    </>
  );
};

export default AgencyV1Page
