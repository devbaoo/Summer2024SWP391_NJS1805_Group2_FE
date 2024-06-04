
import BlogV1 from "@/components/blog-list-1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Blog List 1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const Blog1Page = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <BlogV1 />
    </>
  );
};

export default Blog1Page
