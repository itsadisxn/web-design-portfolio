import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-5">
                    <Col className="p-0" md={3} sm={12}>
                        ADITYA SAXENA
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        2020 Copyright ADITYA SAXENA
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;