import React from "react";
import styles from "../../styles/pages/home.module.scss";
import projects from "../../json/projects.json";

const Card = ({ name, description, image, size, style }) => {
  return (
    <div className={styles.ProjectCard} style={style}>
      <div
        className={styles[`ProjectCard__Img${size}`]}
        style={{ backgroundImage: `url('/images/project/${image}')` }}
      ></div>
      <div className="mt-5">
        <h4>{name}</h4>
        <div className="leading-tight mt-2">
          <big className="text-light">{description}</big>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="ProjectSection pt-28">
      <div className="container">
        <div className="text-center mb-16">
          <big className="mb-5 section-title">Proud Creations</big>
          <h2>Built with my heart and soul</h2>
        </div>

        <div className="flex">
          <div
            className="flex flex-col justify-between"
            style={{ marginRight: "13px" }}
          >
            {projects.MD.map((project) => (
              <Card
                key={project.description}
                name={project.name}
                image={project.image}
                description={project.description}
                size="MD"
                style={project.style}
              />
            ))}
          </div>

          <div className="flex flex-col" style={{ marginLeft: "13px" }}>
            <Card
              key={projects.LG.description}
              name={projects.LG.name}
              image={projects.LG.image}
              description={projects.LG.description}
              size="LG"
              style={projects.LG.style}
            />
            <div className="flex">
              {projects.SM.map((project) => (
                <Card
                  key={project.description}
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  size="SM"
                  style={project.style}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
