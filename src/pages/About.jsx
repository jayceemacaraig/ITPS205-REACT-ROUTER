import React from "react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div>
        <h4>INTRODUCTION</h4>
        <h1>About Me.</h1>
        <p>
          {" "}
          A passionate Web Developer based in the Philippines, dedicated to
          crafting intuitive and visually engaging websites. With a strong focus
          on clean design and seamless functionality, I create digital
          experiences that bring ideas to life.
        </p>
      </div>
      <div>
        <div className="card">
          <img
            src="https://img.icons8.com/?size=100&id=UY4sjFXvqNUG&format=png&color=FFFFFF"
            alt="FRONTEND"
          ></img>
          <h1>Front-End Development</h1>
          <p>
            Creating visually stunning and user-friendly interfaces using HTML,
            CSS, and JavaScript. I focus on responsive design and ensuring a
            seamless user experience.
          </p>
        </div>
        <div className="card">
          <img
            src="https://img.icons8.com/?size=100&id=Ujhf0HU7XkM4&format=png&color=FFFFFF"
            alt="BACKEND"
          ></img>
          <h1>Back-End Development</h1>
          <p>
            Building robust server-side applications and databases with
            technologies like Node.js, Python, and SQL to ensure efficiency and
            scalability.
          </p>
        </div>
        <div className="card">
          <img
            src="https://img.icons8.com/?size=100&id=06Tj4dNxfXPO&format=png&color=FFFFFF"
            alt="EDITING"
          ></img>
          <h1>Graphic Design</h1>
          <p>
            Designing creative visuals, logos, and graphics that align with
            brand identities and captivate audiences, using tools like Adobe
            Photoshop and Illustrator.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
