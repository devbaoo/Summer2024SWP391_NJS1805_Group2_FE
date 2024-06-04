import MyProperties from "@/components/dashboard/my-properties";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "My Properties || MomMilk88",
  description: "MomMilk88",
};

const MyPropertiesPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyProperties />
    </>
  );
};

export default MyPropertiesPage;
