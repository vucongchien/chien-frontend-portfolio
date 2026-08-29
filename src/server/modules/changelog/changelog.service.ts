import { changelogData } from "./changelog.data";
import { ChangelogItem } from "@/types";

export function getChangelog(): ChangelogItem[] {
  return changelogData;
}
