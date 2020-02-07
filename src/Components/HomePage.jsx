import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NewsFeed from './NewsFeed';
import ProfileBox from './ProfileBox';
import '../index.css';
import SideBar from './SideBar';


class HomePage extends React.Component {
    state = {}
    render() {
        return (


            <Container className="home-container">

                <Row>
                    <Col xs="4" sm="3"><ProfileBox  /></Col>
                    <Col xs="4" sm="5"><NewsFeed /></Col>
                    <Col xs="4" sm="4"> <SideBar /> </Col>
                </Row>

            </Container>
        );
    }
}

export default HomePage;