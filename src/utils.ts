const ratingInProcent = (rating: number): string => {
  const procent = 100;
  const ratingScale = 5;
  return `${(rating / ratingScale) * procent}%`;
};

export { ratingInProcent };
