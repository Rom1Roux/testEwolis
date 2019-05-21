import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import airplanesClouds from '../img/airplanesClouds.jpg'

function Industrialisation() {
    return (
        <div>
            <h2>Industrialisation et procédés</h2>
            <Card.Group centered>
                <Card>
                    <Image src={airplanesClouds} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Nos procédés actuels</Card.Header>
                        <Card.Description>
                            text...
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={airplanesClouds} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Qualification de nouveaux procédés</Card.Header>
                        <Card.Description>
                            text...
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={airplanesClouds} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Développement de nos propres outillages</Card.Header>
                        <Card.Description>
                            text...
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Image src={airplanesClouds} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Fiabilisation de taux de production série importants</Card.Header>
                        <Card.Description>
                            text...
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
}

export default Industrialisation;