import Service from "@/components/service";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Service || MomMilk88",
  description: "MomMilk88",
};

const ServicePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Service />
    </>
  );
};

export default ServicePage;
