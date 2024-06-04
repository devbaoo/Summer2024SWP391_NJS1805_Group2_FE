
import MyMessage from "@/components/dashboard/my-message";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Message || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const MyMessagePage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <MyMessage />
    </>
  );
};

export default MyMessagePage;
