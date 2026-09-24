export const ATTENDANCE_TARGET = 75;

/**
 * How many upcoming lectures can be missed while staying at/above the target,
 * or — if already below — how many must be attended consecutively to recover.
 */
export const getMissable = (present, total, target = ATTENDANCE_TARGET) => {
  if (!total || total <= 0) {
    return { canMiss: 0, needed: 0, isSafe: true };
  }

  const ratio = target / 100;

  const canMiss = Math.floor(present / ratio) - total;

  if (canMiss >= 0) {
    return { canMiss, needed: 0, isSafe: true };
  }

  const needed = Math.ceil((ratio * total - present) / (1 - ratio));

  return { canMiss: 0, needed, isSafe: false };
};

export const formatMissable = ({ canMiss, needed, isSafe }) => {
  if (isSafe) {
    return canMiss === 1
      ? "Can miss 1 more lecture"
      : `Can miss ${canMiss} more lectures`;
  }

  return needed === 1
    ? "Attend 1 lecture to reach 75%"
    : `Attend ${needed} lectures to reach 75%`;
};
