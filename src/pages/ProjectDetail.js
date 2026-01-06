import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useContext(ProjectContext);

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <p>프로젝트를 찾을 수 없습니다.</p>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>{project.name}</h2>
      <p><strong>등록 날짜:</strong> {project.date}</p>
      <p><strong>소개:</strong></p>
      <p>{project.description}</p>

      <button style={{ marginTop: "20px" }} onClick={() => navigate("/")}>
        목록으로 돌아가기
      </button>
    </div>
  );
}

export default ProjectDetail;