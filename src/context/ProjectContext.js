import { createContext } from "react";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const projects = [
    {
      id: 1,
      name: "유전 알고리즘",
      date: "2024-11-20",
      description: "유전 알고리즘을 활용한 최적화 프로젝트",
    },
    {
      id: 2,
      name: "웹 포트폴리오",
      date: "2024-12-05",
      description: "React로 만든 개인 포트폴리오 웹사이트",
    },
  ];

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
}