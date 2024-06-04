
import MyFavourites from "@/components/dashboard/my-favourites";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Favourites || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}


const MyFavouritePage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <MyFavourites />
    </>
  );
};

export default MyFavouritePage;
