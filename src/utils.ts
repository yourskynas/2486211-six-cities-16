import dayjs from 'dayjs';

const ratingInProcent = (rating: number): string => {
  const procent = 100;
  const ratingScale = 5;
  return `${(rating / ratingScale) * procent}%`;
};

const formatDate = (date: string): string => dayjs(date).format('MMMM YYYY');

export { ratingInProcent, formatDate };
