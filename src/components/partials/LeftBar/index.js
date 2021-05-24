import React from 'react';
import { HeaderArea, MenuBox ,Settings} from './styled';
import Routes from '../../../Routes';
import { Link } from 'react-router-dom';
import DashIcon from '../../../assets/icons/DashIcon.svg';
import SettingIcon from '../../../assets/icons/SettingIcon.svg';
import UserIcon from '../../../assets/icons/UserIcon.svg';
const Header = () => {
    return (
        <HeaderArea style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: 'green', height: 60, width: 60, borderRadius: 20, opacity: 0.5, marginTop: 20 }}>

            </div>

            <div style={{ width: 200,flexDirection: 'row',justifyContent:'space-between',  display:'flex'}}>
                <div style={{ background: 'green', height: 60, width: 80, borderRadius: 20, opacity: 0.5, marginTop: 20, marginBottom:20}}>

                </div>

                <div style={{ background: 'green', height: 60, width: 80, borderRadius: 20, opacity: 0.5, marginTop: 20,marginBottom:20 }}>

                </div>
            </div>




            <MenuBox style={{ width: 220, borderRadius: 20, opacity: 0.5 }}>
               
                
        

          <Link to='/' style={{ textDecoration: 'none' }}>
            <div className="nav-button">
              <Settings src={DashIcon} alt="Icon" />
              <span>Dashboard</span>
            </div>
          </Link>


          <Link to='/about' style={{ textDecoration: 'none' }}>
            <div className="nav-button">
              <Settings src={UserIcon} alt="Icon" />
              <span>Sobre</span>
            </div>
          </Link>

            </MenuBox>
        </ HeaderArea >
    );
}

export default Header;

