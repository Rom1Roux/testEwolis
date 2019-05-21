import React from 'react';
import { Card } from 'semantic-ui-react';

function Qualification() {
    return (
        <div>
            <h2>Qualification produit</h2>
            <Card.Group >
                <Card centered color='black'>
                    <Card.Content>
                        <Card.Meta textAlign='center'>Développement des tests et des moyens de qualification</Card.Meta>
                    </Card.Content>
                </Card>
                <Card centered color='black'>
                    <Card.Content>
                        <Card.Meta textAlign='center'>Certification auprès des autorités FAA et EASA</Card.Meta>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
}

export default Qualification;
