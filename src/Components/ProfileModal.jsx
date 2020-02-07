import React from "react"
import { Button, Container, Modal, ModalHeader, ModalBody, ModalFooter,Row,Col,Form,Label,Input,FormGroup } from 'reactstrap';
import ProfileUpdate from "./ProfileUpdateApi";

class ProfileModal extends React.Component {
  
    state = { 
        name: "",
        surname: "",
        title: "",
        bio: "",
        email:"",
        area: "",
        image: "",
        show:false
     }


    
     modalClose=()=>{
       this.setState({
         show:false
       })
     }

    

     updateProfile = async () => {
      let profile = {
        "name": this.state.name,//document.querySelector("#name").value,
        "surname": this.state.surname, //document.querySelector("#surname").value,
        "email": this.state.email, //document.querySelector("#email").value,
        "bio": this.state.bio, //document.querySelector("#bio").value,
        "area": this.state.area, //document.querySelector("#area").value,
        "title": this.state.title, // document.querySelector("#title").value
  };
      let updatedProfile = await ProfileUpdate(profile)
      this.props.parentUpdate(updatedProfile)
  }

    render() { 
      
       return ( 
            <div>
      <Modal isOpen={this.props.open} >
        <ModalHeader><h3>Edit intro</h3></ModalHeader>
        <ModalBody>
        <Form>
        
              <FormGroup>
                <Label >First Name</Label>
                    <Input onChange={(val) => this.setState({name: val.target.value})} value={this.state.name} type="text" id="name" placeholder="Name placeholder" />
              </FormGroup>
              <FormGroup>
                <Label >Last Name</Label>
                    <Input onChange={(val) => this.setState({surname: val.target.value})} value={this.state.surname}type="text" id="surname" placeholder="Name placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                    <Input onChange={(val) => this.setState({email: val.target.value})} value={this.state.email} type="email" id="email" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleAddress">Bio</Label>
                     <Input onChange={(val) => this.setState({bio: val.target.value})} value={this.state.bio} type="text" id="bio" placeholder="Bio" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePosition">Current Position</Label>
                     <Input onChange={(val) => this.setState({title: val.target.value})} value={this.state.title} type="text" id="title" placeholder="Title" />
              </FormGroup>
              <FormGroup>
                 <Label for="exampleCity">Area</Label>
                     <Input onChange={(val) => this.setState({area: val.target.value})} value={this.state.area} type="text"  id="area" placeholder="City"/>
              </FormGroup>
      </Form> 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>this.updateProfile()} >Save</Button>{' '}
          <Button color="secondary" onClick={() => this.props.parentUpdate()}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
         );
    }

    componentDidMount=async ()=>{
      let response=await fetch(" https://strive-school-testing-apis.herokuapp.com/api/profile/me",{
          headers:{
              "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc="
          }
      })
      let prof=await response.json()
      this.setState({
        name: prof.name,
        surname: prof.surname,
        email: prof.email,
        bio: prof.bio,
        area: prof.area,
        title:prof.title
      })

    
  }
}
export default ProfileModal;