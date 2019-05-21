import React from 'react';
import { Card } from 'semantic-ui-react';

function Ingenierie() {
    return (
        <div>
            <h2>Ingénierie</h2>
            <Card.Group >
                <Card centered color='black'>
                    <Card.Content>
                        <Card.Meta>Architecture innovante et complexe</Card.Meta>
                    </Card.Content>
                </Card>
                <Card centered color='black'>
                    <Card.Content>
                        <Card.Meta>Approche design basée sur le gain de masse et le coût final du produit et de sa production</Card.Meta>
                    </Card.Content>
                </Card>
                <Card centered color='black'>
                    <Card.Content>
                        <Card.Meta>Analyse stress (statique, fatigue, FEM)</Card.Meta>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
}

export default Ingenierie;