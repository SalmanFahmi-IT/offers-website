/**
 * OffersReducer
 */
const initialState = {
  list: [],
  started: false,
  success: false,
  failure: false
};
function offersReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_OFFERS_STARTED':
        return {
          ...state,
          started: true
        };
    case 'FETCH_OFFERS_SUCCESS':
      return {
        ...state,
        list: action.data,
        started: false,
        success: true,
      };
    case 'FETCH_OFFERS_FAILURE':
      console.log('action', action)
      return {
        ...state,
        failure: true,
        message: action.err
      };
    default:
      return state
    }
}

export default offersReducer;