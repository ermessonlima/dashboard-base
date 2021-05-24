import React from 'react';
import { HeaderArea, Container, BoxContainer } from './styled';
import Routes from '../../../Routes';

const Header = () => {
    return ( 
    <HeaderArea >
        <Container >
        <Routes style={{position:'absolute'}}> 
             </Routes> 
            <BoxContainer />
    
        </Container>
       
    </HeaderArea>
    );
}

export default Header;