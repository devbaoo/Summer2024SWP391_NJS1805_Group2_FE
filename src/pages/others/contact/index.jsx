
import Contact from "@/components/contact";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Contact || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const ContactPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Contact />
    </>
  );
};

export default ContactPage
