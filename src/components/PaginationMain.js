import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import ItemList from './ItemList';
import './PaginationMain.css';

const PaginationMain = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchItems();
    }, [currentPage]);

    const fetchItems = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            const total = response.headers.get('x-total-count');
            setItems(data);
            setTotalItems(parseInt(total, 10));
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='PaginationMain'>
            <h1>Pagination Example</h1>
            <ItemList items={items} />
            <Pagination
                totalItems={totalItems}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default PaginationMain;
