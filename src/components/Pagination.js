import React from 'react';
import './Pagination.css';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button key={i} onClick={() => handleClick(i)} className={currentPage === i ? 'active' : ''}>
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="pagination">
            {renderPageNumbers()}
        </div>
    );
};

export default Pagination;
