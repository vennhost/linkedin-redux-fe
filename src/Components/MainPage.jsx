import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap'

import '../index.css'
import ProfileHeading from './ProfileHeading';
import NavBar from './NavBar';
import Profile from './Profile';
import Banner from './Banner';
import Experience from './Experience';
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
import ProfileModal from "./ProfileModal";
import {Button,Row,Col} from "reactstrap"
import { MdEdit } from "react-icons/md";



class MainPage extends React.Component {
    state = { 
        profile: null
     }
    render() { 
        return ( 
            <>
            <Router>
            <NavBar />
            <Container>
                <Row>
                        {this.state.profile?
                            // <About aboutUs={this.state.profile.bio}></About>
                        <> <Col md="8">
                        <ProfileHeading profile={this.state.profile}></ProfileHeading></Col>
                        <Col md="4" className="my-4">
                        <Button color="primary" onClick={()=>this.setState({modalOpen:true})}><MdEdit />?Edit Profile</Button>
                        <ProfileModal profile={this.state.profile} parentUpdate={this.parentUpdate} open={this.state.modalOpen}></ProfileModal></Col>
                            </> :<h2>This profile is loading</h2>
                        }</Row>
            </Container>

            {/* with react-router-dom
            you should create some routes  like:
            - newsfeed
            - profile
            etc...
            
            In the profile route , you should be able to accept a quesry string parameter
            sot that if profile/user5, will the get info from user5 etc*/}
            
                <Container>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/profile" component={ProfilePage} />
                </Container>
            </Router>

            </>
            
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
 
export default MainPage;