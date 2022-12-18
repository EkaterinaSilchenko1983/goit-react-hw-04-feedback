import styled from 'styled-components';

export const OptionFeedbackWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export const FeedbackButton = styled.button`
  display: inline-flex;
  align-items: center;

  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  text-transform: capitalize;
  text-align: center;
  border: 2px solid #2196f3;
  border-radius: 5px;
  background-color: #ffff;
  color: black;
  padding: 10 px;
  cursor: pointer;
  color: dodgerblue;

  :hover {
    background: #2196f3;
    color: white;
  }
`;
