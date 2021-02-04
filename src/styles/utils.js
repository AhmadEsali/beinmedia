const breakPoints = {
  extraLarge: 1680,
  huge: 1200,
  large: 992,
  medium: 768,
  small: 575,
};

export const mediaMax = (n) => {
  const breakPointsArray = Object.keys(breakPoints).map((size) => [
    size,
    breakPoints[size],
  ]);

  const [result] = breakPointsArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};
export const mediaMin = (n) => {
  const breakPointsArray = Object.keys(breakPoints).map((size) => [
    size,
    breakPoints[size],
  ]);

  const [result] = breakPointsArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};
