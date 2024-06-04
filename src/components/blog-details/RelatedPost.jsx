import { Link } from "react-router-dom";
import relatedPostContent from "../../data/blogs";


const RelatedPost = () => {
  return (
    <>
      {relatedPostContent.slice(4, 6).map((item) => (
        <div className="col-md-6 col-lg-6" key={item.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link to={`/blog-details/${item.id}`}>
                <img
                 
                  className="img-whp w-100 h-100 cover"
                  src={item.img}
                  alt={item.img}
                />
              </Link>
            </div>
            <div className="details">
              <div className="tc_content">
                <h4>
                  <Link to={`/blog-details/${item.id}`}>{item.title}</Link>
                </h4>
                <ul className="bpg_meta">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="flaticon-calendar"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{item.postedDate}</a>
                  </li>
                </ul>
                <p>{item.postDescriptions.slice(0, 65)}</p>
              </div>
              {/* End . tc_content */}

              <div className="fp_footer">
                <ul className="fp_meta float-start mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <img
                       
                        src={item.posterAvatar}
                        alt={item.posterAvatar}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{item.posterName}</a>
                  </li>
                </ul>
                <a className="fp_pdate float-end text-thm" href="#">
                  Read More <span className="flaticon-next"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedPost;
