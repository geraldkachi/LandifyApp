import React from "react";
import LandNav from "./LandNav";
import LandHero from "./LandHero";
import LandTailor from "./LandTailor";
import LandStory from "./LandStory";
import LandYear from "./LandYear";

const LandHeroPage = () => {
  return (
    <>
      <div className="min-vh-100">
        <LandNav />
        <LandHero />
      </div>

      <LandTailor className="mx-auto" />
      <LandStory className="mx-auto" />
      <LandYear className="mx-auto" />
    </>
  );
};

export default LandHeroPage;
