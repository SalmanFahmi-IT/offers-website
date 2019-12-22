import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Button } from '../components';

function OfferItem ({ Item, apply }) {
    const [image, setImage] = React.useState('');
    React.useEffect(
        () => {
            import(`../assets/images/offers/${Item.company}_logo.png`).then(image => setImage(image.default))
        },
        [Item]
    )
    return(
        <div className='offer-box'>
            <div className='content'>
                <div className='offer-img'>
                    <img src={image} alt='logo' />
                </div>
                <div className='offer-content'>
                    <h2 className='offer-title mb'> { Item.name } </h2>
                    <p className='offer-subtitle mb'> Ajouté le { moment(Item.createdAt).format('DD-MM-YYYY') } </p>
                    <p className='offer-description'> { Item.description } </p>
                </div>
            </div>
            <div className='offer-btn'>
                <Button 
                onClick={() => apply(Item)} 
                primary={Item.applied}
                disabled={Item.applied}
                >
                    {Item.applied ? 'Postulé' : 'Postuler'}
                </Button>
            </div>
        </div>
    );
    
};

OfferItem.propTypes = {
    Item: PropTypes.object,
    apply: PropTypes.func
};
OfferItem.defaultProps = {
    item: {}
};
export default OfferItem;