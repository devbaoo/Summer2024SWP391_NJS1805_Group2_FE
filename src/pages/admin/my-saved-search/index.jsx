
import MySavedSearch from "@/components/dashboard/my-saved-search";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Saved Search || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const MySavedSearchPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <MySavedSearch />
    </>
  );
};

export default MySavedSearchPage
