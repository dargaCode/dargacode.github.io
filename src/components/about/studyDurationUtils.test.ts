import { yearsMonthsDays } from "./studyDurationUtils";

describe("`yearsMonthsDays`", () => {
  describe("when startDate is before endDate", () => {
    it("should return 0y, 0m, 0d", () => {
      const duration = yearsMonthsDays("2000/01/01", "2010/01/01");

      expect(duration).toEqual({ years: 0, months: 0, days: 0 });
    });
  });

  describe("when startDate is same year/month/day as endDate", () => {
    it("should return 0y, 0m, 0d", () => {
      const duration = yearsMonthsDays("2000/01/01", "2000/01/01");

      expect(duration).toEqual({ years: 0, months: 0, days: 0 });
    });
  });

  describe("when start/end is between 1 day and 1 month apart", () => {
    it("should return 0y, 0m, [nonzero]d", () => {
      const duration = yearsMonthsDays("2000/01/01", "2000/01/22");

      expect(duration).toEqual({ years: 0, months: 0, days: 21 });
    });
  });

  describe("when start/end is 1 month apart", () => {
    it("should return 0y, 1m, 0d", () => {
      const duration = yearsMonthsDays("2000/01/01", "2000/02/01");

      expect(duration).toEqual({ years: 0, months: 1, days: 0 });
    });
  });

  describe("when start/end is between 1 month and 1 year apart", () => {
    describe("when startDate is same day as endDate", () => {
      it("should return 0y, [nonzero]m, 0d", () => {
        const duration = yearsMonthsDays("2000/01/01", "2000/08/01");

        expect(duration).toEqual({ years: 0, months: 7, days: 0 });
      });
    });

    describe("when startDate is different day than endDate", () => {
      it("should return 0y, [nonzero]m, [nonzero]d", () => {
        const duration = yearsMonthsDays("2000/01/01", "2000/08/14");

        expect(duration).toEqual({ years: 0, months: 7, days: 13 });
      });
    });
  });

  describe("when start/end is 1 year apart", () => {
    it("should return 1 year, 0m, 0d", () => {
      const duration = yearsMonthsDays("2000/01/01", "2001/01/01");

      expect(duration).toEqual({ years: 1, months: 0, days: 0 });
    });
  });

  describe("when start/end is more than 1 year apart", () => {
    describe("when startDate is same month/day as endDate", () => {
      it("should return [nonzero]y, [nonzero]m, 0d", () => {
        const duration = yearsMonthsDays("2000/01/01", "2006/01/01");

        expect(duration).toEqual({ years: 6, months: 0, days: 0 });
      });
    });

    describe("when startDate is same month as endDate", () => {
      it("should return [nonzero]y, 0m, [nonzero]d", () => {
        const duration = yearsMonthsDays("2000/01/01", "2012/01/22");

        expect(duration).toEqual({ years: 12, months: 0, days: 22 });
      });
    });

    describe("when startDate is same day as endDate", () => {
      it("should return [nonzero]y, [nonzero]m, 0d", () => {
        const duration = yearsMonthsDays("2000/01/01", "2019/11/01");

        expect(duration).toEqual({ years: 19, months: 10, days: 0 });
      });
    });

    describe("when startDate is different year, month, day than endDate", () => {
      it("should return [nonzero]y, [nonzero]m, [nonzero]d", () => {
        const duration = yearsMonthsDays("2000/01/01", "2004/06/08");

        expect(duration).toEqual({ years: 4, months: 5, days: 7 });
      });
    });
  });
});
