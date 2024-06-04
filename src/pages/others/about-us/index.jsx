import AboutUs from "@/components/about-us";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "About Us || MomMilk88",
  description: "MomMilk88",
};

const AboutUsPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
