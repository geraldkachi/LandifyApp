import React from "react";
import { ReactComponent as Years } from "../../assest/images/robust.svg";

const LandYear = () => {
  return (
    <div className="container min-vh-100">
      <div className="row mt-5">
        <div className="col-md-6 text-left my-auto">
          <h2>Our 18 years of achievements</h2>
          <div className="text-lead">
            With our super powers we have reached this
          </div>
        </div>
        {/*  */}
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-center align-items-center">
                <Years className="mr-3" />
                <div>
                  <h4 style={{ width: "191px", fontSize: "28px" }}>10,000+</h4>
                  <div className="text-lead">Downloads per day</div>
                </div>
              </div>
              <div className="col-">
                  <div className="d-flex justify-content-center align-items-center">
                <Years className="mr-3" />
                <div>
                  <h4 style={{ width: "191px", fontSize: "28px" }}>10,000+</h4>
                  <div className="text-lead">Downloads per day</div>
                </div>
              </div>
              </div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default LandYear;
