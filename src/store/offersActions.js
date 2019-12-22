import request from '../utils/request';

const fetchOffersSuccess = data => ({
  type: 'FETCH_OFFERS_SUCCESS',
  data
});

const fetchOffersStarted = () => ({
  type: 'FETCH_OFFERS_STARTED'
});

const fetchOffersFailure = error => ({
  type: 'FETCH_OFFERS_FAILURE',
  error
});

export const fetchOffers = () => {
  return dispatch => {
    dispatch(fetchOffersStarted());
    request(`${process.env.REACT_APP_API_URL}/offers`)
      .then(res => {
        dispatch(fetchOffersSuccess(res));
      })
      .catch(err => {
        dispatch(fetchOffersFailure(err));
      })
  }
}