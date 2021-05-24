import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1;

  .subscription-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    select,
    option,
    p {
      text-align: right;
      font: normal normal normal 13px/15px Roboto;
      letter-spacing: 0px;
      color: #797f86;
      opacity: 1;
    }
  }
`;
