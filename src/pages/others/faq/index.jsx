
import Faq from "@/components/faq";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Faq || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const FaqPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Faq />
    </>
  );
};

export default FaqPage
