const FaqContent = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div id="headingOne">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              What is MilkForMomAndBabies?
            </button>
          </div>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                MilkForMomAndBabies is an e-commerce platform specializing in
                providing milk products for pregnant mothers and babies. The
                platform helps users easily search, and purchase milk products
                suitable for their needs.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingTwo">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              How do I create an account on MilkForMomAndBabies?
            </button>
          </div>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                To create an account, simply click the "Sign Up" button on the
                homepage, fill in the necessary personal information, and verify
                via email. Once confirmed, you can log in and use all the
                platform's features.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingThree">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do I search for the right milk products?
            </button>
          </div>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                You can use the search bar on the homepage to enter the product
                name or use filters such as brand, type of milk, age range, and
                price to find products that meet your needs.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingFour">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              What is the return policy of MilkForMomAndBabies?
            </button>
          </div>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                We offer a 30-day return policy from the date of receipt.
                Products must be intact, unused, and with the original purchase
                receipt. Please contact our customer service for detailed
                instructions.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingFive">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              What payment methods are accepted?
            </button>
          </div>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                We accept payments via credit card, debit card, e-wallet, and
                bank transfer. All payment transactions are secured to ensure
                your information is safe.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingSix">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              How do I track my order?
            </button>
          </div>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                After placing an order, you will receive a confirmation email
                with a tracking number. You can use this number to track the
                status of your order on our website.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingSeven">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Does MilkForMomAndBabies have a loyalty program?
            </button>
          </div>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                Yes, we have a loyalty program. When you purchase and accumulate
                reward points, you can use these points for discounts on future
                purchases. Details about the program will be updated on our
                website.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingEight">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              How do I contact customer service?
            </button>
          </div>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                You can contact customer service via email at
                baockse172296@fpt.edu.vn or call our hotline number provided on
                the website.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingNine">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              Is my personal information secure with MilkForMomAndBaby?
            </button>
          </div>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                We are committed to protecting your personal information. All
                personal data is encrypted and stored securely. We do not share
                your information with third parties without your consent.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingTen">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              Can I cancel my order after placing it?
            </button>
          </div>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                Yes, you can cancel your order within 24 hours of placing it.
                Please contact customer service with your order details for
                assistance with the cancellation.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}
      </div>
    </>
  );
};

export default FaqContent;
