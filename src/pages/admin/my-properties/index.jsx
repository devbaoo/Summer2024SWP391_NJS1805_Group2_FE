
import MyProperties from "@/components/dashboard/my-properties";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const MyPropertiesPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <MyProperties />
    </>
  );
};

export default MyPropertiesPage;
