import React from 'react';
import { Image } from 'semantic-ui-react';
import airplanesClouds from '../img/airplanesClouds.jpg'

function Index() {
    return (
        <div>
            <Image src={airplanesClouds} size='huge' rounded centered/>
        </div>
    );
}

export default Index;