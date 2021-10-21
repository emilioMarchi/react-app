import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ItemCard from '../Card/Card'

const ItemDetail = ({match}) => {
    const [item, setItem] = useState([]);

    useEffect(()=>{
        const
        axios(`https://breakingbadapi.com/api/characters/${match.params.id}`)
        .then((res)=>{console.log(res.data)});
    }, []);

    return (
        <div className='item-detail'>
            <ItemCard />
        </div>
    )
}

export default ItemDetail;

