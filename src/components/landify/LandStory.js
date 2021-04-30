import React from "react";
// import LandTailorFeat from './LandTailorFeat'
import { ReactComponent as HubSpot } from "../../assest/images/HubspotStory.svg";
import { ReactComponent as BookStory } from "../../assest/images/BookMyShowStory.svg";
import { ReactComponent as Airbnb } from "../../assest/images/bookStory.svg";

const LandStory = () => {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#D5FAFC" }}>
      <div className="row">
        <div className="col">
          <div>
            <h2
              style={{ fontWeight: 800, fontSize: "48px", lineHeight: "64px" }}
            >
              Real Stories from Real Customers
            </h2>
            <div
              style={{ fontWeight: 400, fontSize: "18px", lineHeight: "32px" }}
              className="text-lead"
            >
              Get inspired by these stories.
            </div>
          </div>
          {/*  */}
          <div
            className="p-2"
            style={{
              backgroundColor: "#FFFFFF",
              width: "350px",
              borderRadius: "8px",
            }}
          >
            <HubSpot />
            <div className="text-lead">
              To quickly start my startup landing page design, I was looking for
              a landing page UI Kit. Landify is one of the best landing page UI
              kit I have come across. It’s so flexible, well organised and
              easily editable.
            </div>
            <div>
              <subtitle>
                Floyd Miles
                <div>Vice President, GoPro</div>
              </subtitle>
            </div>
          </div>
        </div>
      </div>
      <div className="row"></div>
      <div className="col">
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFFFFF",
            width: "350px",
            borderRadius: "8px",
          }}
        >
          <BookStory />
          <div className="text-lead">
            I used landify and created a landing page for my startup within a
            week. The Landify UI Kit is simple and highly intuitive, so anyone
            can use it.
          </div>
          <subtitle>
            Jane Cooper
            <div>CEO, Airbnb</div>
          </subtitle>
        </div>
        <div
          className="p-2"
          style={{
            backgroundColor: "#FFFFFF",
            width: "350px",
            borderRadius: "8px",
          }}
        >
          <Airbnb />
          <div className="text-lead">Landify saved our time in designing my company page.</div>
          <subtitle>
            Kristin Watson
            <div>Co-Founder, BookMyShow</div>
          </subtitle>
        </div>
      </div>
    </div>
  );
};

export default LandStory;
