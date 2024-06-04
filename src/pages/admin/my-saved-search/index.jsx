import MySavedSearch from "@/components/dashboard/my-saved-search";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "My Saved Search || MomMilk88",
  description: "MomMilk88",
};

const MySavedSearchPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MySavedSearch />
    </>
  );
};

export default MySavedSearchPage;
