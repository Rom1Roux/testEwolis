import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import airplanesClouds from '../img/airplanesClouds.jpg';

function Ingenierie() {
    return (
        <div>
            <h2>Ingénierie</h2>
            <Card.Group centered>
                <Card>
                    <Image src={airplanesClouds} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Architecture innovante et complexe</Card.Header>
                        <Card.Description>
                            text...
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={airplanesClouds} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Approche design basée sur le gain de masse et le coût final du produit et de sa production</Card.Header>
                        <Card.Description>
                            text...
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={airplanesClouds} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Analyse stress (statique, fatigue, FEM)</Card.Header>
                        <Card.Description>
                            text...
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
}

export default Ingenierie;