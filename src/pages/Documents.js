import React from 'react';
import './Documents.css';
import Accordion from 'react-bootstrap/Accordion';

export default function Documents() {
  return (
    <div className='documents'>
            <h2 style={{height: '100px'}}>Espace documents</h2>
            <h4>Mes documents</h4>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Mes contrats</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Attestations</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Fiches de paie</Accordion.Header>
                    <Accordion.Body>
                
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Advertissements</Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    </div>
  )
}
