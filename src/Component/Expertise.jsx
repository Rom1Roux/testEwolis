import React from 'react';
import { Card } from 'semantic-ui-react';

function Expertise() {
    return (
        <div>
            <h2>Notre expertise</h2>
            <Card.Group >
                <Card centered color='black'>
                    <Card.Content>
                        <Card.Meta>Solution End-to-End de la conception à la production série en intégrant l'industrialisation, la qualification et la certification (navigabilité).</Card.Meta>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
}

export default Expertise;