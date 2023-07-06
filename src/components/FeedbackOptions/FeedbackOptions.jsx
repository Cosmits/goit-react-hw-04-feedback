import PropTypes from 'prop-types';
import { OptionsUl, OptionsLi, Button  } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <OptionsUl>
      {options.map(option => (
        <OptionsLi key={option}>
          <Button name={option} type="button" onClick={leaveFeedback}>
            {option}
          </Button>
        </OptionsLi>
      ))}
    </OptionsUl>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
