import Wrapper from "@/components/layout/Wrapper";
import HomeMain from "./homes/home-4";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home-1 || MomMilk88",
  description: "MomMilk88",
};

export default function Home() {
  return (
    <Wrapper>
      <MetaComponent meta={metadata} />
      <HomeMain />
    </Wrapper>
  );
}
