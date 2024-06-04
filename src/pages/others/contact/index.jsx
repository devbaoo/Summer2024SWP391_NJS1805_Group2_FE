import Contact from "@/components/contact";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Contact || MomMilk88",
  description: "MomMilk88",
};

const ContactPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Contact />
    </>
  );
};

export default ContactPage;
