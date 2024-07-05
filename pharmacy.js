export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];

      switch (drug.name) {
        case "Herbal Tea":
          if (drug.benefit < 50) {
            drug.benefit++;
          }
          break;

        case "Fervex":
          if (drug.benefit < 50) {
            drug.benefit++;
            if (drug.expiresIn <= 10) {
              drug.benefit++;
            }
            if (drug.expiresIn <= 5) {
              drug.benefit++;
            }
          }
          break;

        case "Magic Pill":
          // "Magic Pill" never expires nor decreases in Benefit.
          break;

        case "Dafalgan":
          if (drug.benefit > 0) {
            if (drug.benefit === 1) {
              drug.benefit -= 1; // "Dafalgan" degrades in Benefit - 1 because benefit never negative
            } else {
              drug.benefit -= 2; // "Dafalgan" degrades in Benefit twice as fast as normal drugs.
            }
          }
          break;

        default:
          if (drug.benefit > 0) {
            drug.benefit--; // Normal degradation for other drugs
          }
          break;
      }

      if (drug.name !== "Magic Pill") {
        drug.expiresIn--;
      }

      if (drug.expiresIn < 0) {
        switch (drug.name) {
          case "Herbal Tea":
            if (drug.benefit < 50) {
              drug.benefit++;
            }
            break;

          case "Fervex":
            drug.benefit = 0;
            break;

          case "Dafalgan":
            if (drug.benefit > 0) {
              drug.benefit -= 2; // Degrades twice as fast when expired
            }
            break;

          default:
            if (drug.benefit > 0) {
              drug.benefit--; // Normal degradation for other drugs when expired
            }
            break;
        }
      }
    }

    return this.drugs;
  }
}
