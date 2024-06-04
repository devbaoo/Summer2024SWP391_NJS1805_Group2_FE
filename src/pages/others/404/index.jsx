import NotFound from "@/components/404";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "404 Not Found || MomMilk88",
  description: "MomMilk88",
};

const NotFoundPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
