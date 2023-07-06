import PropTypes from 'prop-types';
import { StatisticsSection, StatItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsSection>
      <StatItem key="good">Good: {good}</StatItem>
      <StatItem key="neutral">Neutral: {neutral}</StatItem>
      <StatItem key="bad">Bad: {bad}</StatItem>
      <StatItem key="total">Total: {total}</StatItem>
      <StatItem key="positivePercentage">Positive feedback: {positivePercentage}%</StatItem>
    </StatisticsSection>
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
