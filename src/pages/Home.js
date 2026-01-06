import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";

function Home() {
  const { projects } = useContext(ProjectContext);
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>프로젝트 목록</h1>

      {projects.map((project) => (
        <div
          key={project.id}
          style={{
            padding: "15px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/project/${project.id}`)}
        >
          <h3>{project.name}</h3>
          <p>{project.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;