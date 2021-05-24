import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import { Template } from './components/MainComponents';
import Header from './components/partials/Header';
import LeftBar from './components/partials/LeftBar';
import Container from './components/partials/Container';
const Page = (props) => {
    return ( 
    <BrowserRouter >
        <Template  >
     
        <div className = "DivContainer" >
        <LeftBar/>


        <Container/>

        </div>


        </Template>

        </BrowserRouter>

    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);