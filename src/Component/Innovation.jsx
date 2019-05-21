import React from 'react';
import { Card } from 'semantic-ui-react';

function Innovation() {
  return (
    <div>
      <h2>Innovation R&D</h2>
      <Card.Group >
        <Card centered color='black'>
          <Card.Content>
            <Card.Meta textAlign='center'>Projets de R&D en cours</Card.Meta>
          </Card.Content>
        </Card>
        <Card centered color='black'>
          <Card.Content>
            <Card.Meta textAlign='center'>Nouveaux projets</Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

export default Innovation;
