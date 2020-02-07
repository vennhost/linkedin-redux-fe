import React from "react"
import ProfileHeading from "./ProfileHeading";
import About from "./About";
import ProfileModal from "./ProfileModal";
import {Button,Row,Col} from "reactstrap"
import { MdEdit } from "react-icons/md";

class Profile extends React.Component {
    state = { 
        profile:null,
        modalOpen:false
     }
    render() { 
        return ( 
            <div>
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
            </div>
         );
    }

    parentUpdate = (profile) => {
        if (profile)
            this.setState({
                modalOpen: false,
                profile: profile
            })
        else 
        this.setState({modalOpen: false})
    }
    componentDidMount=async ()=>{
        let response=await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/me",{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc="
            }
        })
        let prof=await response.json()
        this.setState({
            profile:prof
        })
    }
}
 
export default Profile;