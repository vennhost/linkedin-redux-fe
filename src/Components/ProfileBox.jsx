import React from 'react';

import { Container } from 'reactstrap'

import '../index.css'
import ProfileHeading from './ProfileHeading';
import NavBar from './NavBar';
import Profile from './Profile';
import Banner from './Banner';
import Experience from './Experience';
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
import ProfileModal from "./ProfileModal";
import { Button, Row, Col } from "reactstrap"
import { MdEdit } from "react-icons/md";

class ProfileBox extends React.Component {
    state = {
        profile: null
    }
    render() {
        return (
            <Container className="home-profile">
                
                    {this.state.profile ?
                        // <About aboutUs={this.state.profile.bio}></About>
                        <> 
                            <ProfileHeading profile={this.state.profile}></ProfileHeading>
                             
                        </> : <h2>This profile is loading</h2>
                    }
            </Container>
        );
    }

    componentDidMount=async ()=>{
        let response=await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/me",{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc="
            }
        })
        let profile = await response.json()
        this.setState({
            profile:profile
        })
    }
}

export default ProfileBox;