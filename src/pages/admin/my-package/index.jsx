
import MyPackage from "@/components/dashboard/my-package";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Package || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const MyPackagepage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <MyPackage />
    </>
  );
};

export default MyPackagepage;
