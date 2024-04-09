import styled from 'styled-components';

const BaseButton = styled.button`
  width: 100%;
  padding: 12px 0px;
  font-size: var(--font-md-size);
  flex-shrink: 0;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  background-color: var(--main-color);
  color: var(--white-color);
  border: none;

  &:disabled {
    background-color: var(--unActive-color);
    pointer-events: none;
  }
`;

const WhiteButton = styled(BaseButton)`
  background-color: var(--white-color);
  color: var(--gray-color);
  border: 1px solid var(--gray-color);
`;

export { BaseButton, WhiteButton };
