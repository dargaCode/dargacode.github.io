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
  if (a.name < b.name) {
    return -1;
  }
  if (b.name < a.name) {
    return 1;
  }
  return 0;
}

export function repoCountComparator(a: Skill, b: Skill): number {
  if (a.repoCount === b.repoCount) {
    return nameSkillComparator(a, b);
  }

  return b.repoCount - a.repoCount;
}

export const COMPARATORS: Map<string, SkillSortComparator> = new Map([
  ["Skill Name", nameSkillComparator],
  ["Repo Count", repoCountComparator]
]);

export const SKILL_SORT_OPTIONS = Array.from(COMPARATORS.keys());
