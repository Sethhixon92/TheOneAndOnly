import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import photo1 from "./images/Project1.png";
import photo2 from "./images/Project2.jpg";
import photo3 from "./images/Project3.png";

function Portfolio() {
    
    return (
        <Container>
          <Row>
           <Card style={{ width: '18rem '}}>
            <Card.Img variant="top" src={photo1}/>
            <Card.Body>
                <Card.Title>El Buen Sabor</Card.Title>
                <Card.Text>
                    <p>El Buen Sabor was my 1st Group Project and we used HTML, CSS, and JavaScript. </p>
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href='https://obeek.github.io/el-buen-sabor/'>Live</Card.Link>
                <Card.Link href='https://github.com/ObeeK/el-buen-sabor'>GitHub Repo</Card.Link>
            </Card.Body>
           </Card>
           
           <Card style={{ width: '18rem '}}>
            <Card.Img variant="top" src={photo2}/>
            <Card.Body>
                <Card.Title>Anansi Inc</Card.Title>
                <Card.Text>
                    <p>Anansi Inc. was my 2nd group project. We used SQL, Node.js, Handlebars, and Express.</p>
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href='https://sethhixon92.github.io/Anansi/'>Live</Card.Link>
                <Card.Link href='https://github.com/Sethhixon92/Anansi'>GitHub Repo</Card.Link>
            </Card.Body>
           </Card>

            
           <Card style={{ width: '18rem '}}>
            <Card.Img variant="top" src={photo3}/>
            <Card.Body>
                <Card.Title>VividStroke</Card.Title>
                <Card.Text>
                    <p>VividStroke was my 3rd and last group project. We used React Bootstrap, MongoGB, and Express.</p>
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href='https://github.com/ObeeK/group-project'>Live</Card.Link>
                <Card.Link href='https://github.com/ObeeK/group-project'>GitHub Repo</Card.Link>
            </Card.Body>
           </Card>
         </Row>
        </Container>
    );
}
export default Portfolio;