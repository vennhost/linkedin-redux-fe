import React from "react"
import '../index.css'
import FileUpload from "./FileUpload"

class ProfileHeading extends React.Component {
    state = {  }
    render() { 
        return ( 

            <>
            
             <div className="my-5">
                {/* <img className="profile-photo" src={this.props.profile.image} alt="my pic"/> */}
            {this.props.profile && 
            <div>
            <img className="profile-photo" src={this.props.profile.image}  width="30%" alt="my pic"/>
                <h3>{this.props.profile.name} {this.props.profile.surname}</h3>
                <h4>{this.props.profile.title}</h4>
                <h5>{this.props.profile.area}</h5>
            </div>
            }
            <FileUpload></FileUpload>
            </div>
            
            </>
           
         );
    }
}
 
export default ProfileHeading;
