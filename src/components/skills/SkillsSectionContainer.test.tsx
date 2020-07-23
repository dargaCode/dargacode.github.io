import React from "react";
import { shallow } from "enzyme";
import { mocked } from "ts-jest";
import axios from "axios";
import { MOCK_RAW_SKILLS, MOCK_SKILLS } from "./mockSkills";
import { MOCK_REPOS } from "./mockRepos";
import SkillsSectionContainer, {
  GITHUB_REPOS_REQUEST_CONFIG
} from "./SkillsSectionContainer";

const mockedAxios = mocked(axios, true);

describe("`SkillsSectionContainer`", () => {
  it("should call fetch for github repos", () => {
    mockedAxios.get.mockReturnValueOnce(MOCK_REPOS));

    expect(mockedAxios.get).toHaveBeenCalledTimes(0);

    shallow(<SkillsSectionContainer rawSkills={MOCK_RAW_SKILLS} />);

    const config = {
      ...GITHUB_REPOS_REQUEST_CONFIG,
      cancelToken: axios.CancelToken.source()
    };

    expect(mockedAxios.get).toHaveBeenCalledWith(config);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it("should combine api repos with local json skills ", done => {
    mockedAxios.get.mockReturnValueOnce(MOCK_REPOS);

    const wrapper = shallow(
      <SkillsSectionContainer rawSkills={MOCK_RAW_SKILLS} />
    );

    process.nextTick(() => {
      expect(wrapper.state("skills")).toEqual(MOCK_SKILLS);

      done();
    });
  });
});
