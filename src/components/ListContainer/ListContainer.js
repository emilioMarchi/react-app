import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemCard from '../Card/Card';
import './ListContainer.css';
import { Link } from 'react-router-dom';

const ListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://breakingbadapi.com/api/characters')
        .then((json) => setItems(json.data));
    }, [])

    return(
        <div className="cards-container">
            { items.map((item) => {
                return (
                    <div key={item.char_id}>
                        <Link to={`/detail/${item.char_id}`}>
                            <ItemCard data={item} />
                        </Link>
                    </div>
                );
            }) }
        </div>
    )
}

export default ListContainer;