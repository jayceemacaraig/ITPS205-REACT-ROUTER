import React from "react";

const WorkExperience = () => {
  return (
    <section className="experience-section">
      <div>
        <h4>JOURNEY SO FAR.</h4>
        <h1>Work Experience.</h1>
      </div>
      <div>
        <div className="experience-card">
          <h1>Front-End Developer</h1>
          <h4>XYZ Tech Solutions</h4>

          <ul>
            <li>
              Collaborated with a team of developers to design and implement
              responsive web applications using HTML, CSS, JavaScript, and
              React.
            </li>
            <li>
              Developed and maintained user-friendly, high-performance front-end
              features for customer-facing websites.
            </li>
            <li>
              Optimized web pages for speed, performance, and SEO, resulting in
              a 25% increase in page load times.
            </li>
          </ul>
          <p>January 2021 - Present</p>
        </div>

        <div className="experience-card">
          <h1>Full Stack Developer </h1>
          <h4>Innovative Web Solutions</h4>

          <ul>
            <li>
              Designed and built dynamic web applications using Node.js,
              Express, MongoDB, and React, ensuring end-to-end functionality.
            </li>
            <li>
              Developed RESTful APIs to integrate front-end features with
              back-end systems, improving overall system performance.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver projects on
              time while meeting client requirements and specifications.
            </li>
          </ul>
          <p>June 2019 - December 2020</p>
        </div>

        <div className="experience-card">
          <h1>Junior Web Developer </h1>
          <h4> Creative Design Studio</h4>

          <ul>
            <li>
              Assisted in building websites for small businesses using
              WordPress, HTML, CSS, and JavaScript
            </li>
            <li>
              Designed and implemented interactive UI components that enhanced
              user engagement and improved conversion rates.
            </li>
            <li>
              Implemented basic back-end functionality and integrated
              third-party APIs for e-commerce solutions.
            </li>
          </ul>
          <p>March 2018 - May 2019</p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
