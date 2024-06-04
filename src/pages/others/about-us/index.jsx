
import AboutUs from "@/components/about-us";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'About Us || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const AboutUsPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <AboutUs />
    </>
  );
};

export default AboutUsPage
