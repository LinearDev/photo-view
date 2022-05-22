import PropTypes from 'prop-types'
import React from "react";

export default function Pagination({ imagesPerPage, totalImages, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumbers.push(i);
    }

    if (pageNumbers.length > 1) {
        return (
            <nav className="paginationBox">
                <ul className="pagination">
                    {pageNumbers.map(num => <li key={Math.random()} className="page-item"><button onClick={() => paginate(num)} className="page-link">{num}</button></li>)}
                </ul>
            </nav>
        )
    } else {
        return;
    }
}


Pagination.propTypes = {
    imagesPerPage: PropTypes.number,
    totalImages: PropTypes.number,
    paginate: PropTypes.func
}