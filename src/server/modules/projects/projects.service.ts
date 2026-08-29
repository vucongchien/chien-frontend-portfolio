import { projectsData } from "./projects.data";
import { Project } from "@/types";

export function getProjects(): Project[] {
  return projectsData;
}

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((p) => p.id === id);
}
