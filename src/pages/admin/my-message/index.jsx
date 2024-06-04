import MyMessage from "@/components/dashboard/my-message";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "My Message || MomMilk88",
  description: "MomMilk88",
};

const MyMessagePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyMessage />
    </>
  );
};

export default MyMessagePage;
