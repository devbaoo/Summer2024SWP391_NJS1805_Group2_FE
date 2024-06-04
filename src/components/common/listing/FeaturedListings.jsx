import { Link } from "react-router-dom";
import featureContent from "../../../data/properties";


const FeaturedListings = () => {
  return (
    <>
      {featureContent.slice(27, 30).map((item) => (
        <div className="media d-flex" key={item.id}>
          <Link to={`/listing-details-v1/${item.id}`}>
            <img
             
              className="align-self-start me-3 w-100 h-100 cover"
              src={item.img}
              alt="featured listing image"
            />
          </Link>

          <div className="media-body">
            <h5 className="mt-0 post_title">
              <Link to={`/listing-details-v1/${item.id}`}>{item.title}</Link>
            </h5>
            <Link to={`/listing-details-v1/${item.id}`}>
              ${item.price}/<small>/mo</small>
            </Link>

            <ul className="mb0">
              {item.itemDetails.map((val, i) => (
                <li key={i} className="list-inline-item">
                  {val.name}:{val.number} &nbsp;
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
