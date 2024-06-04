import Faq from "@/components/faq";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Faq || MomMilk88",
  description: "MomMilk88",
};

const FaqPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Faq />
    </>
  );
};

export default FaqPage;
