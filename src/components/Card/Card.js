import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ItemCard = ({data}) => {
    return (
        <Card>
            <Image src={data.img} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{data.name}</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                {data.status}
            </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default ItemCard;