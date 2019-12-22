import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ numberOfPages, goToPage, currentPage, prevPage, nextPage }){
    const [numbers] = React.useState(() => {
        let pages = [];
        for(let i = 1; i <= numberOfPages; i++){
            pages.push(i);
        }
        return pages;
    });

    return(
        <div className='pagination'>
            <button 
            onClick={prevPage} 
            disabled={currentPage === 1} 
            className={`navigation ${currentPage === 1 ? 'navigation--disabled' : ''}`} >
                <i className='fa fa-arrow-left' />
            </button>
            {
                numbers.map((page, index) => {
                    const active = (page === currentPage) ? 'active-page' : '';
                    return <button 
                            key={page} 
                            className={active} 
                            disabled = {page === currentPage}
                            onClick={() => goToPage(page)}>{page}
                            </button>
                })
            }
            <button 
            onClick={nextPage} 
            disabled={currentPage === numberOfPages} 
            className={`navigation ${currentPage === numberOfPages ? 'navigation--disabled' : ''}`} >
                <i className='fa fa-arrow-right' />
            </button>
        </div>
    );
}
Pagination.propTypes = {
    numberOfPages: PropTypes.number, 
    goToPage: PropTypes.func, 
    currentPage: PropTypes.number,
    prevPage: PropTypes.func,
    nextPage: PropTypes.func
};
Pagination.defaultProps = {
    numberOfPages: 0
};

export default Pagination;