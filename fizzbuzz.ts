export function Fizzbuzz(numberToCheck: number): string {
  if (numberToCheck % 3 === 0) {
    return "Fizz";
  }
  return numberToCheck.toString();
}
