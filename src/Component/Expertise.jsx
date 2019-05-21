import React from 'react';
import { Card } from 'semantic-ui-react';

function Expertise() {
    return (
        <div>
            <h1>Notre expertise</h1>
            <Card.Group style={{ marginLeft: '80px', marginRight: '80px' }}>
                <Card className='expertiseMeta' fluid color='black' style={{ marginLeft: '20px', marginRight: '20px' }} meta={"Solution End-to-End de la conception à la production série en intégrant l'industrialisation, la qualification et la certification (navigabilité)."} />
            </Card.Group>
        </div>
    );
}

export default Expertise;