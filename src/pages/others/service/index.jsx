
import Service from "@/components/service";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Service || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const ServicePage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Service />
    </>
  );
};

export default ServicePage
