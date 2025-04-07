/**
 * Return random element from the
 * provided array.
 */
function randomChoice<T>(from: T[]): T {
  if (from.length === 0) {
    throw new Error("Array cannot be empty");
  }
  const randomIndex = Math.floor(Math.random() * from.length);
  return from[randomIndex];
}

export default randomChoice;
