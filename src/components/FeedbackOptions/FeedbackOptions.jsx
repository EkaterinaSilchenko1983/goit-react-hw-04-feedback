import PropTypes from 'prop-types';
import {
  FeedbackButton,
  OptionFeedbackWrapper,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionFeedbackWrapper>
      {options.map((option, idx) => (
        <FeedbackButton
          key={idx}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </OptionFeedbackWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

//  <h2>Please leave feedback</h2>
//     <button type="button" onClick={this.handleFeedbackGood}>
//       Good
//     </button>
//     <button type="button" onClick={this.handleFeedbackNeutral}>
//       Neutral
//     </button>
//     <button type="button" onClick={this.handleFeedbackBad}>
//       Bad
//     </button>
