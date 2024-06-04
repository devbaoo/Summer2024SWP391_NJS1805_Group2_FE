import Terms from "@/components/terms-conditions";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Terms & Conditions || MomMilk88",
  description: "MomMilk88",
};

const TermsPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Terms />
    </>
  );
};

export default TermsPage;
