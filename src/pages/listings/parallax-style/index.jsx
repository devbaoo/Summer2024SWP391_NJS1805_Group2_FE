import ParallaxStyle from "@/components/listing-style/parallax-style";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Listing - Parallax Style || MomMilk88",
  description: "MomMilk88",
};

const ParallaxStylePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ParallaxStyle />
    </>
  );
};

export default ParallaxStylePage;
