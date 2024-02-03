import React from "react";

const FormatDescription = (description) => {
  return description.substring(0, 50) + "...";
};
const ProjectCard = (props) => {
  const { project, onEdit } = props;
  const handleEditClick = (projectBeingEdited) => {
    onEdit(projectBeingEdited);
  };

  return (
    <div className="card">
      <img src={project.img_link} alt={project.name} />
      <section className="section light ">
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{FormatDescription(project.description)}</p>
          <p>Price : {`${project.currency}${project.price.toLocaleString()}`}</p>
        <button className="bordered" onClick={() => handleEditClick(project)}>
          <span className="icon-edit"></span>
          Edit
        </button>

      </section>
    </div>
  );
};

export default ProjectCard;
