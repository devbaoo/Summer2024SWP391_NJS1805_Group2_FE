
import MyProfile from "@/components/dashboard/my-profile";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Profile || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const MyProfilePage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <MyProfile />
    </>
  );
};

export default MyProfilePage;
