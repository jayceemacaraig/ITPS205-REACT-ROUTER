import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      image:
        "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      alt: "HTML5",
    },
    {
      name: "CSS3",
      image:
        "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
      alt: "CSS3",
    },
    {
      name: "JavaScript",
      image:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      alt: "JavaScript",
    },
    {
      name: "React Js",
      image:
        "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
      alt: "React Js",
    },
    {
      name: "Node Js",
      image:
        "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      alt: "Node Js",
    },
    {
      name: "Next Js",
      image: "https://raphaelenciso.com/_next/static/media/next.a2632070.png",
      alt: "Next Js",
    },
    {
      name: "Typescript",
      image:
        "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
      alt: "Typescript",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
      alt: "Tailwind CSS",
    },
    {
      name: "MongoDB",
      image:
        "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
      alt: "MongoDB",
    },
    {
      name: "GIT",
      image:
        "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
      alt: "GIT",
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div>
        <h4>TECHNOLOGIES</h4>
        <h1>Skills.</h1>
      </div>
      <div className="grid-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={skill.alt} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
