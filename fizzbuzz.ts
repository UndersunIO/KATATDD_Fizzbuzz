export function Fizzbuzz(numberToCheck: number): string {
  if (numberToCheck % 3 === 0) {
    return "Fizz";
  }
  if (numberToCheck % 5 === 0) {
    return "Buzz";
  }
  return numberToCheck.toString();
}
