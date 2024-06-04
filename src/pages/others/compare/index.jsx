import Compare from "@/components/compare";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Compare || MomMilk88",
  description: "MomMilk88",
};

const ComparePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Compare />
    </>
  );
};

export default ComparePage;
