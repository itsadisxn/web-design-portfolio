import React from 'react';

import Card from '../components/Card';

import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Local Library',
                    description: 'Django & Bootstrap',
                    imgSrc: img1,
                    link: 'www.adityasaxena.ca',
                    selected: false
                },
                {
                    id: 1,
                    title: 'PHP Social Network',
                    description: 'PHP Based Social Networking Application',
                    imgSrc: img2,
                    link: 'www.adityasaxena.ca',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Human Resource Management System',
                    description: 'Enterprise Java',
                    imgSrc: img3,
                    link: 'www.adityasaxena.ca',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;