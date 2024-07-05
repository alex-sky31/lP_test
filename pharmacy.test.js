import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
  it("should degrade Dafalgan twice as fast", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
  });

  it("should degrade Dafalgan twice as fast", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 1, 1)]).updateBenefitValue(),
    ).toEqual([new Drug("Dafalgan", 0, 0)]);
  });
});
