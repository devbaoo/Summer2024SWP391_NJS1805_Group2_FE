import CreateListing from "@/components/dashboard/create-listing";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Create Listing || MomMilk88",
  description: "MomMilk88",
};

const CreateListingPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <CreateListing />
    </>
  );
};

export default CreateListingPage;
