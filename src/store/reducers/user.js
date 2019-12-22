/**
 * UserReducer
 */
const initialState = {
  userInfo: {
    name: "Allen Tomas",
    email: "volkman.itzel@hotmail.fr",
    adresse: "072 Eileen Brooks Suite 882"
  },
  offers: []
};
function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'APPLY_OFFER':
        const offer = {...action.item, applied: true };
        return {
          ...state,
          offers: [offer, ...state.offers],
        };
      default:
        return state
    }
}

export default userReducer;