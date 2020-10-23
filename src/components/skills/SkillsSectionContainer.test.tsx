import React from "react";
import { shallow } from "enzyme";
import { mocked } from "ts-jest/utils";
import axios from "axios";
import { MOCK_RAW_SKILLS, MOCK_SKILLS } from "./mockSkills";
import { MOCK_REPOS } from "./mockRepos";
import SkillsSectionContainer, {
  GITHUB_REPOS_REQUEST_CONFIG
} from "./SkillsSectionContainer";

const mockedAxios = mocked(axios, true);

// TODO fix these tests
describe.skip("`SkillsSectionContainer`", () => {
  beforeEach(() => {
    mockedAxios.get = jest.fn().mockResolvedValue(MOCK_REPOS);
  });

  it("should call fetch for github repos", done => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.get).toHaveBeenCalledTimes(0);

    const config = {
      method: "get",
      ...GITHUB_REPOS_REQUEST_CONFIG,
      cancelToken: axios.CancelToken.source()
    };

    const wrapper = shallow<SkillsSectionContainer>(
      <SkillsSectionContainer rawSkills={MOCK_RAW_SKILLS} />
    );

    wrapper
      .instance()
      .componentDidMount()
      .then(() => {
        // expect(axios.get).toHaveBeenCalledTimes(1);
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockedAxios.get).toHaveBeenCalledWith(config);
        done();
      });
  });

  it.skip("should combine api repos with local json skills ", done => {
    const wrapper = shallow(
      <SkillsSectionContainer rawSkills={MOCK_RAW_SKILLS} />
    );

    process.nextTick(() => {
      expect(wrapper.state("skills")).toEqual(MOCK_SKILLS);

      done();
    });
  });
});
