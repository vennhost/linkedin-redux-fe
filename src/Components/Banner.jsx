import React from "react"
import { Jumbotron, Container } from 'reactstrap';
import banner from "../img/banner.png"
import Profile from "./Profile";
import "../index.css"
class Banner extends React.Component {
    state = {  }
    render() { 
        
        return ( 
            <div>
            <Jumbotron fluid className="offset-md-1 col-md-7 .offset-md-4" >
            <img className="profile-photo" src={banner}  width="100%"/>
              <Container fluid>
                
                <Profile></Profile>
              </Container>
              
            </Jumbotron>
          </div>
         );
    }
}
 
export default Banner;