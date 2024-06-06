import HomeMain from "@/components/home-4";

import MetaComponent from "@/components/common/MetaComponent";
import BannerVoucher from "@/components/home-4/Bannervoucher";

const metadata = {
  title: "Home-4 || MomMilk88",
  description: "MomMilk88",
};

const HomePage4 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <BannerVoucher />
      <HomeMain />
    </>
  );
};

export default HomePage4;
