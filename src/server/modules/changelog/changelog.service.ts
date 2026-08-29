import { changelogData } from "./changelog.data";
import type { ChangelogItem } from "@/types";

export function getChangelog(): ChangelogItem[] {
  return changelogData;
}
