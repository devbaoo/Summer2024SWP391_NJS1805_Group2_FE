
import Terms from "@/components/terms-conditions";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Terms & Conditions || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const TermsPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Terms />
    </>
  );
};

export default TermsPage
