import { Fizzbuzz } from "./fizzbuzz";

describe("Fizzbuzz", () => {
  it("Renvoi Fizz si le nombre est divisible par 3", () => {
    expect(Fizzbuzz(3)).toBe("Fizz");
  });
  it("Renvoi Buzz si le nombre est divisible par 5", () => {
    expect(Fizzbuzz(5)).toBe("Buzz");
  });
});
