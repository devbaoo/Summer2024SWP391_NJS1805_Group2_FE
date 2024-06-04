import Membership from "@/components/membership";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Membership || MomMilk88",
  description: "MomMilk88",
};

const MembershipPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Membership />
    </>
  );
};

export default MembershipPage;
