import React from "react";
import PickMeals from "../assets/11.jpg";
import ChooseMeals from "../assets/22.jpg";
import DeliveryMeals from "../assets/33.jpg";


const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Apartment",
      text: "Elevating living spaces with quality and innovative apartment construction.",
    },
    {
      image: ChooseMeals,
      title: "Skyscraper",
      text: "Sky-high aspirations realized through meticulous planning and skyscraper construction expertise.",
    },
    {
      image: DeliveryMeals,
      title: "Bridge",
      text: "Bridging gaps with engineering precision, strength, and aesthetic mastery.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Constrution Projects</h1>
        <p className="primary-text">
        Currently, our team is actively engaged in several dynamic construction projects, showcasing our expertise and commitment.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;