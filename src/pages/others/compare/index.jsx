
import Compare from "@/components/compare";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Compare || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const ComparePage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Compare />
    </>
  );
};

export default ComparePage
