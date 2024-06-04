import MyDashboard from "@/components/dashboard/my-dashboard";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Dashboard || MomMilk88",
  description: "MomMilk88",
};

const MyDashboardPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyDashboard />
    </>
  );
};

export default MyDashboardPage;
