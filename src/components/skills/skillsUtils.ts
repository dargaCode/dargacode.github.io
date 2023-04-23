import moment from "moment";

export const SKILL_URL_PREFIX = `https://github.com/dargaCode?tab=repositories&q=topic%3A`;

export interface SkillSortComparator {
  (a: Skill, b: Skill): number;
}

export interface RawSkill {
  name: string;
  displayName: string;
}

// added keys derived from api data (in container)
export interface Skill extends RawSkill {
  repoCount: number;
  lastCommitTime: moment.Moment;
  timeSinceCommit: string;
}

// used for tests, and when waiting for data to load
export const EMPTY_SKILL: Skill = {
  name: "",
  displayName: "",
  repoCount: 0,
  lastCommitTime: moment(),
  timeSinceCommit: ""
};

export function nameSkillComparator(a: Skill, b: Skill): number {
  // ascending
  if (a.name < b.name) {
    return -1;
  }

  if (b.name < a.name) {
    return 1;
  }

  return 0;
}

export function countSkillComparator(a: Skill, b: Skill): number {
  if (a.repoCount === b.repoCount) {
    return nameSkillComparator(a, b);
  }

  // descending
  return b.repoCount - a.repoCount;
}

export function dateSkillComparator(a: Skill, b: Skill): number {
  // descending
  if (a.lastCommitTime.isBefore(b.lastCommitTime)) {
    return 1;
  }

  if (a.lastCommitTime.isAfter(b.lastCommitTime)) {
    return -1;
  }

  if (a.repoCount !== b.repoCount) {
    // ascending
    return a.repoCount - b.repoCount;
  }

  return nameSkillComparator(a, b);
}

export enum SkillComparatorDisplayNames {
  DATE = "Recency",
  NAME = "Skill Name",
  COUNT = "Repo Count"
}

export const COMPARATORS_MAP: Map<string, SkillSortComparator> = new Map([
  [SkillComparatorDisplayNames.DATE, dateSkillComparator],
  [SkillComparatorDisplayNames.NAME, nameSkillComparator],
  [SkillComparatorDisplayNames.COUNT, countSkillComparator]
]);

export const SKILL_SORT_OPTIONS = Object.values(SkillComparatorDisplayNames);
