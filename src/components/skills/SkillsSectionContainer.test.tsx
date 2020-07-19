import React from "react";
import { shallow } from "enzyme";
import fetchMock from "jest-fetch-mock";
import { MOCK_RAW_SKILLS, MOCK_SKILLS } from "./mockSkills";
import { MOCK_REPOS } from "./mockRepos";
import SkillsSectionContainer, {
  GITHUB_REPOS_API_URL,
  GITHUB_REPOS_FETCH_OPTIONS
} from "./SkillsSectionContainer";

describe("`SkillsSectionContainer`", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should call fetch for github repos", () => {
    fetchMock.once(JSON.stringify(MOCK_REPOS));

    expect(fetchMock).toHaveBeenCalledTimes(0);

    shallow(<SkillsSectionContainer rawSkills={MOCK_RAW_SKILLS} />);

    expect(fetchMock).toHaveBeenCalledWith(
      GITHUB_REPOS_API_URL,
      GITHUB_REPOS_FETCH_OPTIONS
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("should combine api repos with local json skills ", done => {
    fetchMock.once(JSON.stringify(MOCK_REPOS));

    const wrapper = shallow(
      <SkillsSectionContainer rawSkills={MOCK_RAW_SKILLS} />
    );

    process.nextTick(() => {
      expect(wrapper.state("skills")).toEqual(MOCK_SKILLS);

      done();
    });
  });
});
