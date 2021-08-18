import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

const Projects = () => {

    const [ projects, setProjects ] = useState([])

        useEffect(() => {
            axios
                .get('https://api.github.com/users/pennebakers/repos')
                .then((response) => {
                    setProjects(response.data)
                })
        }, [])
        
        console.log(projects)
    return(
        <div className="projects-container">
            <Row xs={1} md={2} className="g-1">
                    {projects.map(response =>
                    <Col> 
                    <Card className="cards">
                        <Card.Body>
                            <Card.Title>{response.name}</Card.Title>
                            <Card.Text>
                                {response.description}
                            </Card.Text>
                            <Button href={response.html_url} target="_blank" variant="outline-dark">Github</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    )}
            </Row>
        </div>
    )
}

export default Projects