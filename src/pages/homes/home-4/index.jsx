
import HomeMain from "@/components/home-4";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-4 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const HomePage4 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage4
