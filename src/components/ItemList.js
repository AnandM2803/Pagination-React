import React from 'react';
import './ItemList.css';

const ItemList = ({ items }) => {
    return (
        <ul className='item-list'>
            {items.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
};

export default ItemList;
