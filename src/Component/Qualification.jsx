import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import airplanesClouds from '../img/airplanesClouds.jpg';

function Qualification() {
    return (
        <div>
            <h2>Qualification produit</h2>
            <Card.Group centered>
                <Card>
                    <Image src={airplanesClouds} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Projets de R&D en cours</Card.Header>
                        <Card.Description>
                            text...
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={airplanesClouds} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Nouveaux projets</Card.Header>
                        <Card.Description>
                            text...
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
}

export default Qualification;
