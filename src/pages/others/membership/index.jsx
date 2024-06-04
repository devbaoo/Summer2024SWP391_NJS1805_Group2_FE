
import Membership from "@/components/membership";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Membership || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const MembershipPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Membership />
    </>
  );
};

export default MembershipPage
