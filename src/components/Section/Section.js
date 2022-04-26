// import Carousel from "./Carousel";

import Carousel from "./Carousel";

const Section = (props) => {
  return (
    <div className="section">
      <header>{props.title}</header>
      <div className="carousel">
        {props.pictures.map((pic, index) => {
          return <Carousel key={index} pictures={pic} />;
        })}
      </div>
    </div>
  );
};

export default Section;
