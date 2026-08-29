import { skillCategories } from "./skills.data";
import type { SkillCategory } from "@/types";

export function getSkillCategories(): SkillCategory[] {
  return skillCategories;
}
