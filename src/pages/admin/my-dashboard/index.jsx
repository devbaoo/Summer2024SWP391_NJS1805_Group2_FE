
import MyDashboard from "@/components/dashboard/my-dashboard";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Dashboard || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}


const MyDashboardPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <MyDashboard />
    </>
  );
};

export default MyDashboardPage;
