import MyProfile from "@/components/dashboard/my-profile";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "My Profile || MomMilk88",
  description: "MomMilk88",
};

const MyProfilePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyProfile />
    </>
  );
};

export default MyProfilePage;
