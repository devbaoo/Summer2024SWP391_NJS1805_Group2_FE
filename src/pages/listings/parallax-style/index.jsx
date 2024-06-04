
import ParallaxStyle from "@/components/listing-style/parallax-style";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Listing - Parallax Style || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const ParallaxStylePage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <ParallaxStyle />
    </>
  );
};

export default ParallaxStylePage
