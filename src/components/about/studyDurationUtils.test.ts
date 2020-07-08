import { yearsMonthsDays } from "./studyDurationUtils";

describe("`yearsMonthsDays`", () => {
  describe("when startDate is same year/month/day as endDate", () => {
    it("should return 0y, 0m, 0d", () => {
      const duration = yearsMonthsDays("2000-01-01", "2000-01-01");

      expect(duration).toEqual({ years: 0, months: 0, days: 0 });
    });
  });

  describe("when start/end are between 1 day and 1 month apart", () => {
    describe("when the startDate is the same month as endDate", () => {
      it("should return 0y, 0m, [nonzero]d", () => {
        const duration = yearsMonthsDays("2000-01-01", "2000-01-22");

        expect(duration).toEqual({ years: 0, months: 0, days: 21 });
      });
    });
    describe("when the startDate is a different month than endDate", () => {
      it("should return 0y, 0m, [nonzero]d", () => {
        const duration = yearsMonthsDays("2000-01-26", "2000-02-10");

        expect(duration).toEqual({ years: 0, months: 0, days: 15 });
      });
    });
  });

  describe("when start/end are 1 month apart", () => {
    it("should return 0y, 1m, 0d", () => {
      const duration = yearsMonthsDays("2000-01-01", "2000-02-01");

      expect(duration).toEqual({ years: 0, months: 1, days: 0 });
    });
  });

  describe("when start/end are between 1 month and 1 year apart", () => {
    describe("when startDate is same day as endDate", () => {
      it("should round the days down to the beginning of the month", () => {
        const duration = yearsMonthsDays("2000-01-01", "2000-08-01");

        // override Moment to round the month
        expect(duration).toEqual({ years: 0, months: 7, days: 0 });
      });

      it("should round the days up to the beginning of the next month", () => {
        const duration = yearsMonthsDays("2000-05-01", "2000-09-01");

        // override Moment to round the month
        expect(duration).toEqual({ years: 0, months: 4, days: 0 });
      });
    });

    describe("when startDate is different day than endDate", () => {
      it("should return 0y, [nonzero]m, [nonzero]d", () => {
        const duration = yearsMonthsDays("2000-01-01", "2000-08-14");

        // use Moment's calculations
        expect(duration).toEqual({ years: 0, months: 7, days: 11 });
      });
    });
  });

  describe("when start/end are 1 year apart", () => {
    it("should return 1 year, 0m, 0d", () => {
      const duration = yearsMonthsDays("2000-01-01", "2001-01-01");

      expect(duration).toEqual({ years: 1, months: 0, days: 0 });
    });
  });

  describe("when start/end are more than 1 year apart", () => {
    describe("when startDate is same month/day as endDate", () => {
      it("should return [nonzero]y, 0m, 0d", () => {
        const duration = yearsMonthsDays("2000-01-01", "2006-01-01");

        expect(duration).toEqual({ years: 6, months: 0, days: 0 });
      });
    });

    describe("when startDate is same month as endDate", () => {
      it("should return [nonzero]y, 0m, [nonzero]d", () => {
        const duration = yearsMonthsDays("2000-01-01", "2012-01-22");

        expect(duration).toEqual({ years: 12, months: 0, days: 21 });
      });
    });

    describe("when startDate is same day as endDate", () => {
      it("should round the days up to the beginning of the next month", () => {
        const duration = yearsMonthsDays("2000-01-01", "2019-11-01");

        // override Moment to round the month
        expect(duration).toEqual({ years: 19, months: 10, days: 0 });
      });

      it("should round the days down to the beginning of the month", () => {
        const duration = yearsMonthsDays("1996-05-01", "2000-09-01");

        // override Moment to round the month
        expect(duration).toEqual({ years: 4, months: 4, days: 0 });
      });
    });

    describe("when startDate is different year, month, day than endDate", () => {
      it("should return [nonzero]y, [nonzero]m, [nonzero]d", () => {
        const duration = yearsMonthsDays("2000-01-01", "2004-06-08");

        // use Moment's calculations
        expect(duration).toEqual({ years: 4, months: 5, days: 5 });
      });
    });
  });
});
