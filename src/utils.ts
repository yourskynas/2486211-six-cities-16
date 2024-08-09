const ratingInProcent = (rating: number): string => {
  const procent = 100;
  const ratingScale = 5;
  return `${(rating / ratingScale) * procent}%`;
};

const humanizingDate = (value: string) => {
  const date = new Date(value);
  const formatedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
  return formatedDate;
};

export { ratingInProcent, humanizingDate };
