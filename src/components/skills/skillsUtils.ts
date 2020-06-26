export const SKILL_URL_PREFIX = `https://github.com/dargaCode?tab=repositories&q=topic%3A`;

export interface SkillSortComparator {
  (a: Skill, b: Skill): number;
}

export interface RawSkill {
  name: string;
  displayName: string;
  iconClass: string;
  repoCount: number;
}

// Some extra values are derived before export, but can be ignored by user
export interface Skill extends RawSkill {
  nameLower: string;
}

export function repoCountComparator(a: Skill, b: Skill): number {
  return b.repoCount - a.repoCount;
}

export function nameSkillComparator(a: Skill, b: Skill): number {
  if (a.name < b.name) {
    return -1;
  }
  if (b.name < a.name) {
    return 1;
  }
  return 0;
}

export const COMPARATORS: Map<string, SkillSortComparator> = new Map([
  ["Skill Name", nameSkillComparator],
  ["Repo Count", repoCountComparator]
]);

export const SKILL_SORT_OPTIONS = Array.from(COMPARATORS.keys());
