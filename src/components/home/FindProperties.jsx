import { Link } from "react-router-dom";
import findProperties from "../../data/findProperties";


const FindProperties = () => {
  return (
    <>
      {findProperties.slice(0, 4).map((item) => (
        <div className={`col-lg-4 ${item.column}`} key={item.id}>
          <Link to="/listing-grid-v1" className="properti_city d-block">
            <div className="thumb">
              <img
             
                className="img-fluid w100 h-100 cover"
                src={item.img}
                alt="pc1.jpg"
              />
            </div>
            <div className="overlay">
              <div className="details">
                <h4>{item.name}</h4>
                <p>{item.number} Properties</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
