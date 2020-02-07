import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Row,Col,Form,Label,Input,FormGroup } from 'reactstrap';
import PostExperience from "./PostExperience";

class ExpModal extends React.Component {
  
    state = { 
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description:"",
        area: "",
        image: "",

        modalOpen: false
     }


    
     modalClose=()=>{
       this.setState({
         modalOpen: false
       })
     }

 

     postExperience = async () => {
      let experience = {
        "role": document.querySelector("#role").value,
        "company": document.querySelector("#company").value,
        "startDate": document.querySelector("#startDate").value,
        "endDate": document.querySelector("#endDate").value,
        "area": document.querySelector("#area").value,
        "description": document.querySelector("#description").value,
        "image": document.querySelector("#image").value
  };
      await PostExperience(experience)
      let storeExperience = await PostExperience(experience)
      this.props.parentUpdate(storeExperience)
  }

       /*  role: "",
        company: "",
        startDate: "",
        endDate: "",
        description:"",
        area: "",
        image: "", */

    render() { 
      
       return ( 
            <div>
      <Modal isOpen={this.props.open} >
        <ModalHeader><h3>Experiences</h3></ModalHeader>
        <ModalBody>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="role">Role</Label>
                    <Input onChange={(val) => this.setState({role: val.target.value})} value={this.state.role} type="text" id="role" placeholder="Role..." />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="company" >Company Name</Label>
                    <Input onChange={(val) => this.setState({company: val.target.value})} value={this.state.company} type="text" id="company" placeholder="Company" />
              </FormGroup>
            </Col>
          </Row>
              <FormGroup>
                <Label for="startDate">Start Date</Label>
                    <Input onChange={(val) => this.setState({startDate: val.target.value})} value={this.state.startDate} type="date" id="startDate"  />
              </FormGroup>
              <FormGroup>
                <Label for="endDate">End Date</Label>
                     <Input onChange={(val) => this.setState({endDate: val.target.value})} value={this.state.endDate} type="date" id="endDate"  />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                     <Input onChange={(val) => this.setState({description: val.target.value})} value={this.state.description} type="text" id="description" placeholder="Describe your job" />
              </FormGroup>
              <FormGroup>
                 <Label for="area">Location</Label>
                     <Input onChange={(val) => this.setState({area: val.target.value})} value={this.state.area} type="text"  id="area" placeholder="area"/>
              </FormGroup>

              <FormGroup>
                 <Label for="image">Company Logo</Label>
                     <Input onChange={(val) => this.setState({image: val.target.value})} value={this.state.image} type="url"  id="image" placeholder="Image URL"/>
              </FormGroup>
          
      </Form> 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>this.postExperience()} >Post</Button>{' '}
          <Button color="secondary" onClick={this.modalClose}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
         );
    }
}
export default ExpModal;