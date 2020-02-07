import React from "react"
import '../index.css'
import FileUpload from "./FileUpload";
import banner from "../img/banner.png"

class ProfileHeading extends React.Component {
    state = {  }
    render() { 
        return ( 

            <>
            
             <div className="my-0">
                {/* <img className="profile-photo" src={this.props.profile.image} alt="my pic"/> */}
            {this.props.profile && 
            <div>
            <img className="banner-photo" src={banner}  width="100%" heigth="80px" alt="bg-img"/>
            <img className="profile-photo ml-5" src={this.props.profile.image}  width="100%" alt="my pic"/>
                <h3 className="profile-name">{this.props.profile.name} {this.props.profile.surname}</h3>
                <p className="job-title">{this.props.profile.title}</p>
                {/* <h5>{this.props.profile.area}</h5> */} 
            </div>
            }
            <FileUpload></FileUpload>
            <hr></hr>

            <p>Who viewed your profile   11</p>

            <p>View of your post     11</p>

            <hr></hr>
            ..
            </div>

            
            </>
           
         );
    }
}
 
export default ProfileHeading;
