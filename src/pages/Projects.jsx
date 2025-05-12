import React, { useState } from "react";
import chuables from "../../public/CHUABLES.png"
import facebook from "../../public/FACEBOOK.png"
import kuor from "../../public/KOUR.png"
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentStyle, setCurrentStyle] = useState(null);

  const slides = [
    {
      id: 1,
      img: chuables,
      h3: "Chuables Bakeshop",
      p: "A promotional website with a content of the bakeshop where users can visit and inquire with the shop through online",
      a: "https://jayceemacaraig.github.io/PELEC201--CHUABLES-/",
    },
    {
      id: 2,
      img: facebook,
      h3: "Facebook Clone",
      p: "A Front End design for social media app (facebook clone) using Material UI components and NextJS.",
      a: "https://www.facebook.com/",
    },
    {
      id: 3,
      img: kuor,
      h3: "Kour.io",
      p: " an action-packed, multiplayer FPS game that offers a dynamic and exciting gameplay experience. Players engage in fast-paced battles across various maps, with a wide selection of guns and game modes to choose from.",
      a: "https://kour.io/",
    },
  ];

  const totalSlides = slides.length;

  const moveSlide = (direction) => {
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
    setCurrentStyle(transformStyle);
  };

  const transformStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <section className="project-section" id="project">
      <div>
        <h4>MY WORKS</h4>
        <h1>Projects.</h1>
      </div>

      <div className="project-slider">
        <div className="slider-container" style={currentStyle}>
          {slides.map((slide) => (
            <div className="project-card" key={slide.id}>
              <div className="project-container">
                <img src={slide.img}></img>
                <h3>{slide.h3}</h3>
                <p>{slide.p}</p>
                <a href={slide.a} target="_blank">
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={() => moveSlide(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => moveSlide(1)}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Projects;
