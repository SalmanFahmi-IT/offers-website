import React from 'react';
import PropTypes from 'prop-types';
import image from '../assets/images/avatar.png';

function UserProfil ({ user }) {
    return(
        <div className='user-box mb-2'>
            <div className='user-img'>
                <img src={image} alt={user.name} width='150'/>
            </div>
            <div className='user-content'>
                <h2 className='mb'> { user.name } </h2>
                <p className='mb'> <i className='fa fa-envelope blue'/> { user.email } </p>
                <p> <i className='fa fa-bus blue'/> { user.adresse } </p>
            </div>
        </div>
    );
};

UserProfil.propTypes = {
    user: PropTypes.object,
};
UserProfil.defaultProps = {
    user: {}
};

export default UserProfil;