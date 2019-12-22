import React from 'react';
import { useSelector } from 'react-redux';
import OfferList from '../OfferList';
import { UserProfil } from '../../components';

function Profile() {
    const {user, offers} = useSelector( state =>  ({
        user: state.user.userInfo,
        offers: state.user.offers
    }));
    return(
        <React.Fragment>
            <UserProfil user={user} />
            <div className='title mb-2'>
                Les offres que j'ai postulé 
                <small>( {offers.length} offres trouvées )</small>
            </div>
            <OfferList data={ offers }/>
        </React.Fragment>
    );
};
export default Profile;