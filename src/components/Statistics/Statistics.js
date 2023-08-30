import { StatElement } from './Statistics.styled';

export const Statistics = ({
  options: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatElement>Good: {good}</StatElement>
      <StatElement>Neutral: {neutral}</StatElement>
      <StatElement>Bad: {bad}</StatElement>
      <StatElement>Total: {total}</StatElement>
      <StatElement>Positive feedback: {positivePercentage}%</StatElement>
    </div>
  );
};
