import styled, { css } from 'styled-components';

import { FiChevronsLeft, FiSettings, FiGrid, FiAlertCircle, FiUser} from 'react-icons/fi';



export const HeaderArea = styled.div`
height:700px;
background-color:#fff;
border-radius:25px;
max-width: 250px;
flex:1;
display:flex;
border-bottom-right-radius: 0px;
border-top-right-radius: 0px;
border-top-left-radius: 25px;

-webkit-box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.5);
-moz-box-shadow:    0px 0px 10px 0px rgba(50, 50, 50, 0.5);
box-shadow:         0px 0px 10px 0px rgba(50, 50, 50, 0.5);


.nav-button {
    padding: 15px;
    width: 209px;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;

    &:hover {
      background: #eaeef2;
      border-radius: 8px;
      opacity: 1;
    }
  }
`;

export const MenuBox = styled.div`
height:300px;

background-color:#fff;
-webkit-box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.5);
-moz-box-shadow:    0px 0px 10px 0px rgba(50, 50, 50, 0.5);
box-shadow:         0px 0px 10px 0px rgba(50, 50, 50, 0.5);

`;

export const Settings = styled.img`

  width: 16px;
  height: 16px;

`;

const iconCss = css`
  width: 12px;
  height: 12px;
  fill: #797f86;
  flex-shrink: 0;
`;


export const ChevronIcon = styled(FiChevronsLeft)`
  ${iconCss}
`;
export const GridIcon = styled(FiGrid)`
  ${iconCss}
`;
export const SettingsIcon = styled(FiSettings)`
  ${iconCss}
`;
export const AdminIcon = styled(FiAlertCircle)`
  ${iconCss}
`;
export const UserIcon = styled(FiUser)`
  ${iconCss}
`;

