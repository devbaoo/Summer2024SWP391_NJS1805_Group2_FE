import Map from "@/components/common/Map";

const LocationField = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyAddress">Address</label>
          <input type="text" className="form-control" id="propertyAddress" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyState">County / State</label>
          <input type="text" className="form-control" id="propertyState" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyCity">City</label>
          <input type="text" className="form-control" id="propertyCity" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="neighborHood">Neighborhood</label>
          <input type="text" className="form-control" id="neighborHood" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="zipCode">Zip</label>
          <input type="text" className="form-control" id="zipCode" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Country</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Turkey">Turkey</option>
            <option data-tokens="Iran">Iran</option>
            <option data-tokens="Iraq">Iraq</option>
            <option data-tokens="Spain">Spain</option>
            <option data-tokens="Greece">Greece</option>
            <option data-tokens="Portugal">Portugal</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <div className="h400 bdrs8" id="map-canvas">
            <div className="gmap_canvas pe-none">
            <Map/>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="googleMapLat">Latitude (for Google Maps)</label>
          <input type="text" className="form-control" id="googleMapLat" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="googleMapLong">Longitude (for Google Maps)</label>
          <input type="text" className="form-control" id="googleMapLong" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Google Map Street View</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Turkey">Street View v1</option>
            <option data-tokens="Iran">Street View v2</option>
            <option data-tokens="Iraq">Street View v3</option>
            <option data-tokens="Spain">Street View v4</option>
            <option data-tokens="Greece">Street View v5</option>
            <option data-tokens="Portugal">Street View v6</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end">Next</button>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default LocationField;
