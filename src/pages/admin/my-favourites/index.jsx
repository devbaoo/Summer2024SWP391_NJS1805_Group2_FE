import MyFavourites from "@/components/dashboard/my-favourites";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "My Favourites || MomMilk88",
  description: "MomMilk88",
};

const MyFavouritePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyFavourites />
    </>
  );
};

export default MyFavouritePage;
