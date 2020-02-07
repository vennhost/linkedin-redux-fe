import React from 'react';
import {Container, Card, CardImg, CardTitle, Row, Col, CardBody, CardText, CardSubtitle } from 'reactstrap';
import '../index.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import ExpModal from './ExpModal'




class Experience extends React.Component {
    state = { 
        experience: [],
        modalOpen: false,
        item: {},
        selectedExp: {}
        
     }
    render() { 
        return ( 
            <Container>
            <div className="experience">
                 <Container>  
                    <div className="row"><h3 className="col-10 title">Experience</h3><div className="col-2"><MaterialIcon id="plus" icon="add" size={50} onClick={()=>this.setState({modalOpen:true})} /><ExpModal experience={this.state.experience} parentUpdate={this.parentUpdate} open={this.state.modalOpen}></ExpModal></div></div>
                    
                
                {this.state.experience && this.state.experience.map((item, index) => 
                    
                    <Card key={index} className="card mb-3">
                        <Row className="row no-gutters">
                            <Col className="col-md-4">
                                <CardImg src={item.image} className="card-img" alt="Company Image" />
                            </Col>
                            <div className="col-md-8">
                            <CardBody className="card-body">
                                <Row><CardTitle className="col-10">{item.role}</CardTitle> <Col><MaterialIcon id="plus" icon="create" size={30} onClick={()=>this.setState({modalOpen:true, selectedExp: {...item}})} /></Col></Row>
                                <Row><CardSubtitle className="card-text col-10">{item.company}</CardSubtitle><Col><MaterialIcon id="plus" icon="delete" size={30} onClick={() => this.remove(item)} parentUpdate={this.parentUpdate} /></Col></Row>
                                <CardText className="card-text"><small className="text-muted">{item.startDate} - {item.endDate}</small></CardText>
                                <hr />
                            </CardBody>
                            </div>
                            
                        </Row>
                        
                        </Card>
                        
                    
                    /* <div key={index}><img src={item.image} width="60px" /></div> */)}
                    </Container>   
            </div>
            </Container>
         );
    }

    updatingExp = (val) => {
        let currentExp = this.state.selectedExp;
        currentExp[val.target.name] = val.target.value;
        this.setState({selectedExp: currentExp})
    }


    parentUpdate = (experience) => {
        this.setState({
            modalOpen: false,
            experience: experience,
            item: {}
           
        })
    }

    componentDidMount = async () => {
        let res = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/user20/experiences",{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc="
            }
        })
        let experience = await res.json();
        console.log(experience)
        

        this.setState({
            experience: experience
        })

    }

    remove = async (item) => {

        try {
        let res = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/user20/experiences/" + item._id,{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc=",
                "Content-type": "application/json"
            },
            method: "DELETE",
            body: JSON.stringify(item)
            
        }) 

  if (res.ok) {
            return await res.json()
        }
    } catch (error) {
        console.log(error);
    }
      
        
    }


    updateExp = async (item) => {

        try {
        let res = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/user20/experiences/" + item._id,{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc=",
                "Content-type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(item)
            
        }) 

  if (res.ok) {
            return await res.json()
        }
    } catch (error) {
        console.log(error);
    }
      
        
    }

    
}
 
export default Experience;