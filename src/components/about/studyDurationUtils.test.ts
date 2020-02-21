import { yearsMonthsDays } from "./studyDurationUtils";

describe("`yearsMonthsDays`", () => {
  describe("when startDate is before endDate", () => {
    it("should return 0y, 0m, 0d", () => {
      // asdf
    });
  });

  describe("when startDate is same year/month/day as endDate", () => {
    it("should return 0y, 0m, 0d", () => {
      // asdf
    });
  });

  describe("when start/end is between 1 day and 1 month apart", () => {
    it("should return 0y, 0m, [nonzero]d", () => {
      // asdf
    });
  });

  describe("when start/end is 1 month apart", () => {
    it("should return 0y, 1m, 0d", () => {
      // asdf
    });
  });

  describe("when start/end is between 1 month and 1 year apart", () => {
    describe("when startDate is same day as endDate", () => {
      it("should return 0y, [nonzero]m, 0d", () => {
        // asdf
      });
    });

    describe("when startDate is different day than endDate", () => {
      it("should return 0y, [nonzero]m, [nonzero]d", () => {
        // asdf
      });
    });
  });

  describe("when start/end is 1 year apart", () => {
    it("should return 1 year, 0m, 0d", () => {
      // asdf
    });
  });

  describe("when start/end is more than 1 year apart", () => {
    describe("when startDate is same month/day as endDate", () => {
      it("should return [nonzero]y, [nonzero]m, 0d", () => {
        // asdf
      });
    });

    describe("when startDate is same month as endDate", () => {
      it("should return [nonzero]y, 0m, [nonzero]d", () => {
        // asdf
      });
    });

    describe("when startDate is same day as endDate", () => {
      it("should return [nonzero]y, [nonzero]m, 0d", () => {
        // asdf
      });
    });

    describe("when startDate is different year, month, day than endDate", () => {
      it("should return [nonzero]y, [nonzero]m, [nonzero]d", () => {
        // asdf
      });
    });
  });
});
