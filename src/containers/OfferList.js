import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import OfferItem from './OfferItem';
import Pagination from './Pagination';

function OfferList ({ data }) {    
    const dispatch = useDispatch();
    const [pageList, setPageList] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [numberPerPage] = React.useState(3);
    const [numberOfPages, setNumberOfPages] = React.useState(0);
    const apply = item => dispatch({ type: 'APPLY_OFFER' , item });
    const loadList = () => {
        let begin = ((currentPage - 1) * numberPerPage);
        let end = begin + numberPerPage;
        let pageList = data.slice(begin, end);
        setPageList(pageList);
    }

    React.useEffect(
        () => {
            loadList();
            setNumberOfPages(Math.ceil(data.length / 3));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [data, currentPage]
    );
    
    return(
        <React.Fragment>
            {
                pageList && pageList.map(item => {
                return <OfferItem 
                        key = {item._id}
                        Item = {item}
                        apply={apply}
                        />
                })
            }
            {
                pageList.length > 0 &&
                <Pagination 
                    numberOfPages={numberOfPages} 
                    goToPage={setCurrentPage} 
                    currentPage={currentPage}
                    prevPage={() => setCurrentPage(currentPage - 1)}
                    nextPage={() => setCurrentPage(currentPage + 1)}
                />
            }
        </React.Fragment>
    );
};

OfferList.propTypes = {
    data: PropTypes.array
};
OfferList.defaultProps = {
    data: []
};

export default OfferList;