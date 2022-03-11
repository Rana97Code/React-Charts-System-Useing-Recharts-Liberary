import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import { BarChart,Bar,XAxis,Tooltip,ResponsiveContainer } from 'recharts';

class Analysis extends Component {
    constructor(){
        super();
        this.state={
            data:[

                {Techonology:'Java',Projects:100},
                {Techonology:'Kotlin',Projects:46},
                {Techonology:'Sql',Projects:90},
                {Techonology:'Bootstrap',Projects:95},
                {Techonology:'Jquery',Projects:60},
                {Techonology:'React',Projects:90},
                {Techonology:'PHP',Projects:100},
                {Techonology:'Angular',Projects:65}
            ]
        }
    }





    render(){
        var blue="rgba(0,115,230,0.8)"

        return(
            <Fragment>
                
                <Container className="text-center">
                    <h1 className="serviceHeadTitel">Techonology Used</h1>
                    <Row style={{height:'300px'}}>
                        <Col lg={6} md={12} sm={12}>
                           
                            <ResponsiveContainer>
                                <BarChart width={100} height={400} data={this.state.data}>
                                    <Bar dataKey="Projects" fill={blue} />
                                    <XAxis dataKey="Techonology" fill={blue} />
                                    <Tooltip></Tooltip>
                                    
                                </BarChart>
                            </ResponsiveContainer>

                        </Col>
                        <Col lg={6} md={12} sm={12} >
                            <p className="text-justify des">Lorem Ipsum is simply dummy text of the printing
                             and typesetting industry. Lorem Ipsum has been the industry's standard 
                             dummy text ever since the 1500s, when an unknown printer took a galley 
                             of type and scrambled it to make a type specimen book. It has survived
                              not only five centuries, but also the leap into electronic typesetting, 
                              remaining essentially unchanged. It was popularised in the 1960s with the 
                              release of Letraset sheets containing Lorem Ipsum passages,
                               and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum  It was popularised in the 1960s with the 
                              release of Letraset sheets containing Lorem Ipsum passages,
                               and more recently  It was popularised in the 1960s with the 
                              release of Letraset sheets containing Lorem Ipsum passages,
                               and more recently with desktop publishing software like Aldus
                                 PageMaker including versions of Lorem Ipsum</p>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}
export default Analysis;