import properties from "@/data/properties";
import {
  GoogleMap,
  // Marker,
  MarkerClusterer,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
import { useMemo, useState } from "react";

import { Link } from "react-router-dom";

const option = {
  zoomControl: true,
  disableDefaultUI: true,
  styles: [
    {
      featureType: "all",
      elementType: "geometry.fill",
      stylers: [
        {
          weight: "2.00",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#9c9c9c",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#7b7b7b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#46bcec",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#c8d7d4",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#070707",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
  ],
  scrollwheel: true,
};
const containerStyle = {
  width: "100%",
  height: "100%",
};
export default function Map() {
  const [getLocation, setLocation] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAAz77U5XQuEME6TpftaMdX0bBelQxXRlM",
  });
  const center = useMemo(
    () => ({ lat: 27.411201277163975, lng: -96.12394824867293 }),
    []
  );

  // add long & lat
  const locationHandler = (location) => {
    setLocation(location);
  };

  // close handler
  const closeCardHandler = () => {
    setLocation(null);
  };

  return (
    <>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
          options={option}
        >
          <MarkerClusterer>
            {(clusterer) =>
              properties.slice(0, 6).map((marker) => (
                <MarkerF
                  key={marker.id}
                  position={{
                    lat: Number(marker.lat),
                    lng: Number(marker.long),
                  }}
                  clusterer={clusterer}
                  onClick={() => locationHandler(marker)}
                ></MarkerF>
              ))
            }
          </MarkerClusterer>
          {getLocation !== null && (
            <InfoWindow
              position={{
                lat: getLocation.lat,
                lng: getLocation.long,
              }}
              onCloseClick={closeCardHandler}
            >
              <div>
                <div className={`feat_property margin0 home7 style3 bdrrn `}>
                  <div className="thumb">
                    <img
                      className="img-whp w-100 h-100 cover"
                      src={getLocation.img}
                      alt="fp1.jpg"
                    />
                    <div className="thmb_cntnt">
                      <ul className="tag mb0">
                        {getLocation.saleTag.map((val, i) => (
                          <li className="list-inline-item" key={i}>
                            <a href="#">{val}</a>
                          </li>
                        ))}
                      </ul>
                      <ul className="icon mb0">
                        <li className="list-inline-item">
                          <a href="#">
                            <span className="flaticon-transfer-1"></span>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <span className="flaticon-heart"></span>
                          </a>
                        </li>
                      </ul>

                      <Link
                        to={`/listing-details-v1/${getLocation.id}`}
                        className="fp_price"
                      >
                        ${getLocation.price}
                        <small>/mo</small>
                      </Link>
                    </div>
                  </div>
                  <div className="details">
                    <div className="tc_content">
                      <p className="text-thm">{getLocation.type}</p>
                      <h4>
                        <Link to={`/listing-details-v2/${getLocation.id}`}>
                          {getLocation.title}
                        </Link>
                      </h4>
                      <p>
                        <span className="flaticon-placeholder"></span>
                        {getLocation.location}
                      </p>

                      <ul className="prop_details mb0">
                        {getLocation.itemDetails.map((val, i) => (
                          <li className="list-inline-item" key={i}>
                            <a href="#">
                              {val.name}: {val.number}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* End .tc_content */}
                  </div>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </>
  );
}
