import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OfferList from '../OfferList';
import { fetchOffers } from '../../store/offersActions';

function Home() {
    const dispatch = useDispatch();
    const {offers, userOffers} = useSelector( state =>  ({
        offers: state.offers.list,
        userOffers: state.user.offers.map(offer => offer._id)
    }));
    React.useEffect(
        () => {
            dispatch(fetchOffers())
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    const offersApplied = offers.map(offer => { return {...offer, applied: userOffers.includes(offer._id)}});
    return(
        <>
            <div className='title mb-2'>
                Offres <small>( {offers.length} offres trouvées )</small>
            </div>
            <OfferList data={ offersApplied } />
        </>
    );
};

export default Home;