import React from 'react';
import {} from 'reactstrap';

import {Container} from 'reactstrap'

import '../index.css'

import NavBar from './NavBar';
import Profile from './Profile';
import Banner from './Banner';
import Experience from './Experience';


class HomePage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Container className="profile mt-5">
            {/* <Profile></Profile> */}
            </Container>
            <Banner></Banner>
            {/* <Profile></Profile> */}
            <Experience />
            </>
         );
    }
}
 
export default HomePage;