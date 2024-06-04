const MortgageFiltering = () => {
  return (
    <>
      <li className="search_area">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"

            placeholder="Total Amount"
          />
          <label >
            <span className="flaticon-money-bag"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li className="search_area">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            
            placeholder="Down Payment"
          />
          <label >
            <span className="flaticon-money-bag"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li className="search_area">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            
            placeholder="Interest Rate"
          />
          <label >
            <span className="flaticon-percent"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li className="search_area">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
           
            placeholder="Loan Term (Years)"
          />
          <label >
            <span className="flaticon-calendar"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two mb-3">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick  form-select">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Yearly</option>
              <option>Daily</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}
      <li>
        <div className="search_option_button style2">
          <button type="submit" className="btn btn-block btn-thm w-100">
            Search
          </button>
        </div>
      </li>
    </>
  );
};

export default MortgageFiltering;
