
import MyReview from "@/components/dashboard/my-review";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Review || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const MyReviewPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <MyReview />
    </>
  );
};

export default MyReviewPage
