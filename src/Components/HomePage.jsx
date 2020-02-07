import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NewsFeed from './NewsFeed'


class HomePage extends React.Component {
    state = {}
    render() {
        return (


            <Container>

                <Row>
                    <Col xs="1" sm="4">.col-6 .col-sm-4</Col>
                    <Col xs="7" sm="4"><NewsFeed /></Col>
                    <Col xs="4" sm="4">.col-sm-4</Col>
                </Row>

            </Container>
        );
    }
}

export default HomePage;