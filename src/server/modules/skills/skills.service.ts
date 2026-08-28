import { skillCategories } from "./skills.data";
import { SkillCategory } from "@/types";

export function getSkillCategories(): SkillCategory[] {
  return skillCategories;
}
